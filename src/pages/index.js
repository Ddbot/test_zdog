import React, { useState, useEffect, useContext, useRef } from "react";
import Zdog from 'zdog';

import LangContext from '../components/contexts/LangContext';

import { useStaticQuery, graphql, Link, navigate } from "gatsby";

import styled from 'styled-components';

import SEO from "../components/seo";
import LogoIllustration from "../components/logoIllustration";
// import { ChevronBottom } from '../components/chevron';
import Chevron from '../components/styled/Chevron';
import RotationSliders from '../components/rotationSliders';

import Container from '../components/styled/Container';

import { animChevron } from '../utils/timelines';

import "font-awesome/css/font-awesome.min.css";
import gsap from "gsap";

const TextContainer = styled.div`
// clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
`;

const { TAU } = Zdog;

const animation_sequence = [{
    x: 5.72,
    y: 6.19,
    z: 0
  },
  {
    x: TAU,
    y: TAU / 2,
    z: 0
  },
  'ZOOMER SUR LECRAN AVEC VIEWBOX ???'
];


const IndexPage = (props) => {

	let illoRef = useRef(null);
	let chevronBottom = useRef(null)
//_____________data pour GraphQL________//
const data = useStaticQuery(graphql `
    query ContentQuery {
      site {
        siteMetadata {
          title
          en {
            slide_0
          }

          fr {
            slide_0
          }
        }
      }
    }
  `);
	let lang = useContext(LangContext);
	let index = 0;
 	let [rotation, setRotation] = useState(animation_sequence[index]);
	
  // LANG		
  useEffect(() => {
    localStorage.setItem('lang', lang);
  });
	
	// Background colors in Purple Class
	useEffect(() => {
		let purples = document.getElementsByClassName('purple');
		let colors = ['#f4dc95','#f3af8b','#f38181','#6199b8'];

		for (let i = 0; i < colors.length; i++) {
			purples[i].style.backgroundColor = colors[i];
		}
	});


	// Chevorns animation
	useEffect(() => {
		animChevron(chevronBottom.current, 'x', -15);
	});
  
  const defaultLang = localStorage.getItem('lang') || 'fr' || lang;
	
  const content = data.site.siteMetadata[defaultLang][`slide_${index}`];

//   const handleRotation = (e) => {
//     e.persist();
//     setRotation((prev) => {
//       return {...rotation, [e.target.id]: Number(e.target.value) }
//     });
//     console.log('Now rotation is ',rotation);
//   }
	

	let handleClick = (e) => {
		// ANIMER LA TRANSIITION

		console.log(chevronBottom.current);

		let anim = () => {
			const { x, y, z } = animation_sequence[index];

			setRotation((prevRotation) => {
				return ({
					x: gsap.utils.interpolate(x, animation_sequence[index + 1].x, animateIllo.progress()),
					y: gsap.utils.interpolate(y, animation_sequence[index + 1].y, animateIllo.progress()),
					z: gsap.utils.interpolate(z, animation_sequence[index + 1].z, animateIllo.progress()),
				});
			});		
		}
	
		let animateIllo = gsap.to('html', {
			visibility: 'visible',
			duration: 2,
			onStart: () => {
				gsap.ticker.add(anim);
			},
			onComplete: () => {
				gsap.ticker.remove(anim);

				navigate("/dev", {
					state: {
						index: index + 1
					}
				});
			}
		})
	};

	// gsap.to(chevronBottom.current, {
	// 	duration: 0.5,
	// 	x: -5,
	// 	repeat: -1,
	// 	paused: false
	// });

	return (<>
		<SEO title={lang === 'fr' ? 'Accueil' : 'Home' } />
		<Container className="container">
			<LogoIllustration
				ref={illoRef}
				index={index}
				style={{ zIndex: 2 }}
				rot={rotation}
				/>
			{/* <RotationSliders handleRotation={handleRotation}/> */}
			<TextContainer className="textContent" dangerouslySetInnerHTML={{ __html: content }} />
			<Chevron ref={chevronBottom}
				onMouseEnter={() => {
					animChevron(chevronBottom.current, 'x', -15, true);
				}}
				onClick={() => handleClick()}
				style={{ position: "fixed", left: "25%", bottom: "4%" }} />		
		</Container>
	</>);
};

export default IndexPage;
