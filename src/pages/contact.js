import React, { useContext, useEffect } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import LangContext from '../components/contexts/LangContext';

import SEO from "../components/seo";
import Container from "../components/styled/Container";
import LogoIllustration from "../components/logoIllustration";
import { ChevronTop } from '../components/chevron';
import { animChevron } from '../utils/timelines';

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

  useEffect(() => {
  	let i18n = document.querySelector('a[href="/i18n"]');

  	animChevron(i18n, 'y', 15);
  });
	
return (<>
	<SEO title={"Contact"} />
	<Container>
		<Link to='/i18n' state={{ index: 3 }} style={{ position: "fixed", left: "25%", top: "10%", rotate:"180deg"}}>
			<ChevronTop	/>
		</Link>
		<LogoIllustration index={4} />				
		<div className="textContent" dangerouslySetInnerHTML={{ __html: content }} />
	</Container>
  </>)
};

export default Contact;