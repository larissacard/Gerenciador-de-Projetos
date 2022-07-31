import React from 'react';
import KanbanLi from '../KanbanLi';

import { Container, ContTarefas } from './styles';

function KanbanUl(Props) {
  return (
    <Container>
        <h2>{Props.titulo}</h2>
        <ContTarefas>
            {Props.elements.map((e, index) =>
                <KanbanLi key={index} dados={e}/>
            )}
        </ContTarefas>
    </Container>
  );
}

export default KanbanUl;