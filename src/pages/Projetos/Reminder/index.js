import { useState, useEffect } from "react";
import api from "../../../api";
import { Form } from "react-bootstrap";
import { Stack, TextField } from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import moment from "moment";
import "moment/locale/pt-br";
import {
  Lembretes,
  Nota,
  Save,
  Name,
  Datetime,
  Delete,
  Container,
  CssTextField,
} from "./styles";

function Reminders() {
  const [data, setData] = useState(new Date().toISOString());
  const handleChange = (newValue) => {
    setData(newValue);
  };

  const [descricao, setDescricao] = useState("");
  const [lembretes, setLembretes] = useState([]);

  useEffect(() => {
    api
      .get("/lembretes")
      .then((response) => {
        setLembretes(response.data);
      })
      .catch((err) => {
        if (err.response.status === 401) {
          alert("Faça o Login para visualizar a página");
          window.location.href = "/login";
        } else alert(err.message);
      });
  }, []);

  function update() {
    api
      .get("/lembretes")
      .then((response) => {
        setLembretes(response.data);
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
          le_descricao: descricao,
          le_data_lembrete: data.toISOString(),
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

  function deleteReminder(le_id) {
    api
      .delete(`/lembretes/${le_id}`)
      .then((res) => {
        update();
        console.log(res.response);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <div>
      <Form onSubmit={(e) => cadastrar(e)}>
        <Stack spacing={1.5}>
          <CssTextField
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
      <Container>
        <Lembretes>
          {lembretes.map((le) => (
            <Nota key={le.le_id}>
              <div className="d-flex justify-content-end">
                <Delete onClick={() => deleteReminder(le.le_id)} />
              </div>

              <div className="d-flex justify-content-between">
                <div>
                  <Name>
                    <img src="assets/pin.svg" alt="pin icon"/>
                    {le.le_descricao}
                  </Name>
                </div>
                <div>
                  <Datetime>
                    <img src="assets/calendar.svg" alt="calendar icon"/>
                    {moment(le.le_data_lembrete).format("MMM Do YY")}
                  </Datetime>
                  <div>
                    <em>{moment(new Date(le.le_data_lembrete)).fromNow()}</em>
                  </div>
                </div>
              </div>
            </Nota>
          ))}
        </Lembretes>
      </Container>
    </div>
  );
}
export default Reminders;
