import React from 'react'

import './styles/chevron.css'

const Chevron = (props) => {
    return (<div className="chevronContainer" onClick={props.onClick}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 455 455" {...props} fill='rebeccapurple'>
  <path d="M227.5 0C101.86 0 0 101.86 0 227.5S101.86 455 227.5 455 455 353.14 455 227.5 353.14 0 227.5 0zm0 327.15L99.41 199.48l21.18-21.25L227.5 284.79l106.91-106.56 21.18 21.25L227.5 327.15z"/>
        </svg>
    </div>)
}

export default Chevron