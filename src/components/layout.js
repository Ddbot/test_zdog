/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import gsap from 'gsap';

import Header from "./header";
import "./styles/layout.css";

const Layout = (props) => {
  let [lang, setLang] = useState('fr');

  let toggleLang = (e) => {
    setLang(e.target.value);
    localStorage.setItem('lang', lang);
    console.log(e.target.value, localStorage.getItem('lang'));
  };

  return (
    <>
      <Header siteTitle="Andry Online" toggleLang={toggleLang} lang={lang} />
        <div>
          <main>{props.children}</main>
        </div>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
