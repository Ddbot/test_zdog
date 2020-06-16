import React, { useEffect } from "react";
import {
    useStaticQuery,
    graphql,
    Link
} from "gatsby";

import ContactForm from "../components/ContactForm"
import SEO from "../components/seo"

const ContactPage = ({ location }) => {
    useEffect(() => { 
        console.log('LANG IS ', location.state.lang);
    });
    return <>
    <SEO title="Contact Form" />
    <ContactForm lang={location.state.lang} />
</>
};

export default ContactPage
