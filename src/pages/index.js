import React, { useState, useEffect, useRef } from "react";

import { useStaticQuery, graphql, Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Slide from "../components/slide";
import IPhone from "../components/iphone";
import Smartphone from "../components/smartphone";
import LogoIllustration from "../components/logoIllustration";
import Chevron from "../components/chevron";
import Cube from "../components/cube"

import gsap from 'gsap';

import {
  chevronsEntry,
  chevronsExit,
  chevronsBobbing,
  fadeOutText,
  fadeInText,
  up,
  down,
} from '../utils/timelines';

import "../components/styles/slide.css";
import "../components/styles/slides_text.css";

import "font-awesome/css/font-awesome.min.css";

const IndexPage = () => {
  const defaultLang = Array.from(navigator.language).slice(0, 2).join('') || 'en';

  let illuRef = useRef();

  let [index, setIndex] = useState(0);
  let [lang, setLang] = useState(defaultLang);

  let top = document.getElementById("chevron_top");
  let bottom = document.getElementById("chevron_bottom");
  
  // Animation des chevrons PERMANENTE
  useEffect(() => { 
    index === 0 && !!top && gsap.set("#chevron_top", { autoAlpha: 0, y: 0 });
    index === 4 && !!bottom && gsap.set("#chevron_bottom", { autoAlpha: 0, y: 0 }); 

      chevronsBobbing.fromTo("#chevron_top", {
          y: -20
      }, {
          y: 0,
      }, 0);

      chevronsBobbing.fromTo("#chevron_bottom", {
          y: 20
      }, {
          y: 0,
      }, 0);

    chevronsBobbing.play(0);   
  });

  // Stockage du langage
  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  //_____________data pour GraphQL________//
  const data = useStaticQuery(graphql `
    query ContentQuery {
      site {
        siteMetadata {
          title
          en {
            slide_0
            slide_1
            slide_2
            slide_3
            slide_4
          }

          fr {
            slide_0
            slide_1
            slide_2
            slide_3
            slide_4
          }
        }
      }
    }
  `);

  //_______________Functions utiles_______//
  let changeIndex = (e) => {
    e.preventDefault();
    e.stopPropagation();
      
    switch (e.target.parentNode.id) {
      case "chevron_bottom":
        // 1. Animer la sortie des chevrons
		chevronsExit();
        // 2. Animer le fadeout de slide text
        fadeOutText(down);
        // 3. Changer l'index pour faire changer le contenu de slide text
        setIndex((prevIndex, props) => {
          return prevIndex + 1
        });
        // 4. Animer le fade in de slide text
        fadeInText(down);
        // 5. Animer l'entree des chevrons
        chevronsEntry();
      break;
      
      case "chevron_top":
        // 1. Animer la sortie des chevrons
        chevronsExit();
        // 2. Animer le fadeout de slide text
        fadeOutText(up);
        // 3. Changer l'index pour faire changer le contenu de slide text
        setIndex((prevIndex, props) => {
          return prevIndex - 1
        });
        // 4. Animer le fade in de slide text
        fadeInText(up);
        // 5. Animer l'entree des chevrons
        chevronsEntry();    
      break;
      default:
      break;
    }    
  };

  let getMarkup = (index) => {
    return data.site.siteMetadata[lang][`slide_${index}`];
  };

  let toggleLang = (e) => {
    // e.stopPropagation();
    e.preventDefault();

    const lang = e.target.dataset.lang || e.target.parentNode.parentNode.dataset.lang || e.target.parentNode.parentNode.parentNode.parentNode.dataset.lang;        

    setLang(lang);
    localStorage.setItem('lang', lang);
  };
  
	return (<>
		<SEO title={lang === 'fr' ? 'Accueil' : 'Home' } />
		<div className="container">
			<LogoIllustration index={index} />	
			{/* EN */}
			{/* <p style='margin-right:10%;'>
				Hello ! <br />
                I'm <span className="purple"><b>Andry</b></span>,<br />
                A <span style='background-color: hsl(171, 100%, 41%);padding:6px;color:white'><b>Web site</b></span> and <span className="purple"><b>mobile Apps</b></span> Integrator and <span className="purple"><b>Designer</b></span>
        	</p> */}
			<p style={{marginRight:'10%'}}>
				Bonjour ! <br />
				Je suis <span className="purple"><b>Andry</b></span>,<br />
          		Intégrateur et <span className="purple"><b>Designer</b></span> de sites<span className="purple"><b>Web</b></span> et d'<span className="purple"><b>applications mobiles</b></span>
			</p>						  	
		</div>
		<Link to='/dev' truc={'truc'}><Chevron onMouseEnter={() => chevronsBobbing.pause()} onMouseLeave={() => { chevronsBobbing.play()}} id="chevron_bottom" /></Link>}
        <span className="dummy"></span>
          </>);
};

export default IndexPage;
