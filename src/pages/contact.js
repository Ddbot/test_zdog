import React from "react";
import { Link } from "gatsby";

import SEO from "../components/seo";

import Container from "../components/styled/Container";
import { ChevronTop } from '../components/chevron';
import LogoIllustration from "../components/logoIllustration";
import Purple from '../components/styled/Purple';



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
  <Container>
    <Link to='/design'>
      <ChevronTop
        onClick={props.changeIndex}
        onMouseEnter={() => chevronsBobbing.pause()}
        onMouseLeave={() => {
          chevronsBobbing.play();
        }}        
      />
	</Link>
	<LogoIllustration index={4} />	
    {/* en */}
    {/* <p style='margin-right:10%;'>I'm currently available for work. <<Purple>><b>Contact me !</p></span></p> */ }
    <p>Je suis à votre disposition pour plus de renseignements. <Purple><b>Contactez-moi !</b></Purple></p>
    </Container>
  </>
};

export default Contact;