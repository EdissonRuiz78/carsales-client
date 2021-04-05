import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const NavBar = styled.nav`
  display: flex;
  flex-direction: column;
  padding-bottom: 3rem;

  @media (min-width: 768px) {
    padding: 0;
    flex-direction: row;
  }
`

export const NavLink = styled(Link)`
  color: black;
  padding: 0.5rem;
  font-weight: bold;
  text-decoration: none;

  &.active {
    border-bottom: 2px solid black;
  }

  &:hover {
    text-decoration: none;
    color: black;
    opacity: 0.7;
  }
`

const Nav = () => {
  return (
    <NavBar>
      <NavLink to="/" activeClassName="active">
        Home
      </NavLink>
      <NavLink to="/vehicles" activeClassName="active">
        Vehicles
      </NavLink>
      <NavLink to="/blog" activeClassName="active">
        Blog
      </NavLink>
      <NavLink to="/contact" activeClassName="active">
        Contact
      </NavLink>
    </NavBar>
  )
}

export default Nav
