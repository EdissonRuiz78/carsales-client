import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { css } from "@emotion/react"

import Nav from "./nav"
import { NavLink } from "./nav"

const Header = () => {
  const logo = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "icon.png" }) {
        publicURL
      }
    }
  `)

  return (
    <header
      css={css`
        padding: 0.5rem;
      `}
    >
      <div
        css={css`
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;

          @media (min-width: 768px) {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
        `}
      >
        <NavLink to="/">
          <img
            src={logo.file.publicURL}
            alt="Logo Car Sales"
            style={{ marginRight: "10px" }}
          />
          <span>Car Sales</span>
        </NavLink>
        <Nav />
      </div>
    </header>
  )
}

export default Header
