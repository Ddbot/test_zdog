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

const Contact = props => {
  console.log('Props: ', props);
return <>
    <SEO title={"Contact"} />
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
    {/* <p style='margin-right:10%;'>I'm currently available for work. <span className="purple"><b>Contact me !</p></span></p> */ }
    <p style={{marginRight:'10%'}}>Je suis à votre disposition pour plus de renseignements. <span className="purple"><b>Contactez-moi !</b></span></p>
  </>
};

export default Contact;