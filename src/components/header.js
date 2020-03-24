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
    <header>
      <div>
        <h1><Link to = "/"> {props.siteTitle}</Link></h1>
      </div>
      <LangToggle toggleLang={props.toggleLang} lang={props.lang} />
    </header>
  )}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header