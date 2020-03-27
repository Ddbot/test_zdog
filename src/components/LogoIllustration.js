// import ReactDOM from 'react-dom'
import React, { useEffect, useState } from 'react';

import { Illustration, Cone } from 'react-zdog';
import gsap from 'gsap';

const LogoIllustration = React.forwardRef((props, ref) => {
    let [coneRotation, setConeRotation] = useState(props.coneRotation);

    return (<Illustration zoom={10}>
        <Cone
            ref={ ref }
            diameter={24}
            length={24}
            stroke={false}
            color={'rebeccapurple'}
            backface={'#C25'}
            width={24}
            rotate={coneRotation}
        />
        <div className="dummySVG"></div>
    </Illustration>);
});

export default LogoIllustration
