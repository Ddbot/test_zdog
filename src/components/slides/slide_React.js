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

const Slide_React = (props) => {

    const data = useStaticQuery(
        graphql `
      query {
        en: wordpressPage(id: {
                eq: "02b2d120-8b3f-5d3b-84d3-12614fe2f84d"
            }) {
          title
          content
        }
        fr: wordpressPage(id: {
                eq: "4cd5aa9b-f50a-59fa-ae30-c8a8a60f9391"
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

export default Slide_React;