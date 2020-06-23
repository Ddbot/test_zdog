import React, { useEffect } from "react";
import {
    useStaticQuery,
    graphql,
    Link
} from "gatsby";

import ContactForm from "../components/contactForm/ContactForm"
import SEO from "../components/seo"

const ContactPage = () => {
    return <>
    <SEO title="Contact Form" />
    <ContactForm lang={localStorage.getItem('lang')} />
</>
};

export default ContactPage
