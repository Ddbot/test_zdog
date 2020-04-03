import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Chevron from "../components/chevron";
import Slide from "../components/slide";


import {
  chevronsEntry,
  chevronsExit,
  chevronsBobbing,
  fadeOutText,
  fadeInText,
  up,
  down,
} from '../utils/timelines';

const SecondPage = props => {
  console.log('Props: ', props);
return <Layout toggleLang={props.toggleLang} lang={props.lang}>
    <SEO title={props.lang === "fr" ? "Développeur" : "Dev"} />
    <Link to='/'>
      <Chevron
        onClick={props.changeIndex}
        onMouseEnter={() => chevronsBobbing.pause()}
        onMouseLeave={() => {
          chevronsBobbing.play();
        }}
        id="chevron_top"
      />
    </Link>
    <Slide index={props.index} content={props.content} />

    <p>Welcome to page 2</p>
    <Link to='/'><Chevron onMouseEnter={() => chevronsBobbing.pause()} onMouseLeave={() => { chevronsBobbing.play() }} id="chevron_bottom" /></Link>
  </Layout>
};

export default SecondPage