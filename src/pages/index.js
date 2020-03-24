import React, { useState, useEffect } from "react";
import gsap from "gsap";

import { useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Slide from "../components/slide";
import IPhone from "../components/iphone";
import LogoIllustration from "../components/LogoIllustration";
import Chevron from "../components/chevron";

import "../components/styles/slide.css";
import "../components/styles/slides_text.css";

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

const down = 100, up = -1 * down; 
  
const IndexPage = (props) => {
  const defaultLang = Array.from(navigator.language).slice(0, 2).join('') || 'fr';

  let [index, setIndex] = useState(0);
  let [lang, setLang] = useState(defaultLang);
  
  useEffect(() => { 
    index === 0 && gsap.set("#chevron_top", { autoAlpha: 0 });
    index === 4 && gsap.set("#chevron_bottom", { autoAlpha: 0 });
  }, [index]);

  // ___________ANIMATIONS______________//
  // Animer l'entree des chevrons
  let chevronsEntry = () => {
    index !== 4 && gsap.fromTo("#chevron_bottom", {
      autoAlpha: 0,
      y: -50
    }, {
      autoAlpha: 1,
      y: 0,
      onStart: () => {
        index !== 0 && gsap.fromTo("#chevron_top", {
          autoAlpha: 0,
          y: 50
        }, {
          autoAlpha: 1,
          y: 0,
        });
      },
    });
  }
  // Animer la sortie des chevrons
  let chevronsExit = () => {
    index !== 4 && gsap.to("#chevron_bottom", {
      y: 50,
      autoAlpha: 0,
      onStart: () => {
        index !== 0 && gsap.fromTo("#chevron_top", {
          autoAlpha: 1,
          y: 0
        }, {
          autoAlpha: 0,
          y: -50,
        });
      },
    });
  };

  // Animer le fadeout de slide text
  let fadeOutText = (direction) => {
    gsap.to('.slide.text', {
      autoAlpha: 0,
      y: direction,
      duration: .225,
    });
  };

  // Animer le fade in de slide text
  let fadeInText = () => {
    gsap.to('.slide.text', {
      autoAlpha: 1,
      y: 0,
      duration: .225,
    });
  };

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



  // useEffect(() => {
  //   window.addEventListener('load', () => {
  //         console.log(document.querySelector('.slide.text'));
  //     gsap.fromTo('.chevronContainer', {
  //   opacity: 0,
  //   },{
  //       opacity: 1,
  //       duration: 2,
  //     });
  //   });
  // });

  let changeIndex = (e) => {
    e.preventDefault();
    e.stopPropagation();

    let c_bottom = document.querySelector('#chevron_bottom');
    let c_top = document.querySelector('#chevron_top');
      
    // switch (index) {
    //   case 0:
    //     gsap.set(c_top, { autoAlpha: 0 });
    //     break;
    //   case 1:
    //   case 2:
    //   case 3:
    //     break;
    //   case 4:
    //     gsap.set(c_bottom, { autoAlpha: 0 });
    //     break;
    //   default:
    //     break;
    // }

    if (index >= 0 && index <= 4) {
    let id = e.target.parentNode.id;

      switch (id) {
        case "chevron_bottom":
          // 1. Animer la sortie des chevrons
          chevronsExit();
          // 2. Animer le fadeout de slide text
          fadeOutText(up);          
          // 3. Changer l'index pour faire changer le contenu de slide text
          setIndex(() => {
            return index + 1
          });
          // 4. Animer le fade in de slide text
          fadeInText();
          // 5. Animer l'entree des chevrons
          chevronsEntry();
          break;
        case "chevron_top":
          // 1. Animer la sortie des chevrons
          chevronsExit();
         
          // 2. Animer le fadeout de slide text
          fadeOutText(down);
          
          // 3. Changer l'index pour faire changer le contenu de slide text
          setIndex(() => {
            return index - 1
          });
          
          // 4. Animer le fade in de slide text
          fadeInText();

          // 5. Animer l'entree des chevrons
          index !== 4 && chevronsEntry();
          break;
        }
      } else {
      setIndex(0);
    }
    
    index === 0 && gsap.to("#chevron_top", { autoAlpha: 1 });

  };

  let getMarkup = (index) => {
    return data.site.siteMetadata[lang][`slide_${index}`];
  };

  let toggleLang = (e) => {
    e.stopPropagation();
    e.preventDefault();
    
      setLang(e.target.value);
      localStorage.setItem('lang', lang);
      console.log(e.target.value, localStorage.getItem('lang'));
  };
  
  return (<>
            <Layout toggleLang={toggleLang} lang={lang}>
              <SEO title="Home" />
              {index !== 0 && <Chevron onClick={changeIndex} id="chevron_top" />}     
              <div className="container">
                {index !== 2 && <LogoIllustration />}
                <Slide onMouseMove={handleMouseMove} content={getMarkup(index)} />
                {index === 2 && <IPhone />}
              </div>
            </Layout>
            {index !== 4 && <Chevron onClick={changeIndex} id="chevron_bottom"/>}
          </>);
};

export default IndexPage;
