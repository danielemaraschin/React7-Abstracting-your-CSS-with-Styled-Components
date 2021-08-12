import { createGlobalStyle } from "styled-components";
//podemos dar o reset css com o styled component tb, mas para isso precisamos importar a createGlobalStyle
export const GlobalStyled =  createGlobalStyle`
* {
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
    margin: 0;
    padding: 0;
    text-decoration: none;
}
`; //aqui dentro da crase colocamos todo o reset do css que queremos dar RESET
//Podemos recortar do arquivo do css