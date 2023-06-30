import * as React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage = () => {
    return(
        <Layout pageTitle="About Me">
<Link to="/">Back to Home</Link>
            <p>Hi there! I'm the proud creator of the site, which I built with Gatsby.</p>
        </Layout>
    )
}

export const Head = () => <Seo title="About Me" />

export default AboutPage