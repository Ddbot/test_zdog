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

const Slide_HTML = (props) => {

    const data = useStaticQuery(
        graphql `
      query {
        en: wordpressPage(id: {
                eq: "5c5f90d8-22f6-5b71-9655-f13fb9d209d5"
            }) {
          title
          content
        }
        fr: wordpressPage(id: {
                eq: "478f10c5-fd48-5c13-8d0d-064d3c4c958f"
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

export default Slide_HTML;