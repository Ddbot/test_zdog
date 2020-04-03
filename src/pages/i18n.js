import React from "react";
import { Link } from "gatsby";

import SEO from "../components/seo";

import Container from "../components/styled/Container";
import { ChevronBottom, ChevronTop } from '../components/chevron';

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

const I18n = props => {
  console.log('Props: ', props);
return <>
	<SEO title={"i18n"} />
	<Container>
		<Link to='/design' state={{ index: 2 }}>
			<ChevronTop onClick={props.changeIndex}
				onMouseEnter={() => chevronsBobbing.pause()}
				onMouseLeave={() => {
				chevronsBobbing.play();}} />
		</Link>
		<LogoIllustration index={3} />			
		<p style={{ marginLeft: '10%' }}>Je suis également <Purple><b>rédacteur et traducteur</b></Purple>. Je créé du <Purple><b>contenu SEO accrocheur</b></Purple> et assure une <Purple><b>i18n de qualité</b></Purple></p>
	</Container>
	<Link to='/contact' state={{ index: 4 }}><ChevronBottom onMouseEnter={() => chevronsBobbing.pause()} onMouseLeave={() => { chevronsBobbing.play() }} /></Link>
  </>
};

export default I18n;