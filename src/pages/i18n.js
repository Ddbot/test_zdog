import React, { useContext, useEffect } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import LangContext from '../components/contexts/LangContext';

import SEO from "../components/seo";
import Container from "../components/styled/Container";
import LogoIllustration from "../components/logoIllustration";
import Chevron from '../components/styled/Chevron';
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
		<Link to='/design' state={{ index: 2 }} style={{ position: "fixed", left: "25%", top: "10%", rotate:"180deg"}}>
			<Chevron onClick={location.changeIndex}
				onMouseEnter={() => chevronsBobbing.pause()}
				onMouseLeave={() => {
				chevronsBobbing.play()}} />
		</Link>
		<LogoIllustration index={3} />			
			<div className="textContent" dangerouslySetInnerHTML={{ __html: content }} />     
      <Link to='/contact' state={{ index: 4 }} style={{ position: "fixed", left: "25%", bottom: "4%" }}>
              <Chevron onMouseEnter={() => chevronsBobbing.pause()} onMouseLeave={() => chevronsBobbing.play()}/>
            </Link>
	</Container>
  </>)
};

export default I18n;