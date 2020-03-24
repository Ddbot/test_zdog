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

const chevronsAnimation = gsap.timeline({
    defaults: {
        duration: .5,
        ease: "elastic",
        paused: true
    }
});
  
const IndexPage = (props) => {
  let [index, setIndex] = useState(0);

    let [lang, setLang] = useState(Array.from(navigator.language).slice(0, 2).join('') || 'fr');

    useEffect(() => {
      window.addEventListener('load', () => {
        gsap.fromTo('.chevronContainer', {
      opacity: 0,
      },{
          opacity: 1,
          duration: 4,
        });
      });
    });
  
    let toggleLang = (e) => {
      setLang(e.target.value);
      localStorage.setItem('lang', lang);
      console.log(e.target.value, localStorage.getItem('lang'));
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
  
  let getMarkup = (index) => {
    return data.site.siteMetadata[lang][`slide_${index}`];
  };
    
  let changeIndex = (e) => { 
    e.preventDefault();
    e.stopPropagation();

    if (index >= 0 && index <= 4) {
      switch (e.target.parentNode.id) {
        case "chevron_bottom":    
          gsap.to("#chevron_bottom", {
            duration: .5,
            y: 50,
            autoAlpha: 0,
          });
          gsap.fromTo("#chevron_bottom", {
              onStart: () => {
                  gsap.fromTo("#chevron_top", {
                      autoAlpha: 0,
                      y: 50
                  }, {
                      autoAlpha: 1,
                      y: 0,
                  });
              },
              autoAlpha: 0,
              y: -50
          }, {
              autoAlpha: 1,
              y: 0,
              onComplete: () => {
                setIndex(() => {
                  return index+1
                }); 
                index === 0 && gsap.to("#chevron_top", { autoAlpha: 1 });
              }
          });
          break;
        case "chevron_top":
                setIndex(() => {
                  return index-1
                });          
          break;
        default:
          break;
      }
    } else {
        setIndex(0);
      }
    
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
