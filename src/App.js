import React from "react";
import { ThemeProvider } from "styled-components";
import { temaClaro, temaEscuro } from "./Components/UI/temas";

import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import { GlobalStyled} from "./Components/GlobalStyled"
import { BtnTema } from "./Components/UI";
import SwitcherTheme from "./Components/SwitcherTheme";

function App() {
  return (
    <ThemeProvider theme={temaEscuro}>
    <GlobalStyled/>
    <BtnTema>
      <SwitcherTheme></SwitcherTheme>
    </BtnTema>
      <Cabecalho />
      <Container />
    </ThemeProvider>
  );
}

export default App;
