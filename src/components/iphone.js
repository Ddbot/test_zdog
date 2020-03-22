import React from "react"
import {
    useStaticQuery,
    graphql
} from "gatsby"
import iphone from "../images/iphone.png"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const IPhone = () => (<img src={iphone} style={{
    width: "275.2px",
    height: "419.5px",
    border: "2px dashed red"
}}/>)

export default IPhone
