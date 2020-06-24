/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import React from "react";
import Layout from "./src/components/layout/Layout";
import { LangProvider } from "./src/components/contexts/LangContext";

// export const wrapRootElement = ({ element }) => (<LangProvider>{element}</LangProvider>);

// const React = require("react")
// const Layout = require("./src/components/layout")

// Logs when the client route changes
// exports.onRouteUpdate = ({ location, prevLocation }) => {
//   console.log("new pathname", location.pathname)
//   console.log("old pathname", prevLocation ? prevLocation.pathname : null)
// }

// Wraps every page in a component

export const wrapPageElement = ({ element, props }) => {
  return <LangProvider><Layout {...props}>{element}</Layout></LangProvider>
}
