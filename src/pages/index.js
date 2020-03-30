import React, { useState, useEffect, useRef } from "react";

import { useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Slide from "../components/slide";
import IPhone from "../components/iphone";
import LogoIllustration from "../components/logoIllustration";
import Chevron from "../components/chevron";

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
            <Layout toggleLang={toggleLang} lang={lang}>
              <SEO title={lang === 'fr' ? 'Accueil' : 'Home' } />
              {index !== 0 && <Chevron onClick={changeIndex} onMouseEnter={() => chevronsBobbing.pause()} onMouseLeave={() => { chevronsBobbing.play()}} id="chevron_top" />}     
              <div className="container">
                {index !== 2 && <LogoIllustration index={index} />}
			  	<Slide index={index} content={getMarkup(index)} />
                {index === 2 && <IPhone />}
              </div>
            </Layout>
            {index !== 4 && <Chevron onClick={changeIndex} onMouseEnter={() => chevronsBobbing.pause()} onMouseLeave={() => { chevronsBobbing.play()}} id="chevron_bottom" />}
            <span className="dummy"></span>
          </>);
};

export default IndexPage;
