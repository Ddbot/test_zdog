// import ReactDOM from 'react-dom'
import React, { useState, useEffect } from 'react'
import { Illustration, Cone } from 'react-zdog'

// import './styles/logo.css'

const LogoIllustration = (props) => {

    return(<Illustration zoom={1}>
        <Cone
            diameter={240}
            length={240}
            stroke={false}
            color={'rebeccapurple'}
            backface={'#C25'}
            width={240}
            rotate = {
                {
                    x: props.x,
                    y: props.y
                }
            }
        />
  </Illustration>)
}

export default LogoIllustration
