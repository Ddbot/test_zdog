import React from 'react';
import styled from 'styled-components';

const Chevron = styled.button `
    text-decoration: none;
    position: fixed;
    left: 50% ;
    
    width: 3vw;
    height: 3vw;

    justify-content: center;
    cursor: pointer;

    border: none;
    border-radius: 50% ;
    background-color: transparent;
    outline-style: none;

    z-index: 10;
    
    svg {
        width: 3 vw;
        height: 3 vw;

        margin: 1 vw;
    }
`;

export default Chevron;