import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

// useStaticQuery - a hook to make queries inside components

export default function NavBar() {
  // graphQl query names have to be different within all pages / components

  // useStaticQuery hook sometimes may throw an error, if component file name is not capitalized. It should be capitalized
  // also useStaticQuery hook can be used only ONCE inside 1 component
  const data = useStaticQuery(graphql`
      query SiteInfoForComponent {
          site {
              siteMetadata {
                  title
              }
          }
      }
  `)

  const {title} = data.site.siteMetadata;

  return (
    <nav>
      <h1>{title}</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Portfolio Projects</Link>
      </div>
    </nav>
  )
}
