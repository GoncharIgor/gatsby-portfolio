// this file is run in runtime in node env
const path = require('path');

// this f() will created pages, based on template: src/templates/project-details
// template is indicated in actions.createPage -> component
exports.createPages = async ({ graphql, actions }) => {

  const { data } = await graphql(`
  query Projects {
    allMarkdownRemark {
      nodes {
        frontmatter {
          slug
        }
      }
    }
  }
`)

  data.allMarkdownRemark.nodes.forEach(node => {
    // actions.createPage() - gatsby f()
    actions.createPage({
      path: `/projects/${node.frontmatter.slug}`,
      component: path.resolve('./src/templates/project-details.js'),
      context: { // what variable we want to pass in the template, when we generate this page
        slug: node.frontmatter.slug // slug - is passed as a query variable
      }
    })
  })


}
