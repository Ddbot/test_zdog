import React from "react";
import { Link } from "gatsby";

import SEO from "../components/seo";

import Container from "../components/styled/Container";
import LogoIllustration from "../components/logoIllustration";
import { ChevronBottom, ChevronTop } from '../components/chevron';

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


const Dev = props => {
  console.log('Props: ', props);
	return (<>
			<SEO title={props.lang === "fr" ? "Développeur" : "Dev"} />
			<Container className="container">
			<Link to='/'>
				<ChevronTop onClick={props.changeIndex}
					onMouseEnter={() => chevronsBobbing.pause()}
					onMouseLeave={() => {
						chevronsBobbing.play();}}/>
			</Link>
			<LogoIllustration index={1} />	
			{/* en */}
			{/* <p style={{marginRight:'10%'}}>
				I'm using <Purple><b>React</b></Purple> and <br />
				frameworks such as <Purple><b>Gatsby JS</b></Purple> to create 
				<Purple><b>fast, modern</b></Purple> and <Purple><b>accessible</b></Purple>                
				Web sites and <Purple><b>PWA</b></Purple><br />
			</p> */}
			<p style={{marginRight:'10%'}}>
				J'utilise <Purple><b>React</b></Purple> et <br />
				des frameworks tels que <Purple><b>Gatsby JS</b></Purple> pour créer des sites et des <Purple><b>PWA</b></Purple><br />
				<Purple><b>modernes, rapides</b></Purple> et <Purple><b>accessibles</b></Purple>.
			</p>
		</Container>
			<Link to='/design'>
				<ChevronBottom onMouseEnter={() => chevronsBobbing.pause()} onMouseLeave={() => { chevronsBobbing.play() }} />
			</Link>
	</>)
};

export default Dev;