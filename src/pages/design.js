import React from "react";
import { Link } from "gatsby";

import SEO from "../components/seo";

import Container from "../components/styled/Container";
import { ChevronBottom, ChevronTop } from '../components/chevron';

import Purple from '../components/styled/Purple';

import Smartphone from "../components/smartphone";
import LogoIllustration from "../components/logoIllustration"


import {
  chevronsEntry,
  chevronsExit,
  chevronsBobbing,
  fadeOutText,
  fadeInText,
  up,
  down,
} from '../utils/timelines';

const Design = props => {
    console.log('Props: ', props);
    return (<>
        <SEO title={"Designer"} />
        <Container className="container">
            <Link to='/dev' state={{ index: 1 }}>
                <ChevronTop 
                    onMouseEnter={() => chevronsBobbing.pause()}
                    onMouseLeave={() => {
                    chevronsBobbing.play(); }}/>
            </Link>
            <LogoIllustration index={2} />
            <p style={{marginLeft:'10%'}}>
                J'utilise également <Purple><b>React Native</b></Purple> et <Purple><b>Ruby on Rails</b></Purple>. En véritable <Purple><b>passionné</b></Purple>, j'
                assure une <Purple><b>veille technologique</b></Purple> permanente.
            </p>        
        </Container>
        <Link to='/i18n' state={{ indx: 3 }}>
            <ChevronBottom 
                onMouseEnter={() => chevronsBobbing.pause()} 
                onMouseLeave={() => { chevronsBobbing.play() }}/>
        </Link>
  </>)
};

export default Design;