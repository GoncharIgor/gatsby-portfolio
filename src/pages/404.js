import React from "react"
import Layout from "../components/Layout"

// during development, still Gatsby default 404 page will be displayed
// But to preview it, you can click a [Preview] button on it

export default function NotFound() {
  return (
    <Layout>
      <div>
        <h2>404</h2>
        <p>Sorry, the page doesn't exist</p>
      </div>
    </Layout>
  )
}
