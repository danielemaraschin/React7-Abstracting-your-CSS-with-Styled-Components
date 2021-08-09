import React from 'react';
import alimentacao from "../assets/images/alimentacao.svg";
import outros from '../assets/images/outros.svg'
import saude from "../assets/images/saude.svg";
import transporte from '../assets/images/transporte.svg'
import utilidades from "../assets/images/utilidades.svg";
import {Icone} from '../Components/UI'

export default (type) => {
    const Images = { //chave sera o correspondente para o tipo e o valor seráo componente a ser retornado
        Restaurant: <Icone src={alimentacao} alt="Restaurant"/>,
        Utilities: <Icone src={utilidades} alt="Utilities"/>,
        Health: <Icone src={saude} alt="Health"/>,
        Transport: <Icone src={transporte} alt="Transport"/>,
        default: <Icone src={outros} alt="Others" />,
    };

    return Images[type] || Images.default;
};