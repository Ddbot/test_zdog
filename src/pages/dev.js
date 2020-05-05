import React, { useContext, useEffect } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import LangContext from '../components/contexts/LangContext';

import SEO from "../components/seo";
import Container from "../components/styled/Container";
import LogoIllustration from "../components/logoIllustration";
import Chevron from '../components/styled/Chevron';


import { animChevron } from '../utils/timelines';

const Dev = ({location},props) => {
	//_____________data pour GraphQL________//
	const data = useStaticQuery(graphql `
    query DevQuery {
      site {
        siteMetadata {
          title
          en {
            slide_1
          }

          fr {
            slide_1
          }
        }
      }
    }
  `);		
	const { index, prevIndex } = location.state;	
	let lang = useContext(LangContext);

	useEffect(() => { 
		localStorage.setItem('lang', lang);
		let design = document.querySelector('a[href="/design"]');
		let home = document.querySelectorAll('a[href="/"]')[1];

		animChevron(design, 'y', -15);
		animChevron(home, 'y', 15);
	});

	useEffect(() => { 
		console.log('Prev: ', prevIndex, ' Current idx: ', index);
	});
	
	const defaultLang = localStorage.getItem('lang') || lang;
	
	const content = data.site.siteMetadata[defaultLang][`slide_${index}`];

	let handleClick = (e) => {
		// ANIMER LA TRANSIITION
	};	
		
	return (<>
			<SEO title={location.state.lang === "fr" ? "Développeur" : "Dev"} />
			<Container className="container">
				<Link to='/' state={{ prevIndex: 1, animate: true }} style={{ position: "fixed", left: "25%", top:"10%"}}>
					<Chevron style={{ rotate: "270deg", top: "14%", zIndex: 10}}/>
				</Link>
			<LogoIllustration index={1} prevIndex={props.prevIndex}/>				
			<div className="textContent" dangerouslySetInnerHTML={{ __html: content }} />
				<Link to='/design' state={{ prevIndex: 1,index: 2 }} style={{ position: "fixed", left: "25%", bottom: "4%"}}>
					<Chevron />
				</Link>
			</Container>

	</>)
};

export default Dev;

