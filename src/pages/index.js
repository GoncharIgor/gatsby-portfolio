import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/Layout"
import * as styles from "../styles/home.module.scss"
import { Helmet } from "react-helmet"

export default function Home(props) {
  // Only 1 graphQL query may be in the page. So this one is commented out, so BannerImage query could work
  // const {title, description} = props.data.site.siteMetadata;

  return (
    <Layout>
      <Helmet>
        <title>Portfolio Home</title>
      </Helmet>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX designer & web developer based in Amsterdam</p>
          <Link className={styles.btn} to="/projects">My Portfolio Projects</Link>
        </div>
        {/*<img src="/banner.png" alt="site banner" style={{ maxWidth: "100%" }}/>*/}
        <Img fluid={props.data.file.childImageSharp.fluid} />
      </section>
    </Layout>
  )
}

export const imageQuery = graphql`
    query BannerQuery {
        file(relativePath: {eq: "banner.png"}) {
            id
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`
// ...GatsbyImageSharpFluid - collects a couple og image properties all together


// page query. In Components (files in "components" folder), not page queries, but static queries are used
// in page queries you CAN have query variables, but in static (component) ones - NOT
// gatsby scans the file -> finds GraphQL queries and executes them -> and automatically gets 'data' object from this query and sends it to 'props'
/*
export const query = graphql`
    query SiteInfo {
        site {
            siteMetadata {
                title
                description
            }
        }
    }`
*/

// banner.png - is getting from "static", that is being added to result "public" folder
// minus (cons) of static folder - files are omitted from Gatsby workflow and they are not minified / optimised for web
