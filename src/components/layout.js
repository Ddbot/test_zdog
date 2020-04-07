/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useContext, useState, useEffect } from "react"; 
import PropTypes from "prop-types";

import { Link, useStaticQuery, graphql } from "gatsby";

import styled from 'styled-components';
import Container from '../components/styled/Container';

import Header from "./header";

import LogoIllustration from '../components/logoIllustration';

import LangContext from './contexts/LangContext';
import { ChevronBottom, ChevronTop } from '../components/chevron';

import { chevronsBobbing } from '../utils/timelines';



import "./styles/layout.css";
import 'bulma/css/bulma.css';

var index = 0;


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

	useEffect(() => {
		!!lang && localStorage.setItem('lang', lang);
	 });
		
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
			<Container className="container">
				<Link to='/' state={{ index: 0 }}></Link>
					<Header siteTitle="Andry Online" locale={lang} toggleLang={toggleLang} />
					<Main>		
						<LogoIllustration index={index} />					
						{props.children}
					</Main>	
				<Link to='/dev' state={{ index: index + 1, }}><ChevronBottom onMouseEnter={() => chevronsBobbing.pause()} onMouseLeave={() => { chevronsBobbing.play() }} /></Link>
			</Container>
		</LangContext.Provider>	
	</>
	);
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
