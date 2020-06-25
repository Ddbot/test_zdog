import React, { useEffect } from 'react';
// import gsap from 'gsap';

import LogoAWS from '../../../images/LogoAWS';
import LogoCSS from '../../../images/LogoCSS';
import LogoFirebase from '../../../images/LogoFirebase';
import LogoGatsby from '../../../images/LogoGatsby';
import LogoHTML from '../../../images/LogoHTML';
import LogoJS from '../../../images/LogoJS';
import LogoReact from '../../../images/LogoReact';

const LogoGrid = React.forwardRef((props, ref) => {
    return <div id="logoGrid" ref={ref}>
                 <LogoHTML onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave} />                
                <LogoCSS onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave} />
                <LogoJS onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave} />                
                <LogoGatsby onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave} />
                <LogoReact onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave} />
                <div className="logos" style={{ color: "transparent" }}>_</div>
                <LogoFirebase onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave} />
                <div className="logos" style={{ color: "transparent" }}>_</div>
                <LogoAWS onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave} /> 
    </div>
})

export default LogoGrid;