import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useContext, useEffect } from "react";

import LangToggle from './langToggle';
import LangContext from './contexts/LangContext';

import "./styles/header.css";


const Header = (props) => {
  let current = useContext(LangContext);
  // console.log('Current ctx: ', current);

  useEffect(() => {
    localStorage.setItem('lang', current);
  });

  return (
    // <header>
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <h1> {props.siteTitle}</h1>
        </Link>
        {/* GERER LE MENU BURGER POUR LES SMARTPHONES !! */}
        <button className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="burger" onClick={() => {
          // console.log('BIRGER !! ouvrir un Portal ici pour changer de langue')
        }}>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>
      <Link to="/blog" className="navbar-item"><h1>Blog</h1></Link>      
      <Link to="/contact" className="navbar-item">Contact</Link>      
      <LangToggle lang={current} toggleLang={props.toggleLang} />
    </nav>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header