import React from "react";
import { ThemeProvider } from "styled-components";
import { temaClaro, temaEscuro } from "./Components/UI/temas";

import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import { GlobalStyled} from "./Components/GlobalStyled"

function App() {
  return (
    <ThemeProvider theme={temaEscuro}>
    <GlobalStyled/>
      <Cabecalho />
      <Container />
    </ThemeProvider>
  );
}

export default App;
