import React, {useEffect} from 'react';

const Cube = (props) => {

    // useEffect(() => { 
    //     Array.from(document.querySelectorAll('svg#cube>path')).map(p => p.style.transform = "translate(-80.92px, -161.13px)");
    // });

    return (<svg id="cube" viewBox="0 0 559 538" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round">
    {/* les 8 premiers sont les TRIANGLES */}
        {/* <g id="triangles">
            <path d="M639.01 590.75l-186-107.38v214.77l186-107.39z" fill="#f4f39a" stroke="#f4f39a" strokeWidth=".1"/>
            <path d="M267.01 590.78l186 107.38V483.4l-186 107.39z" fill="#f4e898" stroke="#f4e898" strokeWidth=".15"/>
            <path d="M453.01 483.37l-186-107.39v214.77l186-107.38z" fill="#f4dc95" stroke="#f4dc95" strokeWidth=".15"/>
            <path d="M267.01 375.98l186 107.39V268.59l-186 107.39z" fill="#f4d193" stroke="#f4d193" strokeWidth=".15"/>
            <path d="M453.01 268.61l-186-107.38V376l186-107.39z" fill="#f4c590" stroke="#f4c590" strokeWidth=".15"/>
            <path d="M81.01 268.6l186-107.4v214.78l-186-107.39z" fill="#f4ba8e" stroke="#f4ba8e" strokeWidth=".15"/>
            <path d="M267.01 376l-186-107.39V483.4l186-107.39z" fill="#f3af8b" stroke="#f3af8b" strokeWidth=".15"/>
            <path d="M81.01 483.39l186 107.39V376l-186 107.39z" fill="#f4e898" stroke="#f4e898" strokeWidth=".15"/>
        </g> */}
    {/* // CES 7 SONT LES FACADES */ }
        <g id="facades" strokeWidth=".15">
            <path d="M81 268.63v214.75l186 107.4V376L81 268.62z" fill="#f4e898" stroke="#f4e898"/>
            <path d="M453 268.6L267 375.96v214.78l186-107.38V268.6z" fill="#f4d193" stroke="#f4d193" />
            <path d="M267 161.22L81 268.59l186 107.38v.03l186-107.38-186-107.4z" fill="#f4ba8e" stroke="#f4ba8e" />
            <path d="M267 161.22L81 268.59l186 107.38V161.22zM81 268.62v214.75L267 376 81 268.62z" fill="#f3af8b" stroke="#f3af8b" />
            <path d="M267 161.22v214.75l.03.03L453 483.38V268.63h-.03L267 161.22z" fill="#f4c590" stroke="#f4c590" />
            <path d="M267 375.97v.03L81 483.38l186 107.4v-.03l186-107.38-186-107.4z" fill="#f4e898" stroke="#f4e898"/>
            <path d="M453 483.38v.03L267 590.8 453 698.2v-.03l186-107.38-186-107.4z" fill="#f4e898" stroke="#f4e898" />  
        </g>    
</svg>);
};

export default Cube;