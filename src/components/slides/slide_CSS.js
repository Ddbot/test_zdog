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

const Slide_CSS = (props) => {

    const data = useStaticQuery(
        graphql `
      query {
        en: wordpressPage(id: {
                eq: "5769aebb-f3f0-5b1d-9ce9-f109492988ab"
            }) {
          title
          content
        }
        fr: wordpressPage(id: {
                eq: "229d64f7-8fa1-50a2-b090-186baa9d1305"
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
                amount: 1.95,
            },
        });
    }, []);

    let renderData = () => {
        // document.title = data[props.lang].title;
        return {
            __html: data[props.lang].content
        }
    }

    return <p data-splitting="lines" dangerouslySetInnerHTML={renderData()} />;
};

export default Slide_CSS;