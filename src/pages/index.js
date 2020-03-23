import React, { useState } from "react";
import gsap from "gsap";

import { useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Slide1 from "../components/slide1";
import Slide2 from "../components/slide2";
import Slide3 from "../components/slide3";
import Slide4 from "../components/slide4";
import Slide5 from "../components/slide5";
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
  
const IndexPage = () => {
  let [index, setIndex] = useState(0);

  const data = useStaticQuery(graphql `
    query ContentQuery {
      site {
        siteMetadata {
          title
          en {
            slide_1
            slide_2
            slide_3
            slide_4
            slide_5
          }

          fr {
            slide_1
            slide_2
            slide_3
            slide_4
            slide_5
          }
        }
      }
    }
  `);
  const lang = localStorage.getItem('lang');
let createMarkup = () => {
  return data.site.siteMetadata[lang]
};
    
  let handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    gsap.to('.slide', { opacity: 0, duration: 1 });

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

  let renderSwitch = (i) => {
    switch (i) {
      case 0:
        return <Slide1 onMouseMove={handleMouseMove} content={createMarkup()['slide_1']}/>
        break;
      case 1:
        return <Slide2 onMouseMove={handleMouseMove} content={createMarkup()['slide_2']}/>
        break;
      case 2:
        return <Slide3 onMouseMove={
          handleMouseMove
        }
        content={createMarkup()['slide_3']}/>
        break;
      case 3:
        return <Slide4 onMouseMove={
          handleMouseMove
        }
        content={createMarkup()['slide_4']}/>
        break;
      case 4:
        return <Slide5 onMouseMove={
          handleMouseMove
        }
        content={createMarkup()['slide_5']}/>
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Layout>
        <SEO title="Home" />
        <div className="container">
          {index !== 2 ? <LogoIllustration /> : null}
          {renderSwitch(index)}
        </div>
      </Layout>
      <Chevron onClick={handleClick} />
    </>
  )
};

export default IndexPage;
