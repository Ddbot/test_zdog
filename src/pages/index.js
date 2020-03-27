import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";

import { useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Slide from "../components/slide";
import IPhone from "../components/iphone";
import LogoIllustration from "../components/logoIllustration";
import Chevron from "../components/chevron";

import {
  chevronsTl,
  zDogTl,
  chevronsEntry,
  chevronsExit,
  fadeOutText,
  fadeInText,
  interpolateCoords,
  up,
  down,
  entry
} from '../utils/timelines';

import "../components/styles/slide.css";
import "../components/styles/slides_text.css";

import "font-awesome/css/font-awesome.min.css";

let top = document.getElementById('chevron_top');
let bottom = document.getElementById('chevron_bottom');

  // if index = 0, pas d'animation
  // startValue = cone_seq[0]
  // endValue = cone_seq[0]
  // progress = 0
  // gsap.utils.interpolate(startValue, endValue, progress);
export let cone_seq = [
  {
    x: Math.PI / 2,
    y: -Math.PI / 16
  }, {
    x: 0,
    y: -Math.PI / 16
  },
  // celui-ci napparaitra meme pas
  {
    x: 0,
    y: -Math.PI / 16
  },
  // celui ci non plus, il sagira dun svg en SIGNATURE
  {
    x: 0,
    y: -Math.PI / 16
  },
  // celui ci non plus, il sagira dun svg en ENVELOPPE
  {
    x: 0,
    y: -Math.PI / 16
  }];
  // if index = 1
  //startValue = cone_seq[index-1]
  //endValue = index,
  // progress = ???
  
const IndexPage = () => {
  const defaultLang = Array.from(navigator.language).slice(0, 2).join('') || 'en';
  const illuRef = useRef();

  let [index, setIndex] = useState(0);
  let [lang, setLang] = useState(defaultLang);
  let [coneRotation, setConeRotation] = useState({ x: Math.PI / 2, y: -Math.PI / 16 });
  
  // Animation des chevrons
  useEffect(() => { 
    index === 0 && !!top && gsap.set("#chevron_top", { autoAlpha: 0, y: 0 });
    index === 4 && !!bottom && gsap.set("#chevron_bottom", { autoAlpha: 0, y: 0 }); 
        
    gsap.fromTo('#chevron_bottom',
      {
        y: 0
      },{ duration: .8, y: -20, repeat: -1, ease: "power1.inOut" })
      .yoyo(true);
    
    gsap.fromTo('#chevron_top',
      {
        y: 0
      },{ duration: .8, y: 20, repeat: -1, ease: "power2.inOut" })
      .yoyo(true);
  }, [index]);

  // Stockage du langage
  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);
  // Stockage de coneRotation dans la forwarded ref

  useEffect(() => { 
    illuRef.current = coneRotation;
   });

let dummy = document.querySelector('.dummy');

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
      
    if (index >= 0 && index <= 4) {
      switch (e.target.parentNode.id) {
        case "chevron_bottom":
          // chevronsTl.to(dummy, {
          //   autoAlpha: 0,
          //   backgroundColor: 'red',
          //   onStart: () => {
              // 1. Animer la sortie des chevrons
              chevronsExit();
            // },
            // onComplete: () => {
              // 2. Animer le fadeout de slide text
              fadeOutText(down);
              // 3. Changer l'index pour faire changer le contenu de slide text
              setIndex((prevIndex, props) => {
                return prevIndex + 1
              });
              // setConeRotation(cone_seq[index]);
            // }
          // })
          // .to(dummy, {
          //   autoAlpha: 1,
          //   onStart: () => {
              // 4. Animer le fade in de slide text
              fadeInText(down);
              // 5. Animer l'entree des chevrons
              chevronsEntry();
            // },
            // onComplete: () => {
            //   console.log("Fini d'animer le chevron du bas", index);
              setConeRotation(cone_seq[index]);
              // zDogTl.play();
            // }
          // });    
        break;
        
        case "chevron_top":
          // chevronsTl.to(dummy, {
          //   autoAlpha: 0,
          //   onStart: () => {
              // 1. Animer la sortie des chevrons
              chevronsExit();
            // },
            // onComplete: () => {
              // 2. Animer le fadeout de slide text
              fadeOutText(up);
              // 3. Changer l'index pour faire changer le contenu de slide text
              setIndex((prevIndex, props) => {
                return prevIndex - 1
              });
              // setConeRotation(cone_seq[index]);
            // }
          // })
            // .to(dummy, {
            //   autoAlpha: 0,
              // onStart: () => {
                // 4. Animer le fade in de slide text
                fadeInText(up);
              // },
              // onComplete: () => {
                // 5. Animer l'entree des chevrons
                chevronsEntry();    
                // setConeRotation(cone_seq[index]);
            //   }
            // });
          // console.log('Animé le chevron du haut', index);
                setConeRotation(cone_seq[index]);
          break;
          default:
          break;
        }
      } else {
      setIndex(0);      
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
              <SEO title="Home" />
              {index !== 0 && <Chevron onClick={changeIndex} id="chevron_top" />}     
              <div className="container">
        {index !== 2 && <LogoIllustration ref={illuRef} coneRotation={coneRotation}/>}
                <Slide content={getMarkup(index)} />
                {index === 2 && <IPhone />}
              </div>
            </Layout>
            {index !== 4 && <Chevron onClick={changeIndex} id="chevron_bottom" />}
            <span className="dummy"></span>
          </>);
};

export default IndexPage;
