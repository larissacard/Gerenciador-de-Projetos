import React from 'react';
import { Container, Top, Body } from './styles';

function KanbanLi(Props) {

  return (
    <Container>
        <Top>
          <h3>{Props.dados.tr_nome} (#{Props.dados.tr_id})</h3>
          <span style={{ backgroundColor: Props.dados.tr_prioridade === 1 ? "#67CB65" :
                                          Props.dados.tr_prioridade === 2 ? "#FF9533" : 
                                          Props.dados.tr_prioridade === 3 ? "#E74444" : "gray"}}>
            {
              Props.dados.tr_prioridade === 1 ? "Baixa" :
              Props.dados.tr_prioridade === 2 ? "Média" :
              Props.dados.tr_prioridade === 3 ? "Alta" :
              Props.dados.tr_prioridade
            }
          </span>
        </Top>
        <Body>
            <ul>
              <li>
                <span><strong>Descricao:</strong> {Props.dados.tr_descricao}</span> 
              </li>
              <li>
                <p>Data de Criação:</p> 
                <span>{Props.dados.tr_data_criacao.substring(0,10)}</span>
              </li>
              {/* <li> <strong>Data de Entrega:</strong> {Props.dados.tr_data_entrega}</li> */}
            </ul>
        </Body>
    </Container>
  );
}

export default KanbanLi;