import CardPessoa from "../../components/CardPessoa";
import PostPessoas from "./modal";
import api from "../../api";
import { useEffect, useState } from "react";

function Cards(Props) {
  const [initialPessoas, setInitialPessoas] = useState([]);
  const [pessoas, setPessoas] = useState([]);
  const [pessoaSelecionada, setPessoaSelecionada] = useState(0)

  useEffect(() => {
    const getPessoas = async () => {
      try {
        const response = await api.get("/pessoas");
        setInitialPessoas(response.data);
        setPessoas(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getPessoas();
  }, []);

  const handleChange = ({ target }) => {
    if (!target.value) {
      setPessoas(initialPessoas);
      return;
    }
    const filterPessoas = pessoas.filter((pessoas, pe_nome) =>
      pessoas.pe_nome.toUpperCase().includes(target.value.toUpperCase())
    );
    setPessoas(filterPessoas);
  };

  const childToParent = (childdata) => {
    setPessoaSelecionada(childdata.id)
    Props.childToParent(childdata)
  }


  return (
    <>
      <div className="bt">
        <div className="dropdown me-5">
          <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Filtros</button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a className="dropdown-item" href="#">Ordem Alfabetica A-Z</a></li>
            <li><a className="dropdown-item" href="#">Mais Antigos</a></li>
            <li><a className="dropdown-item" href="#">Mais Recentes</a></li>
          </ul>
        </div>

        <input className="search_pessoas" id="placeholder" type="search" placeholder="Pesquise aqui..." onChange={handleChange}></input>
        <a className="lupa_pessoas"><img src="assets/search.svg"></img></a>
      </div>
      <div className="create_card_pessoas d-flex flex-row justify-content-around">
        <div className="create_pessoas ms-4">
          <h5>Adicionar Pessoa</h5>
          <p>Adicionar uma nova pessoa</p>
        </div>
        <div className="ms-5">
          <PostPessoas />
        </div>
      </div>

        <ul style={{overflowY:"scroll"}}>
          {pessoas.map((p) => (
            <CardPessoa key={p.pe_id} id={p.pe_id} nome={p.pe_nome} profissao={p.pe_cargo} childToParent={childToParent} pessoaSelecionada={pessoaSelecionada}/>
          ))}
        </ul>
      </>
  );
}

export default Cards;









// class Cards extends Component {
//   state = {
//     initialPessoas: [],
//     pessoas: []
//   };

//   async componentDidMount() {
//     api.get("/pessoas")
//         .then((res) => {
//             this.setState({ initialPessoas: res.data, pessoas: res.data });
//         });
//   }

//   handleChange = ({ target }) => {
//     if (!target.value) {
//       this.setState({pessoas: this.initialPessoas});
//       return;
//     }
//     const filterPessoas = this.pessoas.filter(pessoas =>
//       pessoas.pe_nome.toUpperCase().includes(target.value.toUpperCase())
//     );
//     this.setState({pessoas: filterPessoas});
//   };
  
//   render() {
//     const { pessoas } = this.state
//     return (
//         <>
//         <div className="bt">
//           <div className="dropdown me-5">
//             <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Filtros</button>
//             <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
//               <li><a className="dropdown-item" href="#">Ordem Alfabetica A-Z</a></li>
//               <li><a className="dropdown-item" href="#">Mais Antigos</a></li>
//               <li><a className="dropdown-item" href="#">Mais Recentes</a></li>
//             </ul>
//           </div>
  
//           <input className="search_pessoas" id="placeholder" type="search" placeholder="Pesquise aqui..." onChange={this.handleChange}></input>
//           <a className="lupa_pessoas"><img src="assets/search.svg"></img></a>
//         </div>
//         <div className="create_card_pessoas d-flex flex-row justify-content-around">
//           <div className="create_pessoas ms-4">
//             <h5>Adicionar Pessoa</h5>
//             <p>Adicionar uma nova pessoa</p>
//           </div>
//           <div className="ms-5">
//             <PostPessoas />
//           </div>
//         </div>
  
//         <ul className="all_cards" style={{ overflowY: "scroll" }}>
//           {pessoas.map((p) => (
//             <CardPessoa key={p.pe_id} id={p.pe_id} nome={p.pe_nome} profissao={p.pe_cargo}/>
//           ))}
//         </ul>
//       </>
//     );
//   }
// }

// export default Cards;
