/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useContext, useState } from "react"; 
import PropTypes from "prop-types";

import styled from 'styled-components';

import Header from "./header";

import LangContext from './contexts/LangContext';
import { ChevronBottom, ChevronTop } from '../components/chevron';


import "./styles/layout.css";
import 'bulma/css/bulma.css';


const Main = styled.main`
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
	width: 90 vw;
	padding: 0 10vw;
`;

const defaultLang = Array.from(navigator.language).slice(0, 2).join('') || 'en';
localStorage.setItem('lang', defaultLang);

const Layout = (props) => {
	let [lang, setLang] = useState(defaultLang);
		
	const toggleLang = (e) => {
		e.stopPropagation();
		e.preventDefault();
		const {lang} = e.target.dataset
		console.log("Target du toggle: ", lang);
			setLang(() => { return lang }) ;
			localStorage.setItem('lang', lang);
		}
	return (<>
		<LangContext.Provider value={lang} >
			<Header siteTitle="Andry Online" locale={lang} toggleLang={toggleLang} />
			<Main>		
				{props.children}
			</Main>				
		</LangContext.Provider>	
	</>
	);
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
