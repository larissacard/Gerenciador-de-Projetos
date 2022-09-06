import React from "react";

import { 
  Container, 
  TopInfo, 
  Pessoas, 
  BottomInfo, 
  Button 
} from "./styles";

function CardAgenda(props) {
  return (
    <Container>
      <TopInfo>
        <h3>{props.titulo}</h3>
        <p>{props.hora}</p>
      </TopInfo>

      <BottomInfo>
        <Pessoas>
          <img src="assets/people.svg" alt="member1"/>
          <img src="assets/people.svg" alt="member2"/>
          <img src="assets/people.svg" alt="member3"/>
          <img src="assets/people.svg" alt="member4"/>
        </Pessoas>

        <Button>
          <img src="assets/btn_completed_white.svg" alt="button icon"/>
        </Button>
      </BottomInfo>
    </Container>
  );
}

export default CardAgenda;
