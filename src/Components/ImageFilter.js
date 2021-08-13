import React from 'react';
import alimentacao from "../assets/images/alimentacao.svg";
import outros from '../assets/images/outros.svg'
import saude from "../assets/images/saude.svg";
import transporte from '../assets/images/transporte.svg'
import utilidades from "../assets/images/utilidades.svg";
import {IconeTema} from '../Components/UI'

export default (type) => {
    const Images = { //chave sera o correspondente para o tipo e o valor seráo componente a ser retornado
        Restaurant: <IconeTema src={alimentacao} alt="Restaurant"/>,
        Utilities: <IconeTema src={utilidades} alt="Utilities"/>,
        Health: <IconeTema src={saude} alt="Health"/>,
        Transport: <IconeTema src={transporte} alt="Transport"/>,
        default: <IconeTema src={outros} alt="Others" />,
    };

    return Images[type] || Images.default;
};