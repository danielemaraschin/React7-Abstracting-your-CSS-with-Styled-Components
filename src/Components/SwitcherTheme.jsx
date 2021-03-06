import React from "react";
import ThemeOn from '../assets/images/themeOn.svg'
import ThemeOff from '../assets/images/themeOff.svg'
import { Icone } from "./UI";

const claro = <Icone src={ThemeOn} alt ="Tema Claro"/>
const escuro = <Icone src={ThemeOff} alt="TemaEscuro" />

export default ( { tema}) => (tema ? escuro : claro)

{/*funcao anonima que vai receber um tema se for VERDADEIRO escuro se não, claro*/}
{/* icone ja estavam no inicio do arquivo em assets/images */}