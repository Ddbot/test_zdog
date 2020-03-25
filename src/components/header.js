import {
  Link
} from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import LangToggle from './langToggle'

import "./styles/header.css"

const Header = (props) => {
  // let [lang, setLang] = useState(props.lang);
  return (
    // <header>
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
           <h1><Link to = "/"> {props.siteTitle}</Link></h1>
        </a>

        <a href="#" role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
        <LangToggle toggleLang={props.toggleLang} lang={props.lang}/>
    </nav>
  )}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header