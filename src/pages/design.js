import React, { useContext, useEffect } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import LangContext from '../components/contexts/LangContext';

import SEO from "../components/seo";
import Container from "../components/styled/Container";
import LogoIllustration from "../components/logoIllustration"
import Chevron from '../components/styled/Chevron';

import { animChevron } from '../utils/timelines';

import Smartphone from '../components/smartphone';

const Design = ({location}) => {
    //_____________data pour GraphQL________//
    const data = useStaticQuery(graphql `
    query DesQuery {
      site {
        siteMetadata {
          title
          en {
            slide_2
          }

          fr {
            slide_2
          }
        }
      }
    }
  `);
    const defaultLang = localStorage.getItem('lang');    
    const { prevIndex, index } = location.state;
    // let lang = useContext(LangContext);
  
  useEffect(() => {
    		let dev = document.querySelector('a[href="/dev"]');
    let i18n = document.querySelector('a[href="/i18n"]');
    
    		animChevron(dev, 'y', 15);
    		animChevron(i18n, 'y', 15);
  });

	useEffect(() => {
	  console.log('Prev: ', prevIndex, ' Current idx: ', index);
	});
    
    const content = data.site.siteMetadata[defaultLang][`slide_${index}`];
    
    return (<>
        <SEO title={"Designer"} />
        <Container className="container">
            <Link to='/dev' state={{ index: 1 }} style={{ position: "fixed", left: "25%", top: "10%", rotate:"180deg"}}>
					    <Chevron />
            </Link>        
        <LogoIllustration index={2} rotation={{  }}/>	
            <div className="textContent" dangerouslySetInnerHTML={{ __html: content }} />     
            <Link to='/i18n' state={{ index: 3 }} style={{ position: "fixed", left: "25%", bottom: "4%"}}>
              <Chevron />
            </Link>
      </Container>

  </>)
};

export default Design;