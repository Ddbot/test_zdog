import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Chevron from "../components/chevron";
import LogoIllustration from "../components/logoIllustration";


import {
  chevronsEntry,
  chevronsExit,
  chevronsBobbing,
  fadeOutText,
  fadeInText,
  up,
  down,
} from '../utils/timelines';

const I18n = props => {
  console.log('Props: ', props);
return <>
    <SEO title={"i18n"} />
    <Link to='/design'>
      <Chevron
        onClick={props.changeIndex}
        onMouseEnter={() => chevronsBobbing.pause()}
        onMouseLeave={() => {
          chevronsBobbing.play();
        }}
        id="chevron_top"
      />
	</Link>
	<LogoIllustration index={2} />	
    {/* en */}
    {
        /* <p style='margin-left: 10%;'>I am also a <span className="purple"><b>writer / translator</b></span>. I create catchy and <span className="purple"><b>a11y compliant content</b></span> and can even shoulder the <span className="purple"><b>i18n</b></span> of your sites and applications</p> */ }
    <p style={{marginLeft: '10%'}}>Je suis également <span className="purple"><b>rédacteur et traducteur</b></span>. Je créé du <span className="purple"><b>contenu SEO accrocheur</b></span> et assure une <span className="purple"><b>i18n de qualité</b></span></p>
    <Link to='/contact'><Chevron onMouseEnter={() => chevronsBobbing.pause()} onMouseLeave={() => { chevronsBobbing.play() }} id="chevron_bottom" /></Link>
  </>
};

export default I18n;