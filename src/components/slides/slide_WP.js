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

const Slide_WP = (props) => {

    const data = useStaticQuery(
        graphql `
      query {
        en: wordpressPage(id: {
                eq: "4d78f372-43e2-5f9e-b863-4d6a0c4b1816"
            }) {
          title
          content
        }
        fr: wordpressPage(id: {
                eq: "eb697dab-5df4-56af-998f-fcb98cdd38fe"
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

export default Slide_WP;