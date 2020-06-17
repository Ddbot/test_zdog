import React from 'react';

import LogoAWS from '../images/LogoAWS';
import LogoCSS from '../images/LogoCSS';
import LogoFirebase from '../images/LogoFirebase';
import LogoGatsby from '../images/LogoGatsby';
import LogoHTML from '../images/LogoHTML';
import LogoJS from '../images/LogoJS';
import LogoReact from '../images/LogoReact';
import LogoRoR from '../images/LogoRoR';

const LogoGrid = (props) => {
    return <div id="logoGrid">
                 <LogoHTML />                
                <LogoCSS />
                <LogoJS />                
                <LogoReact />
                <LogoGatsby />
                <div></div>
                <LogoFirebase />
                <div></div>
                <LogoAWS /> 
            </div>
}

export default LogoGrid;