// import ReactDOM from 'react-dom'
import React from 'react';
import { Illustration, Cone } from 'react-zdog';

const LogoIllustration = React.forwardRef((props, ref) => {
    return (<Illustration ref={ref} zoom={1}>
        <Cone            
            diameter={240}
            length={240}
            stroke={false}
            color={'rebeccapurple'}
            backface={'#C25'}
            width={240}
            rotate = { props.rotation }
        />
  </Illustration>)
})

export default LogoIllustration
