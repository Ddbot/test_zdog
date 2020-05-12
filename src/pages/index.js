import React, { useState, useEffect, useContext, useRef } from "react";
import Splitting from "splitting";

import LangContext from '../components/contexts/LangContext';

import styled from 'styled-components';

import SEO from "../components/seo";
import LogoIllustration from "../components/logoIllustration";
import Chevron from '../components/styled/Chevron';

import Container from '../components/styled/Container';
import { animChevron } from '../utils/timelines';

import Slide0 from '../components/slide0';
import Slide1 from '../components/slide1';
import Slide2 from '../components/slide2';
import Slide3 from '../components/slide3';
import Slide4 from '../components/slide4';


import "font-awesome/css/font-awesome.min.css";
import gsap from "gsap";

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
	let [translate, setTranslate] = useState({ x: 0, y: 0, z: 0 });
	let [rotate, setRotate] = useState(initial_position);
	let [scale, setScale] = useState(.8);



	// LANG		
	useEffect(() => {
		localStorage.setItem('lang', lang);
	});

	// Sync Slide (text content) to index
	useEffect(() => {
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
				case 4:
					res = <Slide4 lang={lang} />
					break;
				default:
					break;
			}
			return res;
		})
	}, [index, lang]);


	useEffect(() => {
		// Chevrons animation
		const up = !!chevronTop.current ? chevronTop.current : '.dummy';
		const bottom = !!chevronBottom.current ? chevronBottom.current : '.dummy';

		gsap.set([bottom, up], {
			autoAlpha: 0
		});

		gsap.to(bottom, {
			duration: 0,
			autoAlpha: 1,
			delay: 1.3,
			rotate: "-270deg"
		});

		gsap.to(up, {
			duration: 0,
			autoAlpha: 1,
			delay: 1.3,
			rotate: "270deg"
		});

		animChevron(up, 'y', 15);
		animChevron(bottom, 'y', -15);
	}, [index, lang]);

	let handleClick = (e) => {
		switch (e.target) {
			case chevronTop.current:
				// 1. faire disparaitre le texte avec splitting
				const p = document.querySelector('.textContent>p');

				const res = Splitting({
					target: p,
					by: "words"
				});

				gsap.to(res[0].words, {
					opacity: 0,
					backgroundColor: "transparent",
					x: 1000,
					stagger: {
						amount: .195,
						from: "start"
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
				const pp = document.querySelector('.textContent>p');

				const ress = Splitting({
					target: pp,
					by: "words"
				});

				gsap.to(ress[0].words, {
					opacity: 0,
					backgroundColor: "transparent",
					// duration: .195,
					// x: 250,
					x: 1000,
					// scale: gsap.utils.distribute({
					// 	base: 1,
					// 	amount: .195,
					// 	from: "center"
					// }),
					stagger: {
						from: "start",
						amount: .195
					},
					onStart: () => {
						gsap.to('.purple', { duration: .195, backgroundColor: "transparent", color: "#4a4a4a", });
					},
					onComplete: () => {
						// 2. setIndex
						setIndex((prev) => {
							return prev + 1
						});
					}
				});
				break;
			default:
				break;
		}
	};

	// let handleRotation = (e) => {
	// 	e.persist();
	// 	setRotate(prev => {
	// 		return { ...prev, [e.target.name]: Number(e.target.value) }
	// 	});
	// 	// console.log(rotate);
	// }

	// let handleTranslation = (e) => {
	// 	e.persist();
	// 	if (e.target.name === "z") {
	// 		setScale(prev => Number(e.target.value));
	// 	}
	// 	setTranslate(prev => {
	// 		return { ...prev, [e.target.name]: Number(e.target.value) }
	// 	});
	// }

	return (<>
		<SEO title={lang === 'fr' ? 'Accueil' : 'Home'} />
		<Container className="container">
			{index !== 0 && <Chevron ref={chevronTop} style={{ top: "7%", position: "fixed", left: "25%", zIndex: 10 }} onClick={handleClick} />}
			<LogoIllustration
				ref={illo}
				index={index}
				style={{ zIndex: 2, flex: 1 }}
				translate={translate}
				rotate={rotate}
				scale={scale}
			/>
			{/* <RotationSliders handleRotation={handleRotation} handleTranslation={handleTranslation} /> */}
			<TextContainer className="textContent" style={{ flex: 1 }}>{slide}</TextContainer>
			{index !== 4 && <Chevron ref={chevronBottom} style={{ position: "fixed", left: "25%", bottom: "4%" }} onClick={handleClick} />} </Container>
		<div className="dummy" style={{ display: "none" }}></div>
	</>);
};

export default IndexPage;
