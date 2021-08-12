import React, {useState} from "react";
import { ThemeProvider } from "styled-components";
import { temaClaro, temaEscuro } from "./Components/UI/temas";

import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import { GlobalStyled} from "./Components/GlobalStyled"
import { BtnTema } from "./Components/UI";
import SwitcherTheme from "./Components/SwitcherTheme";

function App() {
  const [tema, setTema] = useState(true)

  const toggleTema= () => {
    setTema((tema) => !tema); //é um tema,apertando no botao troca pro outro tema (se é t vira f se eh false vira true)
  };

  return (
    <ThemeProvider theme={tema ? temaClaro : temaEscuro}>
    <GlobalStyled/>
    <BtnTema onClick={toggleTema}>
      <SwitcherTheme tema ={tema}/>
    </BtnTema>
      <Cabecalho />
      <Container />
    </ThemeProvider>
  );
}

export default App;
