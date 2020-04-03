import React from "react";
import { Link } from "gatsby";
import styled from 'styled-components';

import Layout from "../components/layout";
import SEO from "../components/seo";

import LogoIllustration from "../components/logoIllustration";
import { ChevronBottom,	ChevronTop } from '../components/chevron';



import {
  chevronsEntry,
  chevronsExit,
  chevronsBobbing,
  fadeOutText,
  fadeInText,
  up,
  down,
} from '../utils/timelines';
import Container from "../components/styled/Container";

const Dev = props => {
  console.log('Props: ', props);
return <>
	<SEO title={props.lang === "fr" ? "Développeur" : "Dev"} />
	<Container>
    <Link to='/'>
      <ChevronTop
			onClick={props.changeIndex}
			onMouseEnter={() => chevronsBobbing.pause()}
			onMouseLeave={() => {
				chevronsBobbing.play();
			}}/>
	</Link>
	<LogoIllustration index={1} />	
{/* en */}
	{/* <p style={{marginRight:'10%'}}>
		I'm using <span className="purple"><b>React</b></span> and <br />
		frameworks such as <span className="purple"><b>Gatsby JS</b></span> to create 
		<span className="purple"><b>fast, modern</b></span> and <span className="purple"><b>accessible</b></span>                
		Web sites and <span className="purple"><b>PWA</b></span><br />
    </p> */}
	<p style={{marginRight:'10%'}}>
		J'utilise <span className="purple"><b>React</b></span> et <br />
		des frameworks tels que <span className="purple"><b>Gatsby JS</b></span> pour créer des sites et des <span className="purple"><b>PWA</b></span><br />
		<span className="purple"><b>modernes, rapides</b></span> et <span className="purple"><b>accessibles</b></span>.
	</p>
	</Container>
    <Link to='/design'><ChevronBottom onMouseEnter={() => chevronsBobbing.pause()} onMouseLeave={() => { chevronsBobbing.play() }} style={{ bottom:'10vh' }} /></Link>
  </>
};

export default Dev;