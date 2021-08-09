import React from "react" ;
import {Box, Botao} from "../../Components/UI";
import {extratoLista} from "../../info";


const Extrato = () => {
    return(
        <Box>
            {extratoLista.updates.map(({ id, type, from, value, date }) => {
        return(
            <div key={id}>
                <div>{type}</div>
                <div>{from} </div>
            </div>
        );
        })}
        <Botao>See more</Botao>
    </Box>
    );
};

export default Extrato;