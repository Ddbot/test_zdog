import React, { useContext } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import LangContext from '../components/contexts/LangContext';

import SEO from "../components/seo";
import Container from "../components/styled/Container";
import LogoIllustration from "../components/logoIllustration";
import { ChevronBottom, ChevronTop } from '../components/chevron';
import { chevronsBobbing } from '../utils/timelines';

const Contact = ({location}) => {

	const data = useStaticQuery(graphql `
    query contactQuery {
      site {
        siteMetadata {
          title
          en {
            slide_4
          }

          fr {
            slide_4
          }
        }
      }
    }
  `);
	const { index } = location.state;	
	const defaultLang = localStorage.getItem('lang');
	const content = data.site.siteMetadata[defaultLang][`slide_${index}`];
	let lang = useContext(LangContext);
	
return (<>
	<SEO title={"Contact"} />
	<Container>
		<Link to='/i18n' state={{ index: index }}>
			<ChevronTop
			onClick={location.state.changeIndex}
			onMouseEnter={() => chevronsBobbing.pause()}
			onMouseLeave={() => {
				chevronsBobbing.play();
			}}        
			/>
		</Link>
		<LogoIllustration index={4} />				
		<div className="textContent" dangerouslySetInnerHTML={{ __html: content }} />
	</Container>
  </>)
};

export default Contact;