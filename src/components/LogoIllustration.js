// import ReactDOM from 'react-dom'
import React from 'react'
import { Illustration, Cone } from 'react-zdog'

import './styles/logo.css'

const LogoIllustration = () => {
    return(<Illustration zoom={1.5}>
        <Cone
            diameter={240}
            length={240}
            stroke={false}
            color={'rebeccapurple'}
            backface={'#C25'}
            width={'50%'}
            rotate={{ x: Math.PI / 2, y: -Math.PI/16 }}
        />
  </Illustration>)
}

export default LogoIllustration