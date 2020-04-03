/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"; 
import PropTypes from "prop-types";

import styled from 'styled-components';

import Header from "./header";

import "./styles/layout.css";
import 'bulma/css/bulma.css';

const Main = styled.main`
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    width: 100 vw;
`;

const Layout = (props) => {

  return (
    <>
      <Header siteTitle="Andry Online" toggleLang={props.toggleLang} lang={props.lang}/>
        {/* <div> */}
        <Main>{props.children}</Main>
        {/* </div> */}
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
