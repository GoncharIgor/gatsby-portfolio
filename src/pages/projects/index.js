import React from "react"
import Img from "gatsby-image"
import { graphql, Link } from "gatsby"

import Layout from "../../components/Layout"
import * as styles from "../../styles/projects.module.scss"

// data - result of query
export default function Projects({ data }) {
  const projects = data.projects.nodes
  const contact = data.contact.siteMetadata.contact

  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects & websites I've created</h3>
        <div className={styles.projects}>
          {projects.map(project => (
            <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
              <div>
                <Img fluid={project.frontmatter.thumb.childImageSharp.fluid}/>
                <h3>{project.frontmatter.title}</h3>
                <p>{project.frontmatter.stack}</p>
              </div>
            </Link>
          ))}
        </div>
        <p>Like what you see? Email me at: {contact} for a quote</p>
      </div>
    </Layout>
  )
}

// export page query
export const query = graphql`
    query ProjectsPage {
        projects: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
            nodes {
                frontmatter {
                    title
                    slug
                    stack
                    thumb {
                        childImageSharp {
                            fluid {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
                id
            }
        }
        contact: site {
            siteMetadata {
                contact
            }
        }
    }
`
// we can give an alias to query parameter: projects: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
// before it was: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {


// If gatsby sees a reference to a file in Markdown file, like a "thumb" property, it turns it to a file node automatically
// instead of specific properties of childImageSharp, like "src", etc, we can use "...GatsbyImageSharpFluid" to have a whole set of properties
