import React from "react"
// better to use this "gatsby-image" together with gatsby-transformer-sharp gatsby-plugin-sharp for:
// image optimization - different sizes for mobile and web
// they are lazy loaded
import Img from "gatsby-image"
import { graphql } from "gatsby"

import * as styles from "../styles/project-details.module.scss"
import Layout from "../components/Layout"

// templates - a reusable components, that represent different data.
// Here, for example, ProjectDetails component - is 1 template for all markDown files, that can be articles, dataInfo, etc
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
        InnerText - will treat HTML tags as text and will render them as text
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

// You can also pass varialbes not to GraphQl query, but also directly to component from gatsby-node.js
// at's accessbile by "pageContext" prop
// e.g.: 
// export default function ComponentName({ data, pageContext }) {
// pageContext.passedVariableName
