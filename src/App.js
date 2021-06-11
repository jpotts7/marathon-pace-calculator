import React from "react";
import Title from "./Title";
import CalcBody from "./CalcBody";
import CalcWrapper from "./styles/CalcWrapper";

function App() {
  return (
    <CalcWrapper>
      <Title />
      <CalcBody />
    </CalcWrapper>
  );
}

export default App;
