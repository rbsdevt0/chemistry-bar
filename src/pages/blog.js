import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

const BlogPage = ({ data }) => {
    return(
        <Layout pageTitle="Chemistry Bar Latest Update">
            <p>My cool posts will go in here. We'll also post latest menu offers here.</p>
            <ul>
                {
                    data.allFile.nodes.map(node => (
                        <li key={node.name}>
                            {node.name}
                        </li>
                    ))
                }
            </ul>
        </Layout>
    )
}

export const query = graphql`
query{
    allFile{
        nodes{
            name
        }
    }
}`

export const Head = () => <Seo title="Chemistry Bar Latest Update" />

export default BlogPage