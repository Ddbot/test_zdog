import React, { useState } from "react";
import gsap from "gsap";

import { useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Slide from "../components/slide";
import IPhone from "../components/iphone";

import LogoIllustration from "../components/LogoIllustration";
import Chevron from "../components/chevron";

import "../components/styles/mainContainer.css";
import "../components/styles/slides_text.css";

let handleMouseMove = (e) => {
  const chevron = document.querySelector('.chevronContainer');

  if (e.type === 'touchmove' || e.type === 'mousemove') {
    gsap.to(chevron, { duration: .9, y: -100, repeat: 1 });
    gsap.to(chevron, { duration: .9, y: 0, repeat: 1 });
  };
};
  
const IndexPage = (props) => {
  let [index, setIndex] = useState(0);

    let [lang, setLang] = useState(Array.from(navigator.language).slice(0, 2).join('') || 'fr');

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
    console.log(data.site.siteMetadata[lang][`slide_${index}`])
    return data.site.siteMetadata[lang][`slide_${index}`];
  };
    
  let changeIndex = (e) => { 
    e.preventDefault();
    e.stopPropagation();

    if (index >= 0 && index < 4) {
      setIndex(++index);
      gsap.to('.slide', {
        opacity: 1,
        duration: 1
      });
    } else {
      setIndex(0);
    }

    console.log(index);
  };

  return (
    <>
      <Layout toggleLang={toggleLang} lang={lang}>
          <SEO title="Home" />
          <div className="container">
            {index !== 2 && <LogoIllustration />}
          <Slide onMouseMove={handleMouseMove} content={getMarkup(index)} />
            {index === 2 && <IPhone />}
          </div>
        </Layout>
        <Chevron onClick={changeIndex} />
    </>
  )
};

export default IndexPage;
