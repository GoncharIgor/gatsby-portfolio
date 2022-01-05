// this file lets you:
// 1) respond to Gatsby-specific events within the browser,
// 2) wrap your page components in additional global components

import React from "react"
import { ThemeProvider } from "./src/context/ThemeContext"

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
);

/*
// 1) Logs when the client route changes:
exports.onRouteUpdate = ({ location, prevLocation }) => {
  console.log("[from gatsby-browser.js] new pathname:", location.pathname)
  // console.log("old pathname", prevLocation ? prevLocation.pathname : null)
}

2) Wraps every page in a component:
e.g/: you can either add manually <Layout> component inside each of the pages or do it only once here

exports.wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}
*/

// Note: The APIs "wrapPageElement" and "wrapRootElement" exist in both the browser and Server-Side Rendering (SSR) APIs.
// You generally should implement the same components in both "gatsby-ssr.js" and "gatsby-browser.js"
// so that pages generated through SSR are the same after being hydrated in the browser.
