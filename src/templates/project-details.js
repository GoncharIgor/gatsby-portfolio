import React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"

import * as styles from "../styles/project-details.module.scss"
import Layout from "../components/Layout"


export default function ProjectDetails({ data }) {
  const { html } = data.markdownRemark
  const { title, stack, featuredImg } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <div className={styles.details}>
        <h2>{title}</h2>
        <h3>{stack}</h3>
        <div className={styles.featured}>
          <Img fluid={featuredImg.childImageSharp.fluid}/>
        </div>
        {/*
        a way in react to render HTML - is to use: dangerouslySetInnerHTML
        InnerHTML - will treat HTML tags as HTML
        InnerText - will treat HTML tags as text
        */}
        <div className={styles.html} dangerouslySetInnerHTML={{ __html: html }}/>
      </div>
    </Layout>
  )
}

// $slug: - query variable is passed from gatsby-node.js file
export const query = graphql`
    query ProjectDetails($slug: String) {
        markdownRemark(frontmatter: {slug: {eq: $slug}}) {
            html
            frontmatter {
                title
                stack
                featuredImg {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`