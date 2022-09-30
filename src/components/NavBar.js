import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

import ThemeContext from "../context/ThemeContext"
import * as styles from "../styles/nav-bar.module.scss"

// useStaticQuery - a hook to make queries inside components

export default function NavBar() {
  // graphQl query names have to be different within all pages / components

  // useStaticQuery hook sometimes may throw an error, if component file name is not capitalized. Its query name should be capitalized
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

  const { title } = data.site.siteMetadata

  return (
    <nav>
      <h1>{title}</h1>

      <ThemeContext.Consumer>
        {(themeContextStore) => (
          <div className={themeContextStore.dark ? "dark" : "light"}>
            <label className={styles.switcher}>
              <input type="checkbox" checked={themeContextStore.dark} onChange={themeContextStore.toggleDark}/>
              <span className={`${styles.slider} ${styles.round}`}/>
            </label>
          </div>
        )}
      </ThemeContext.Consumer>

      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Portfolio Projects</Link>
      </div>
    </nav>
  )
}
