import React from "react";

import { Container, TopInfo, Pessoas, BottomInfo, Button } from "./styles";

function CardAgenda(props) {
  return (
    <Container>
      <TopInfo>
        <h3>{props.titulo}</h3>
        <p>{props.hora}</p>
      </TopInfo>

      <BottomInfo>
        <Pessoas>
            <img src="assets/people.svg" />
            <img src="assets/people.svg" />
            <img src="assets/people.svg" />
            <img src="assets/people.svg" />
        </Pessoas>

        <Button>
          <img src="assets/btn_completed_white.svg" />
        </Button>
      </BottomInfo>
    </Container>
  );
}

export default CardAgenda;
