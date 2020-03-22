/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import gsap from 'gsap'

import Header from "./header"
import "./styles/layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          en{
            description
          }

          fr {
            description
          }
        }
      }
    }
  `)

  function createMarkup() {
    return {
      __html: data.site.siteMetadata.en.description
    };
  }

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
        <div>
        <main>{children}</main>
        {/* <div dangerouslySetInnerHTML={createMarkup()} /> */}
        </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
