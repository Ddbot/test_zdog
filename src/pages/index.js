import React, { useState, useEffect, useContext, useRef } from "react";
import Splitting from "splitting";

import LangContext from '../components/contexts/LangContext';

import styled from 'styled-components';

import SEO from "../components/layout/NavBar/Seo";
import LogoIllustration from "../components/layout/illustration/LogoIllustration";

import { animChevron } from '../utils/timelines';

import Slide0 from '../components/slides/slide0';
import Slide1 from '../components/slides/slide1';
import Slide2 from '../components/slides/slide2';
import Slide3 from '../components/slides/slide3';


import FilterSliders from '../components/AnimationTools/FilterSliders';
import RotationSliders from '../components/AnimationTools/rotationSliders';

import "font-awesome/css/font-awesome.min.css";
import gsap from "gsap";

import firebase from '../firebase.js';

const Container = styled.div `
	display: flex;
	flex-flow: row nowrap;

	justify-content: space-evenly;
	align-items: flex-start;


  	width: 100vw;

	font-size: 2rem;
	font-family: "Roboto";
	color: #002620;

	z-index: 1;


	align-self: center;

	&>canvas {
		overflow: visible;

		height: calc(92.13vh * 0.75);
		width: calc(92.13vh * 0.75);
	}

	&>.separator {
				height: calc(92.13vh * 0.75);
				border: 1px solid rgba(0, 38, 32, .7);
	}

	&>.textContent {
		display: flex;
		flex: 1;

		height: calc(92.13vh*0.75);
		max-width: calc(92.13vh*0.75);

		padding: 2rem;

		.highlight {
			color: rgba(245, 245, 245, 1);
			margin: .1rem;
		}

		&>p {
			font-size: 2rem;
			line-height: 2rem;

			line-height: 1.8;
			margin: auto 0;
		}
	}

	&>#logoGrid {
		align-self: center;
		height: calc(92.13vh*0.57);
		width: calc(92.13vh*0.57);
	}
`;

const Chevron = styled.button `    
    width: 4vw;
    height: 4vw;

    justify-content: center;
    cursor: pointer;

    border: .5vw solid hsla(0, 0%, 100%,0);
    border-radius: 50% ;
    background-color: hsla(201, 38%, 55%,1);
    outline-style: none;

    z-index: 10;

    clip-path: polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%);

    // rotate: 90deg;
    
    svg {
        width: 4vw;
        height: 4vw;
        display: none;
        margin: 1vw;
    }
`;
// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
// const functions = require('firebase-functions');

const db = firebase.firestore();

const TextContainer = styled.div`
// clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
`;


const initial_position = {
	x: 5.631,
	y: 6.022,
};

const IndexPage = (props) => {
	let illo = useRef(null);

	let chevronBottom = useRef(null);
	let chevronTop = useRef(null);

	let lang = useContext(LangContext);

	let [index, setIndex] = useState(0);
	let [slide, setSlide] = useState(null);
	let [translate, setTranslate] = useState({ x: 0, y: 10, z: 0 });
	let [rotate, setRotate] = useState(initial_position);
	let [scale, setScale] = useState(.8);

	// FILTER PARAMS
	let [hue, setHue] = useState('90');
	let [grayscale, setGrayscale] = useState(0);
	let [invert, setInvert] = useState(0);
	let [contrast, setContrast] = useState(0);


	// LANG		
	useEffect(() => {
		localStorage.setItem('lang', lang);
	},[lang]);

	// Sync Slide (text content) to index
	useEffect(() => {
		gsap.to('body', {
			duration: 1.5,
			autoAlpha: 1,
			onComplete: () =>
				setSlide(prev => {
					let res;
					switch (index) {
						case 0:
							res = <Slide0 lang={lang} />
							break;
						case 1:
							res = <Slide1 lang={lang} />
							break;
						case 2:
							res = <Slide2 lang={lang} />
							break;
						case 3:
							res = <Slide3 lang={lang} />
							break;
						default:
							break;
					}
					return res;
				})
		})
	}, [index, lang]);

	// Chevrons animation
	useEffect(() => {
		const up = !!chevronTop.current ? chevronTop.current : '.dummy';
		const bottom = !!chevronBottom.current ? chevronBottom.current : '.dummy';

		gsap.set([bottom, up], {
			autoAlpha: 0
		});

		gsap.to(bottom, {
			duration: 0,
			autoAlpha: 1,
			delay: 1.3,
			transform: "rotate(-270deg)",
			rotate: "-270deg"
		});

		gsap.to(up, {
			duration: 0,
			autoAlpha: 1,
			delay: 1.3,
			transform: "rotate(270deg)",
			rotate: "270deg",
		});

		animChevron(up, 'y', 15);
		animChevron(bottom, 'y', -15);
	}, [index, lang]);

	// Highlights
	useEffect(() => {
		gsap.set('.word', { display: "span" });

		let colors =
			[
				'rgba(209, 75, 21,1)',
				'rgba(107, 21, 209,1)',
				'rgba(209, 206, 0,1)',
				'rgba(107, 54, 107,1)'
			];

		document.querySelectorAll('.highlight').forEach((word, i) => {
			word.style.backgroundColor = colors[i];
			word.style.outline = `0.25rem solid ${colors[i]}`;
			word.style.display = "span";
		});
	});

	// Logos
	!!document.querySelectorAll(".logos") && gsap.fromTo('.logos', {
			y: 40,
			scale: 0,
			autoAlpha: 0
		}, {
			y: 0,
			scale: 1.5,
			autoAlpha: 1,
			stagger: {
				amount: 1.5,
				from: 4,
			}
	});

	let handleClick = (e) => {
		switch (e.target) {
			case chevronTop.current:
				// 1. faire disparaitre le texte avec splitting
				let target = Splitting({
					target: document.querySelector('.textContent>p'),
					by: "words"
				})[0].words;

				gsap.set(target, { display: "inline-flex" });
				gsap.to(target, {
					opacity: 0,
					backgroundColor: "hsla(0, 0%, 100%,1)",
					x: 1000,
					stagger: {
						amount: .195,
						from: "start"
					},
					onStart: () => {
						console.log('Les éléménts constituant Target sont: ', target);
					},
					onComplete: () => {
						// 2. setIndex						
						setIndex((prev) => {
							return prev - 1
						});
					}
				});

				break;

			case chevronBottom.current:
				// 1. faire disparaitre le texte avec splitting
				target = Splitting({
					target: document.querySelector('.textContent>p'),
					by: "words"
				})[0].words;

				gsap.to(target, {
					opacity: 0,
					backgroundColor: "hsla(0, 0%, 100%,1)",
					x: 1000,
					stagger: {
						from: "start",
						amount: .195
					},
					onStart: () => {
						gsap.to('.highlight', { duration: .195, backgroundColor: "hsla(0, 0%, 100%,1)", color: "hsla(0, 0%, 29%,1)", outlineColor: "hsla(0, 0%, 100%,1)"});
					},
					onComplete: () => {
						// 2. setIndex
						setIndex((prev) => {
							return prev + 1
						});
					}
				});
				// setIndex((prev) => {
				// 	return prev + 1
				// });
				break;
			default:
				break;
		}
	};

	let handleFilter = (e) => {
		e.persist();

		if (e.target.name === "hue") { setHue(prev => e.target.value) }
		if(e.target.name === "grayscale"){ setGrayscale(prev => e.target.value) }
		if(e.target.name === "invert"){ setInvert(prev => e.target.value) }
		if(e.target.name === "contrast"){ setContrast(prev => e.target.value) }

		// const canvas = document.querySelectorAll('.highlight');
		// canvas.forEach((c) => {
		// 	c.style.filter = `hue-rotate(${hue}deg) grayscale(${grayscale}) invert(${invert}) contrast(${contrast})`;
		// });

		const canvas = document.querySelector('.container>canvas');
		canvas.style.filter = `hue-rotate(${hue}deg) grayscale(${grayscale}) invert(${invert}) contrast(${contrast})`;
	}	

	let handleRotation = (e) => {
		e.persist();
		setRotate(prev => {
			return { ...prev, [e.target.name]: Number(e.target.value) }
		});
	}

	let handleTranslation = (e) => {
		e.persist();
		if (e.target.name === "z") {
			setScale(prev => Number(e.target.value));
		}
		setTranslate(prev => {
			return { ...prev, [e.target.name]: Number(e.target.value) }
		});
		console.log(translate, scale);
	}

	let seoContent = (index, lang) => {
		switch (index) {
			case 0:
				return lang === "fr" ? "Accueil" : "Home";
				break;
			case 1:
				return lang === "fr" ? "Programmation" : "Programming";
				break;
			case 2:
				return lang === "fr" ? "Écrire et Traduire" : "Writer & Translator";
				break;
			case 3:
				return "Contact"
				break;
			default:
				break;
		}
	}

	return (<>
		<SEO title={seoContent(index,lang)} />
		<Container className="container">
			{index !== 0 && <Chevron ref={chevronTop} style={{ top: "7%", position: "fixed", left: "25%", zIndex: 10 }} onClick={handleClick} />}
			<LogoIllustration
				ref={illo}
				index={index}
				style={{ zIndex: 2, flex: 1, position: "fixed"}}
				translate={translate}
				rotate={rotate}
				scale={scale}
			/>
			{/* <RotationSliders handleRotation={handleRotation} handleTranslation={handleTranslation} /> */}
			{/* <FilterSliders handleFilter={handleFilter} /> */}
			<div className="separator" />
			<TextContainer className="textContent" style={{ flex: 1 }}>{slide}</TextContainer>
			{index !== 3 && <Chevron ref={chevronBottom} style={{ position: "fixed", left: "25%", bottom: "4%" }} onClick={handleClick} />}
		</Container>
	</>);
};

export default IndexPage;
