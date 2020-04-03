import React from "react";
import { Link } from "gatsby";

import SEO from "../components/seo";

import Container from "../components/styled/Container";
import { ChevronBottom, ChevronTop } from '../components/chevron';

import Purple from '../components/styled/Purple';

import Smartphone from "../components/smartphone";


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
            <Link to='/dev'>
                <ChevronTop onClick={props.changeIndex}
                    onMouseEnter={() => chevronsBobbing.pause()}
                    onMouseLeave={() => {
                    chevronsBobbing.play(); }}/>
            </Link>
            <p style={{marginLeft:'10%'}}>
                J'utilise également <Purple><b>React Native</b></Purple> et <Purple><b>Ruby on Rails</b></Purple>. En véritable <Purple><b>passionné</b></Purple>, j'
                assure une <Purple><b>veille technologique</b></Purple> permanente.
            </p>        
            <Smartphone />
        </Container>
        <Link to='/i18n'>
            <ChevronBottom 
                onMouseEnter={() => chevronsBobbing.pause()} 
                onMouseLeave={() => { chevronsBobbing.play() }}/>
        </Link>
  </>)
};

export default Design;