import React, { useContext, useEffect } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import LangContext from '../components/contexts/LangContext';

import SEO from "../components/seo";
import Container from "../components/styled/Container";
import LogoIllustration from "../components/logoIllustration";
import { ChevronBottom, ChevronTop } from '../components/chevron';

import { chevronsBobbing } from '../utils/timelines';

const Dev = ({location}) => {
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
	const { index } = location.state;	
	let lang = useContext(LangContext);

	useEffect(() => { 
		localStorage.setItem('lang', lang);
	});
	
	const defaultLang = localStorage.getItem('lang') || lang;
	
	const content = data.site.siteMetadata[defaultLang][`slide_${index}`];
		
	return (<>
			<SEO title={location.state.lang === "fr" ? "Développeur" : "Dev"} />
			<Container className="container">
				<Link to='/' state={{ index: 0 }}>
					<ChevronTop
						onMouseEnter={() => { chevronsBobbing.pause() }}
						onMouseLeave={() => { chevronsBobbing.play() }}/>
				</Link>
				<LogoIllustration index={1} />	
					<div className="textContent" dangerouslySetInnerHTML={{ __html: content }} />
				<Link to='/design' state={{ index: 2 }}>
					<ChevronBottom
						onMouseEnter={() => chevronsBobbing.pause()}
						onMouseLeave={() => { chevronsBobbing.play() }} />
				</Link>
		</Container>

	</>)
};

export default Dev;

