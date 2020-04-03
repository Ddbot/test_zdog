import React from "react";
import { Link , useStaticQuery, graphql,} from "gatsby";

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


const Dev = ({ location }) => {

	const { state = {} } = location;
	const { content , lang } = state;
	return (<>
			<SEO title={lang === "fr" ? "Développeur" : "Dev"} />
			<Container className="container">
			<Link to='/' state={{ index: 0 }}>
				<ChevronTop
					onMouseEnter={() => chevronsBobbing.pause()}
					onMouseLeave={() => {
						chevronsBobbing.play();}}/>
			</Link>
			<LogoIllustration index={1} />	
			<p style={{marginRight:'10%'}}>
				J'utilise <Purple><b>React</b></Purple> et <br />
				des frameworks tels que <Purple><b>Gatsby JS</b></Purple> pour créer des sites et des <Purple><b>PWA</b></Purple><br />
				<Purple><b>modernes, rapides</b></Purple> et <Purple><b>accessibles</b></Purple>.
			</p>
		</Container>
			<Link to='/design' state={{ index: 2 }}>
				<ChevronBottom onMouseEnter={() => chevronsBobbing.pause()} onMouseLeave={() => { chevronsBobbing.play() }} />
			</Link>
	</>)
};

export default Dev;