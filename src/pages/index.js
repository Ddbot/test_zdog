import React, { useState, useEffect, useContext } from "react";
import Zdog from 'zdog';

import LangContext from '../components/contexts/LangContext';

import { useStaticQuery, graphql, Link, navigate } from "gatsby";

import SEO from "../components/seo";
import LogoIllustration from "../components/logoIllustration";
import { ChevronBottom } from '../components/chevron';
import RotationSliders from '../components/rotationSliders';

import Container from '../components/styled/Container';

import { chevronsBobbing } from '../utils/timelines';

import "font-awesome/css/font-awesome.min.css";
import gsap from "gsap";

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
  
  const defaultLang = localStorage.getItem('lang') || 'fr' || lang;

  console.log('Lang in context in ndex is: ', lang, defaultLang);
	
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
		const { x, y, z } = animation_sequence[index];
	
		let animateIllo = gsap.to('html', {
			visibility: 'visible',
			duration: 5,
			onUpdate: () => {
				setRotation((prevRotation) => {
					return ({
						x: gsap.utils.interpolate(x, animation_sequence[index + 1].x, animateIllo.progress()),
						y: gsap.utils.interpolate(y, animation_sequence[index + 1].y, animateIllo.progress()),
						z: gsap.utils.interpolate(z, animation_sequence[index + 1].z, animateIllo.progress()),
					});
				});
			},
			onComplete: () => {
				// navigate("/dev", {
				// 	state: {
				// 		index: index + 1
				// 	}
				// });
			}
		})
	};

	return (<>
		<SEO title={lang === 'fr' ? 'Accueil' : 'Home' } />
		<Container className="container">
			<LogoIllustration
				index={index}
				style={{ zIndex: 2 }}
				rot={rotation}
				// rot={animation_sequence[index]}
			/>
			{/* <RotationSliders handleRotation={handleRotation}/> */}
			<div className="textContent" dangerouslySetInnerHTML={{ __html: content }} />
			{/* <Link to='/dev' state={{ index: index + 1, }}> */}
				<ChevronBottom onMouseEnter={() => chevronsBobbing.pause()} onMouseLeave={() => { chevronsBobbing.play() }} onClick={() => handleClick()} />
			{/* </Link>     */}
			<svg>
				<defs>
				<clipPath id="bgPath">
					<path d="M367 28C337.4 -20.8 152.619 2.39765 136 57C130.667 59.6667 118.6 67.6 113 78C106 91 110 105 113 132C115.4 153.6 105.333 166.333 100 170C39.4978 260.363 67 211 22 310C-23 409 12 474 62 540C112 606 211 553 256 534C301 515 304 495 396 510C488 525 577 489 626 449C675 409 697 342 665 235C633 128 594 204 490 152C461.333 131 396.6 76.8 367 28Z" fill="#C4C4C4" stroke="black" />
				</clipPath>
				<clipPath id="bgPath2">
					<path d="M441 1C441 1 131.619 14.3976 115 68.9999C109.667 71.6666 13.6 68.5999 8 78.9999C0.999996 91.9999 181 129 184 156C186.4 177.6 136 156 79 182C49.0001 201 28.1736 216.702 1.00003 322C-6.99996 353 123 373 123 402C123 484.801 190 565 235 546C280 527 217 358 309 373C401 388 563 553 612 513C661 473 719 357 687 250C655 143 497 264 393 212C364.333 191 441 1 441 1Z" fill="#C4C4C4" stroke="black" />
				</clipPath>
				</defs>
			</svg>
			{/* <span id="dummy"></span> */}			
		</Container>
	</>);
};

export default IndexPage;
