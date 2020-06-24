import React, { useEffect } from 'react';
// import gsap from 'gsap';

import LogoAWS from '../../../images/LogoAWS';
import LogoCSS from '../../../images/LogoCSS';
import LogoFirebase from '../../../images/LogoFirebase';
import LogoGatsby from '../../../images/LogoGatsby';
import LogoHTML from '../../../images/LogoHTML';
import LogoJS from '../../../images/LogoJS';
import LogoReact from '../../../images/LogoReact';

const LogoGrid = React.forwardRef((props,ref) => {
    return <div id="logoGrid" ref={ref}>
                 <LogoHTML />                
                <LogoCSS />
                <LogoJS />                
                <LogoReact />
                <LogoGatsby />
                <div className="logos" style={{ color: "transparent" }}>_</div>
                <LogoFirebase />
                <div className="logos" style={{ color: "transparent" }}>_</div>
                <LogoAWS /> 
    </div>
})

export default LogoGrid;