import React, {
    useEffect
} from "react";
import {
    useStaticQuery,
    graphql
} from "gatsby";

import Splitting from "splitting";
import gsap from 'gsap';

// import './styles/slide.css';

const Slide_Gatsby = (props) => {

    const data = useStaticQuery(
        graphql `
      query {
        en: wordpressPage(id: {
                eq: "2ac6c4d7-8c49-59af-af5b-5b20b9f42be9"
            }) {
          title
          content
        }
        fr: wordpressPage(id: {
                eq: "0c102a64-704e-5a82-8ba9-29190a529087"
            }) {
          title
          content
        }
      }
    `
    );

    useEffect(() => {
        let target = document.querySelector('[data-splitting="lines"]');
        let res = Splitting({
            target: target,
            by: "lines"
        });
        gsap.from(res[0].lines, {
            x: -500,
            scale: 0.7,
            autoAlpha: 0,
            stagger: {
                amount: .85,
            },
        });
    }, []);

    let renderData = () => {
        document.title = data[props.lang].title + ' | Andry Online'
        return {
            __html: data[props.lang].content
        }
    }

    return <p data-splitting="lines" dangerouslySetInnerHTML={renderData()} />;
};

export default Slide_Gatsby;