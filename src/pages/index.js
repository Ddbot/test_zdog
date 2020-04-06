import React, { useState, useEffect, useContext } from "react";

import LangContext from '../components/contexts/LangContext';

import { useStaticQuery, graphql, Link } from "gatsby";

import SEO from "../components/seo";
import LogoIllustration from "../components/logoIllustration";
import {ChevronBottom} from '../components/chevron';

import Container from '../components/styled/Container';

import { chevronsBobbing } from '../utils/timelines';

import "font-awesome/css/font-awesome.min.css";

const IndexPage = (props) => {
  const defaultLang = localStorage.getItem('lang');

  let index = 0;
  let lang = useContext(LangContext);

  console.log('Lang in context in ndex is: ', lang);
	
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
  const content = data.site.siteMetadata[defaultLang][`slide_${index}`];

	return (<>
				<SEO title={lang === 'fr' ? 'Accueil' : 'Home' } />
    <Container className="container">
        <LogoIllustration index={index} />
      <div className="textContent" dangerouslySetInnerHTML={{ __html: content }} />
      { index !== 4 && <Link to='/dev' state={{ index: index + 1, }}><ChevronBottom onMouseEnter={() => chevronsBobbing.pause()} onMouseLeave={() => { chevronsBobbing.play() }} /></Link>}
				</Container>
		</>);
};

export default IndexPage;
