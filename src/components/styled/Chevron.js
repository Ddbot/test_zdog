import styled from 'styled-components';

const Chevron = styled.button`    
    width: 4vw;
    height: 4vw;

    justify-content: center;
    cursor: pointer;

    border: .5vw solid hsla(0, 0%, 100%,0);
    border-radius: 50% ;
    background-color: hsla(201, 38%, 55%,1);
    outline-style: none;

    z-index: 10;

    clip-path: polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%);

    // rotate: 90deg;
    
    svg {
        width: 4vw;
        height: 4vw;
        display: none;
        margin: 1vw;
    }
`;

export default Chevron;