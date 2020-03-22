import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Intro from "../components/intro"

import "../components/styles/mainContainer.css"
import LogoIllustration from "../components/LogoIllustration"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="container">
      <LogoIllustration />
      <Intro />
    </div>
  </Layout>
)

export default IndexPage
