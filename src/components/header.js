import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap"
import { Link } from "gatsby"

const Header = () => {
  const logo = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "icon.png" }) {
        publicURL
      }
    }
  `)

  return (
    <header style={{ marginBottom: "55px" }}>
      <Navbar bg="light" expand="lg" fixed="top">
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo.file.publicURL}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Car Sales logo"
          />
          <span className="ml-1 mr-4 text-muted"> Carsales</span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/vehicles" activeClassName="active">
              Vehicles
            </Nav.Link>
            <Nav.Link as={Link} to="/blog" activeClassName="active">
              News &amp; Reviews
            </Nav.Link>
            <NavDropdown title="Help &amp; Out Sites" id="basic-nav-dropdown">
              <NavDropdown.Item
                href="https://www.carsales.com.au/"
                target="_blank"
              >
                Carsales Australia
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://www.mercedes-benz.com/en/"
                target="_blank"
              >
                Mercedez Benz
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://www.bmw.com/es/index.html"
                target="_blank"
              >
                Bmw International
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://www.nissan.com.co/"
                target="_blank"
              >
                Nissan
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/contact" activeClassName="active">
              Contact
            </Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-primary">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}

export default Header
