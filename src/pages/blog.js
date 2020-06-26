import React, {
    useEffect
} from "react";
import {
    useStaticQuery,
    graphql,
    Link
} from "gatsby";

import ContactForm from "../components/layout/NavBar/contactForm/ContactForm"
import SEO from "../components/layout/NavBar/Seo"

const BlogPage = () => {
    return <div style={{ display: "flex", flexFlow:"column wrap"}}><h1 style={{ marginBottom: "2rem"}}>This is the blog index page</h1><br />
    <button><Link to="/">Back to Home</Link></button>
    </div>
};

export default BlogPage
