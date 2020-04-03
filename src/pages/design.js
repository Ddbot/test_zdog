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

const Design = props => {
  console.log('Props: ', props);
return <>
    <SEO title={"Designer"} />
    <Link to='/dev'>
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
    {/* <p style='margin-left:10%;'>
        I'm also using <span className="purple"><b>React Native</b></span> and <br />
        <span className="purple"><b>Ruby on Rails</b></span>. I am a music and technology fan, who <span className="purple"><b>always strives to learn more</b></span>
    </p> */}
    <p style={{marginLeft:'10%'}}>
        J 'utilise également <span className="purple"><b>React Native</b></span> et <span className="purple"><b>Ruby on Rails</b></span>. En véritable <span className="purple"><b>passionné</b></span>, j'
        assure une <span className="purple"><b>veille technologique</b></span> permanente.
    </p>
    <Link to='/i18n'><Chevron onMouseEnter={() => chevronsBobbing.pause()} onMouseLeave={() => { chevronsBobbing.play() }} id="chevron_bottom" /></Link>
  </>
};

export default Design;