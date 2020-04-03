import React from 'react';
import styled from 'styled-components';


// import './styles/chevron.css';

let handleKeyPress = () => {
    console.log('Gérer ca plus tard');
}

const Chevron = styled.button`

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

    // padding: 1rem;
`;

const ChevronBtn = (props) => {
    return (<Chevron className="chevronContainer" onClick={props.onClick} onKeyPress={props.onClick} tabIndex={0}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 455 455" {...props} onKeyPress={handleKeyPress} stroke="#6199b8" strokeWidth="48" fill='transparent'>
            <path d="M227.5 0C101.86 0 0 101.86 0 227.5S101.86 455 227.5 455 455 353.14 455 227.5 353.14 0 227.5 0zm0 327.15L99.41 199.48l21.18-21.25L227.5 284.79l106.91-106.56 21.18 21.25L227.5 327.15z" />
        </svg>
    </Chevron>)
};

export const ChevronBottom = styled(ChevronBtn)`
  transform: translateY(350px);
`;

export const ChevronTop = styled(ChevronBtn)`  
  transform: rotate(180deg) translateY(350px);
`;