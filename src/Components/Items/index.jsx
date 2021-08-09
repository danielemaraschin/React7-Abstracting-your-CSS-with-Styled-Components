import React from 'react';
import styled from 'styled-components'

const Items = styled.div`
box-shadow: 4px 4px 
border-radius:10px;
margin:2px 0;
display:flex;
align-items: center;
padding: 10px;
font-size:12px;
`;

export default (props) => {
    return <Items></Items>;
};