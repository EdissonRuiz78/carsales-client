/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { Global, css } from "@emotion/react"
import Footer from "./footer"

import Header from "./header"

const Layout = ({ children }) => {
  const title = "Carsales | Best Car Website"
  const year = new Date().getFullYear()
  return (
    <>
      <Global
        styles={css`
          html {
            box-sizing: border-box;
          }
          *,
          *:before,
          *:after {
            box-sizing: inherit;
          }
          body {
            line-height: 1.5;
            font-family: "Merriweather", serif;
          }
          h1,
          h2 {
            margin: 0;
            line-height: 1.5;
            font-weight: 400;
          }
          ul {
            margin: 0;
            padding: 0;
            list-style: none;
          }
          img {
            max-width: 100%;
          }
          .container {
            max-width: 1200px;
            width: 95%;
            margin: 0 auto;
          }
        `}
      />
      <Helmet>
        <title>{title}</title>
        <meta
          name="description"
          content="The best web site to buy and sell cars"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
          integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=="
          crossorigin="anonymous"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&family=Open+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Header />

      <main>{children}</main>
      <Footer title={title} year={year} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
