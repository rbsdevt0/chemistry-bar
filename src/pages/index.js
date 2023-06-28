import * as React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'

const IndexPage = () => {
  return (
   <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
   </Layout>
  )
}

export const Head = () => <title>Chemistry Bar</title>

export default IndexPage