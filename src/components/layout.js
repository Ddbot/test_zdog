/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react";
import PropTypes from "prop-types";

import styled from 'styled-components';

import Header from "./header";

import LangContext from './contexts/LangContext';

import "./styles/layout.css";
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
		<svg viewBox="0 0 681 573" fill="none" xmlns="http://www.w3.org/2000/svg">
			<defs>
				<clipPath id="bgPath">
					<path d="M367 28C337.4 -20.8 152.619 2.39765 136 57C130.667 59.6667 118.6 67.6 113 78C106 91 110 105 113 132C115.4 153.6 105.333 166.333 100 170C39.4978 260.363 67 211 22 310C-23 409 12 474 62 540C112 606 211 553 256 534C301 515 304 495 396 510C488 525 577 489 626 449C675 409 697 342 665 235C633 128 594 204 490 152C461.333 131 396.6 76.8 367 28Z" fill="hsla(0, 0%, 77%,1)" stroke="hsla(0, 0%, 0%,1)" />
				</clipPath>
				<symbol id="ic">
					<path fill="hsla(0, 0%, 0%,1)" d="M81,40.933c0-4.25-3-7.811-6.996-8.673c-0.922-5.312-3.588-10.178-7.623-13.844  c-2.459-2.239-5.326-3.913-8.408-4.981c-0.797-3.676-4.066-6.437-7.979-6.437c-3.908,0-7.184,2.764-7.979,6.442  c-3.078,1.065-5.939,2.741-8.396,4.977c-4.035,3.666-6.701,8.531-7.623,13.844C22.002,33.123,19,36.682,19,40.933  c0,2.617,1.145,4.965,2.957,6.589c0.047,0.195,0.119,0.389,0.225,0.568l26.004,43.873c0.383,0.646,1.072,1.04,1.824,1.04  c0.748,0,1.439-0.395,1.824-1.04L77.82,48.089c0.105-0.179,0.178-0.373,0.225-0.568C79.855,45.897,81,43.549,81,40.933z   M49.994,11.235c2.164,0,3.928,1.762,3.928,3.93c0,2.165-1.764,3.929-3.928,3.929s-3.928-1.764-3.928-3.929  C46.066,12.997,47.83,11.235,49.994,11.235z M27.842,36.301c0.014,0,0.027,0,0.031,0c1.086,0,1.998-0.817,2.115-1.907  c0.762-7.592,5.641-13.791,12.303-16.535c1.119,3.184,4.146,5.475,7.703,5.475c3.561,0,6.588-2.293,7.707-5.48  c6.664,2.742,11.547,8.944,12.312,16.54c0.115,1.092,1.037,1.929,2.143,1.907c2.541,0.013,4.604,2.087,4.604,4.631  c0,1.684-0.914,3.148-2.266,3.958H25.508c-1.354-0.809-2.268-2.273-2.268-3.958C23.24,38.389,25.303,36.316,27.842,36.301z   M50.01,86.723L27.73,49.13h44.541L50.01,86.723z" />
				</symbol>
			</defs>
		</svg>
	</div>
	);
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
