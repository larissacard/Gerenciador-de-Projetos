import React, { Component } from "react";
import api from "../../api";

class ExibirPessoas extends Component {
  state = {
    pessoas: [],
  };

  async componentDidMount() {
    const response = await api.get("/pessoas");

    this.setState({ pessoas: response.data });
  }

  render() {
    const { pessoas } = this.state;

    return (
      <div className="all_cards" style={{overflowY: "scroll"}}>
        {pessoas.map((p) => (
          <div key={p.pe_id} className="card_pessoas d-flex">
            <div className="info_pessoas">
              <h2>{p.pe_nome}</h2>
              <p>{p.ca_cargo}</p>
            </div>
            <div>
              <img className="profile" src="assets/profile.svg"></img>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default ExibirPessoas;
