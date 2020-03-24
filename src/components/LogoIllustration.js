// import ReactDOM from 'react-dom'
import React, { useState, useEffect } from 'react'
import { Illustration, Cone, Shape } from 'react-zdog'

import ReactDOM from 'react-dom'

// import './styles/logo.css'

const LogoIllustration = (props) => {
    // let [xRotation, setXRotation] = useState(Math.PI / 2);
    // let [yRotation, setYRotation] = useState(-Math.PI / 16);
    return(<Illustration zoom={1}>
        <Cone
            diameter={240}
            length={240}
            stroke={false}
            color={'rebeccapurple'}
            backface={'#C25'}
            width={240}
            rotate={{ x: Math.PI / 4, y: -Math.PI / 16 }}
        />
  </Illustration>)
}

export default LogoIllustration
