/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react";
import PropTypes from "prop-types";

import styled from 'styled-components';

import Header from "./NavBar/Header";

import LangContext from '../contexts/LangContext';

import "../styles/layout.css";
import 'bulma/css/bulma.css';

const Main = styled.main`
grid-row: 2 / span 1;
grid-column: 1 / span 2;
	display: flex;
	box-sizing: border-box;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
	width: 100%;
	height: 92.13vh;
`;

const defaultLang = Array.from(navigator.language).slice(0, 2).join('') || 'en';
localStorage.setItem('lang', defaultLang);

const Layout = (props) => {
	let [lang, setLang] = useState(defaultLang);

	const toggleLang = (e) => {
		e.stopPropagation();
		e.preventDefault();

		if (!!e.target.dataset) {
			lang = e.target.dataset.lang;
		} else {
			lang = e.target.parentElement.parentElement.parentElement.parentElement.dataset;
		}

		setLang((prev) => { 
			return (prev === 'fr' || undefined) ? 'en' : 'fr';
		});
		
		console.log('CLICKED ON toggleLang, current lang is ', lang, defaultLang);

		localStorage.setItem('lang', lang);
	}
	return (<div className="layout">
		<LangContext.Provider value={lang} >
			<Header siteTitle="Andry Online" locale={lang} toggleLang={toggleLang} />
			<Main>
				{props.children}
			</Main>
		</LangContext.Provider>
	</div>
	);
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
