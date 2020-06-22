import React from 'react';
import firebase from '../firebase.js';
import { useStaticQuery, graphql } from "gatsby";
import gsap from 'gsap';


const Wheel = (props) => {
        const data = useStaticQuery(
            graphql`
        query {
            en: wordpressPage(id: {eq: "c10a2c0a-16c1-554c-be92-8b1b17acead0"}){
            title
            content
            }
            fr: wordpressPage(id: {eq: "c10a2c0a-16c1-554c-be92-8b1b17acead0"}){
            title
            content
            }
        }`);

        let renderData = () => {
            return {
            __html: data['fr'].content
            }
        }

        return <p data-splitting="lines" dangerouslySetInnerHTML={renderData()} />;        
    }

export default Wheel;