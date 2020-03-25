import React, { useState, useEffect } from "react";
import gsap from "gsap";
import Zdog from 'zdog';

import { useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Slide from "../components/slide";
import IPhone from "../components/iphone";
import LogoIllustration from "../components/LogoIllustration";

import { Illustration, Cone, Shape } from 'react-zdog'

import Chevron from "../components/chevron";

import "../components/styles/slide.css";
import "../components/styles/slides_text.css";

import "font-awesome/css/font-awesome.min.css";

let handleMouseMove = (e) => {
      let top = document.getElementById('chevron_top');
      let bottom = document.getElementById('chevron_bottom');

  if (e.type === 'touchmove' || e.type === 'mousemove') {
    !!bottom && gsap.to('#chevron_bottom', { duration: .9, y: -100, repeat: 1 });
    !!bottom && gsap.to('#chevron_bottom', { duration: .9, y: 0, repeat: 1, ease: "elastic.out(1, 0.3)" });

    !!top && gsap.to('#chevron_top', { duration: .9, y: 100, repeat: 1 });
    !!top && gsap.to('#chevron_top', { duration: .9, y: 0, repeat: 1, ease: "elastic.out(1, 0.3)" });
  };
};

const down = 250, up = -1 * down,
  exit = .195, entry = 0.3;
  
const IndexPage = (props) => {
  const defaultLang = Array.from(navigator.language).slice(0, 2).join('') || 'en';

  let [index, setIndex] = useState(0);
  let [lang, setLang] = useState(defaultLang);
  let [xRot, setXRot] = useState(Math.PI / 2);
  let [yRot, setYRot] = useState(-Math.PI / 16);
  
  useEffect(() => { 
    index === 0 && gsap.to("#chevron_top", { autoAlpha: 0, duration: 1 });
    index === 4 && gsap.to("#chevron_bottom", { autoAlpha: 0, duration: 1 });

  }, [index]);

  // ___________ANIMATIONS________________//
  // Animer l'entree des chevrons
  let chevronsEntry = () => {
    index !== 4 && gsap.fromTo("#chevron_bottom", {
      duration: entry,
      autoAlpha: 0,
      y: -50,      
    }, {
      autoAlpha: 1,
      y: 0,
      onStart: () => {
        index !== 0 && gsap.fromTo("#chevron_top", {
          duration: entry,
          autoAlpha: 0,
          y: 50
        }, {
          autoAlpha: 1,
          y: 0,
        });
      },
    });

    index === 4 && gsap.fromTo("#chevron_top", {
      duration: entry,
      autoAlpha: 0,
      y: up,      
    }, {
      autoAlpha: 1,
      y: 0,
    });
  };
  // Animer la sortie des chevrons
  let chevronsExit = () => {
    index !== 4 && gsap.to("#chevron_bottom", {
      y: 50,
      autoAlpha: 0,
      duration: exit,      
      onStart: () => {
        index !== 0 && gsap.fromTo("#chevron_top", {
          duration: exit,
          autoAlpha: 1,
          y: 0
        }, {
          autoAlpha: 0,
          y: -50,
        });
      },
    });

    index === 4 && gsap.fromTo("#chevron_top", {
      autoAlpha: 1,
      y: 0,      
    },{
      duration: entry,
      autoAlpha: 0,
      y: up,
    });
  };

  // Animer le fadeout de slide text
  let fadeOutText = (direction) => {
    gsap.to('.slide.text', {
      autoAlpha: 0,
      y: direction,
      duration: exit,
    });
  };

  // Animer le fade in de slide text
  let fadeInText = (direction) => {
    gsap.fromTo('.slide.text', {
      duration: entry,
      autoAlpha: 0,
      y: direction
    },{
      autoAlpha: 1,
      y: 0,
    });
  };

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

    let dummy = document.querySelector('dummy');

    let dummyTl = gsap.timeline({
      defaults: {
        duration: exit
      }
    });

    let zdogAnim = gsap.timeline({
      defaults: {
        paused: true,
        duration: 1,
      }
    });

    zdogAnim.to(dummy, {
      autoAlpha: 0,
      onUpdate: () => {
        const x = Zdog.lerp(xRot, Math.PI, zdogAnim.progress());
        // let y = Zdog.lerp(yRot, Math.PI, zdogAnim.progress());
        setXRot(x);
        console.log('Hello dummy', xRot);
      }
    });
      
    if (index >= 0 && index <= 4) {
      switch (e.target.parentNode.id) {
        case "chevron_bottom":
          dummyTl.to(dummy, {
            autoAlpha: 1,
            onStart: () => {
              // 1. Animer la sortie des chevrons
              chevronsExit();
            },
            onComplete: () => {
              // 2. Animer le fadeout de slide text
              fadeOutText(down);
              // 3. Changer l'index pour faire changer le contenu de slide text
              setIndex(() => {
                return index + 1
              });
            }
          })
          .to(dummy, {
            autoAlpha: 1,
            onStart: () => {
              // 4. Animer le fade in de slide text
              fadeInText(down);
            },
            onComplete: () => {
              // 5. Animer l'entree des chevrons
              chevronsEntry();
              zdogAnim.delay(1).play();
            }
          });      
        break;
        
        case "chevron_top":
          dummyTl.to('exit', {
            autoAlpha: 0,
            onStart: () => {
              // 1. Animer la sortie des chevrons
              chevronsExit();
            },
            onComplete: () => {
              // 2. Animer le fadeout de slide text
              fadeOutText(up);
              // 3. Changer l'index pour faire changer le contenu de slide text
              setIndex(() => {
                return index - 1
              });
            }
          })
            .to(dummy, {
              autoAlpha: 1,
              onStart: () => {
                // 4. Animer le fade in de slide text
                fadeInText(up);
              },
              onComplete: () => {
                // 5. Animer l'entree des chevrons
                chevronsEntry();
              zdogAnim.delay(1).play();
              }
            });
          break;
          default:
          break;
        }
      } else {
      setIndex(0);
      zdogAnim.delay(1).play();
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
                {index !== 2 && <LogoIllustration x={xRot} y={yRot}/>}
    
                <Slide onMouseMove={handleMouseMove} content={getMarkup(index)} />
                {index === 2 && <IPhone />}
              </div>
            </Layout>
            {index !== 4 && <Chevron onClick={changeIndex} id="chevron_bottom" />}
            <span className="dummy" style={{ visibility: 'hidden', opacity: 0,width:'0px',height:'0px'}}></span>
          </>);
};

export default IndexPage;
