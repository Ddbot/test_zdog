import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Intro from "../components/intro"

import "../components/styles/mainContainer.css"

import Zdog from "zdog"

let isSpinning = true

let illo = new Zdog.Illustration({
  element: ".zdog-canvas",
  zoom: 4,
  dragRotate: true,
  // stop spinning when drag starts
  onDragStart: function() {
    isSpinning = false
  },
})

// circle
new Zdog.Ellipse({
  addTo: illo,
  diameter: 20,
  translate: { z: 10 },
  stroke: 5,
  color: "#636",
})

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="container">
      <div className="image">
        <Image />
      </div>
      <Intro />
      {/* <Link to = "/page-2/" > Go to page 2 </Link> */}
    </div>
    <canvas class="zdog-canvas" width="240" height="240"></canvas>
  </Layout>
)

export default IndexPage
