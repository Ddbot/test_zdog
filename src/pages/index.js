import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Intro from "../components/intro"

import "../components/mainContainer.css"

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
  </Layout>
)

export default IndexPage
