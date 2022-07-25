import React, { useState } from "react";

import Header from "../../components/header";
import Detalhes from "./detalhes";
import Cards from "./cards";

import { Container, ColunaUm, ColunaDois } from "./styles";

function Pessoas() {
  const [data, setData] = useState(1);

  const childToParent = (childdata) => {
    setData(childdata);
  };

  return (
    <Container>
      <Header />
      <Detalhes id={data}/>
      <ColunaDois>
        <Cards childToParent={childToParent} />
      </ColunaDois>
    </Container>
  );
}
export default Pessoas;
