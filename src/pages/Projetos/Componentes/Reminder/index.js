import { useState, useEffect } from "react";
import api from "../../../../api";

import { Form } from "react-bootstrap";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import moment from "moment";
import "moment/locale/pt-br";

import { 
  Stack, 
  TextField 
} from "@mui/material";

import {
  Lembretes,
  Nota,
  Save,
  Name,
  Datetime,
  Delete,
  Container,
  CssTextField,
  Organize,
  Descricao,
  OrganizeReminder,
} from "./styles";

import NaoAutorizado from "../../../../Components/NaoAutorizado";

function Reminders() {
  const [data, setData] = useState(new Date().toISOString());
  const handleChange = (newValue) => {
    setData(newValue);
  };

  const [descricao, setDescricao] = useState("");
  const [lembretes, setLembretes] = useState([]);
  const [isAlertVisible, setIsAlertVisible] = useState(false)

  useEffect(() => {
    api
      .get("/lembretes")
      .then((response) => {
        setLembretes(response.data.data);
      })
      .catch((err) => {
        if (err.response.status === 401) {
          setIsAlertVisible(true)
          setTimeout(() => window.location.href = "/login", 2000)
        } else console.log(err.message);
      });
  }, []);

  function update() {
    api
      .get("/lembretes")
      .then((response) => {
        setLembretes(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function cadastrar(e) {
    e.preventDefault();
    if (data && descricao) {
      api
        .post("/lembretes", {
          descricao: descricao,
          data: data.toISOString(),
        })
        .then((res) => {
          setDescricao("");
          setData(new Date().toISOString());
          update();
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }

  function deleteReminder(id) {
    api
      .delete(`/lembretes/${id}`)
      .then((res) => {
        update();
        console.log(res.response);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <>
      <Form onSubmit={(e) => cadastrar(e)}>
        <Stack spacing={1.5}>
          <CssTextField
            data-cy="descricao"
            autoComplete="off"
            fullWidth
            label="Lembrete"
            variant="outlined"
            value={descricao}
            size="small"
            onChange={(e) => setDescricao(e.target.value)}
            sx={{ marginTop: "12px" }}
          />
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker
              renderInput={(props) => (
                <TextField
                  data-cy="DateTimeInput"
                  size="small"
                  {...props}
                  sx={{
                    "&:hover .MuiInputLabel-outlined": {
                      color: "#6956E5",
                      transition: "0.5s",
                    },
                    "& .MuiOutlinedInput-root": {
                      color: "#764BA2",
                      transition: "0.5s",
                      svg: { color: "#764BA2" },

                      "&:hover": {
                        color: "#6956E5",
                        transition: "0.5s",
                        svg: { color: "#6956E5" },
                      },
                      "&.Mui-focused": {
                        borderColor: "#764BA2",
                        color: "#280948",
                        transition: "0.5s",
                        svg: { color: "#280948" },
                      },
                      "& fieldset": {
                        borderRadius: 20,
                        border: "2px solid #764BA2",
                        transition: "0.5s",
                      },
                      "&:hover fieldset": {
                        border: "2px solid #6956E5",
                        transition: "0.5s",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#280948",
                        transition: "0.5s",
                      },
                    },
                    ".MuiInputLabel-outlined": {
                      color: "#764BA2",
                      transition: "0.5s",
                      "&.Mui-focused": {
                        color: "#280948",
                        transition: "0.5s",
                      },
                    },
                  }}
                />
              )}
              fullWidth
              value={data}
              label="Data"
              onChange={handleChange}
            />
          </LocalizationProvider>

          <Save>Salvar</Save>
        </Stack>
      </Form>

      { lembretes ? 
      <Container>
        <Lembretes>
          {lembretes.map((le) => (
            <Nota key={le.id}>
              <Organize>
                <Delete onClick={() => deleteReminder(le.id)} />
              </Organize>

              <OrganizeReminder>
                <div>
                  <Name>
                    <img src="assets/pin.svg" alt="pin icon"/>
                    Lembretes
                  </Name>
                  <Descricao>
                    {le.descricao}
                  </Descricao>
                </div>

                <div>
                  <Datetime>
                    <img src="assets/calendar.svg" alt="calendar icon"/>
                    {moment(le.data).format("MMM Do YY")}
                  </Datetime>
                  <div style={{marginLeft: '15px'}}>
                    <em>{moment(new Date(le.data)).fromNow()}</em>
                  </div>
                </div>
              </OrganizeReminder>
            </Nota>
          ))}
        </Lembretes>
      </Container>
      : isAlertVisible && <NaoAutorizado />}
    </>
  );
}

export default Reminders;