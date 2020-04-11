import React, { useContext, useEffect } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import LangContext from '../components/contexts/LangContext';

import SEO from "../components/seo";
import Container from "../components/styled/Container";
import LogoIllustration from "../components/logoIllustration";
import { ChevronBottom, ChevronTop } from '../components/chevron';
import { chevronsBobbing } from '../utils/timelines';

const I18n = ({ location }) => {
// ______ data pour graphQL ----- //
  const data = useStaticQuery(graphql `
  query i18nQuery {
    site {
      siteMetadata {
        title
        en {
          slide_3
          }

          fr {
            slide_3
          }
        }
      }
    }
  `);
  const { index } = location.state;
  let current = useContext(LangContext);

  useEffect(() => {
    localStorage.setItem('lang', current);
  });

  const defaultLang = localStorage.getItem('lang') || current;

  const content = data.site.siteMetadata[defaultLang][`slide_${index}`];
  
  return (<>
	<SEO title={"i18n"} />
	<Container>
		<Link to='/design' state={{ index: 2 }}>
			<ChevronTop onClick={location.changeIndex}
				onMouseEnter={() => chevronsBobbing.pause()}
				onMouseLeave={() => {
				chevronsBobbing.play()}} />
		</Link>
		<LogoIllustration index={3} />			
			<div className="textContent" dangerouslySetInnerHTML={{ __html: content }} />     
	<Link to='/contact' state={{ index: 4 }}><ChevronBottom onMouseEnter={() => chevronsBobbing.pause()} onMouseLeave={() => { chevronsBobbing.play() }} /></Link>
	</Container>
  </>)
};

export default I18n;