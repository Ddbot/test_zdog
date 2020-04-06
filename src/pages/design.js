import React, { useContext } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import LangContext from '../components/contexts/LangContext';

import SEO from "../components/seo";
import Container from "../components/styled/Container";
import LogoIllustration from "../components/logoIllustration"
import { ChevronBottom, ChevronTop } from '../components/chevron';

import { chevronsBobbing } from '../utils/timelines';

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
    const { index } = location.state;
    let lang = useContext(LangContext);
    
    const content = data.site.siteMetadata[defaultLang][`slide_${index}`];
    
    return (<>
        <SEO title={"Designer"} />
        <Container className="container" style={{ display: "flex", flexFlow:"row nowrap", padding: "0 5rem"}}>
            <Link to='/dev' state={{ index: 1 }}>
                <ChevronTop 
                    onMouseEnter={() => { chevronsBobbing.pause() }}
                    onMouseLeave={() => { chevronsBobbing.play(); }}/>
            </Link>
            {/* <LogoIllustration index={2} /> */}
        <Smartphone style={{ width: '215px', height: '444px' }} index={2}/>
			<div className="textContent" dangerouslySetInnerHTML={{ __html: content }} />     
        </Container>
        <Link to='/i18n' state={{ index: 3 }}>
            <ChevronBottom 
                onMouseEnter={() => chevronsBobbing.pause()} 
                onMouseLeave={() => chevronsBobbing.play()}/>
        </Link>
  </>)
};

export default Design;