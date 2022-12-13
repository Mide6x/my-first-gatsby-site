import * as React from 'react'
import Layout from '../components/layout'

const AboutPage = () => {
    return (
        <Layout pageTitle="About Me">
            <h3>This is the about page of my project.</h3>
            <p>I think this gatsby is simpler than react.</p>
        </Layout>
    )
}

//exporting the components for reuse
export default AboutPage

//giving page header
export const Head = () => <title>About Me</title>