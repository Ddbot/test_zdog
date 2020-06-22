import React from 'react';
import firebase from '../firebase.js';
import { useStaticQuery, graphql } from "gatsby";
import gsap from 'gsap';


const WheelOfFortune = (props) => {
    const Slide_0 = (props) => {

        const data = useStaticQuery(
            graphql`
        query {
            en: wordpressPage(id: {eq: "0fb96152-7c50-5292-9a04-95c88709ee36"}){
            title
            content
            }
            fr: wordpressPage(id: {eq: "95543ea1-bf21-5e54-a003-a75c0499c6f5"}){
            title
            content
            }
        }`);
    }
}

export default WheelOfFortune;