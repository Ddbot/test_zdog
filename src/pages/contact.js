import React, { useEffect } from "react";
import {
    useStaticQuery,
    graphql,
    Link
} from "gatsby";

import ContactForm from "../components/layout/NavBar/contactForm/ContactForm"
import SEO from "../components/layout/NavBar/Seo"

const ContactPage = () => {
    return <>
    <SEO title="Contact Form" />
    <ContactForm lang={localStorage.getItem('lang')} />
</>
};

export default ContactPage
