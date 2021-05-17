/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    'gatsby-transformer-remark', // will transform MD files to interface, that is understood by GraphQL
    // for "gatsby-transformer-remark" to work, we also need below plugin: gatsby-source-filesystem
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`
      }
    },
  ],
  siteMetadata: {
    title: "Web Warrior",
    description: "Web dev portfolio",
    copyright: "This website is copyright 2021 Web warrior",
    contact: "IgorGoncharUA@gmail.com"
  }
}
