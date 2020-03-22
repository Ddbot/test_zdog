import React, { useState, useEffect } from "react"
import gsap from 'gsap'

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Slide1 from "../components/slide1"
import Slide2 from "../components/slide2"
import Slide3 from "../components/slide3"
import Slide4 from "../components/slide4"
import Slide5 from "../components/slide5"
import LogoIllustration from "../components/LogoIllustration"
import Chevron from "../components/chevron"

import "../components/styles/mainContainer.css"
import "../components/styles/slides_text.css"

let handleMouseMove = (e) => {
  const chevron = document.querySelector('.chevronContainer');

  if (e.type === 'touchmove' || e.type === 'mousemove') {
    gsap.to(chevron, { duration: .9, y: -100, repeat: 1 })
    gsap.to(chevron, { duration: .9, y: 0, repeat: 1 })
  }
}

const IndexPage = () => {
  let [index, setIndex] = useState(0)
    
  let handleClick = (e) => {
    e.preventDefault()
    e.stopPropagation()

    gsap.to('.slide', { opacity: 0, duration: 1})

    if (index >= 0 && index < 4) {
      setIndex(++index)
      gsap.to('.slide', {
        opacity: 1,
        duration: 1
      })
    } else {
      setIndex(0)
    }

    console.log(index)
  }

  let renderSwitch = (i) => {
    switch (i) {
      case 0:
        return <Slide1 onMouseMove = {handleMouseMove}/>
        break;
      case 1:
        return <Slide2 onMouseMove = {handleMouseMove}/>
        break;
            case 2:
              return <Slide3 onMouseMove = {
                handleMouseMove
              }
            />
        break;
            case 3:
              return <Slide4 onMouseMove = {
                handleMouseMove
              }
            />
        break;
            case 4:
              return <Slide5 onMouseMove = {
                handleMouseMove
              }
            />
        break;
      default:
        break;
    }
  }

  return (
  <>
  <Layout>
    <SEO title="Home" />
      <div className="container">
          {index !== 2 ? <LogoIllustration /> : null}
          {renderSwitch(index)}
      </div>
  </Layout>
    <Chevron onClick={handleClick}/>
    </>
)}

export default IndexPage
