import React from "react"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import { SocialIcon } from "react-social-icons"

const Footer = ({ title, year }) => {
  return (
    <Container className="bg-light" fluid>
      <footer>
        <Row className="justify-content-md-center mt-2 p-3">
          <SocialIcon
            url="https://twitter.com"
            style={{ height: 30, width: 30, margin: "5px" }}
            target="_blank"
          />
          <SocialIcon
            url="https://linkedin.com"
            style={{ height: 30, width: 30, margin: "5px" }}
            target="_blank"
          />
          <SocialIcon
            url="https://www.facebook.com/"
            style={{ height: 30, width: 30, margin: "5px" }}
            target="_blank"
          />
          <SocialIcon
            network="pinterest"
            style={{ height: 30, width: 30, margin: "5px" }}
            target="_blank"
          />
          <SocialIcon
            url="https://www.example.com"
            style={{ height: 30, width: 30, margin: "5px" }}
            target="_blank"
          />
        </Row>
        <Row className="justify-content-md-center mt-4">
          <Col md={8}>
            <Form>
              <Form.Group as={Row}>
                <Form.Label column sm="5">
                  Sign up for our weekly newsletter
                </Form.Label>
                <Col sm="7">
                  <Form.Control type="email" placeholder="Enter email" />
                </Col>
              </Form.Group>
            </Form>
          </Col>
          <Col md={2}>
            <Button variant="secondary" block>
              SUSCRIBE
            </Button>{" "}
          </Col>
        </Row>
        <Row className="justify-content-md-center mt-4">
          <Col md={2}>
            <Row className="mb-3">
              <h5>Cars for sale</h5>
            </Row>
            <Row className="mb-2">New cars for sale</Row>
            <Row className="mb-2">Used cars for sale</Row>
            <Row className="mb-2">Instant Offer</Row>
          </Col>
          <Col md={2}>
            <Row className="mb-3">
              <h5>Car Research</h5>
            </Row>
            <Row className="mb-2">Car Valuations</Row>
            <Row className="mb-2">Car Comparisons</Row>
            <Row className="mb-2">Car Finance</Row>
          </Col>
          <Col md={2}>
            <Row className="mb-3">
              <h5>General Help</h5>
            </Row>
            <Row className="mb-2">Terms &amp; Conditions</Row>
            <Row className="mb-2">Privacy</Row>
            <Row className="mb-2">Contact Us</Row>
          </Col>
          <Col md={2}>
            <Row className="mb-3">
              <h5>Other Sites</h5>
            </Row>
            <Row className="mb-2">Webmotors</Row>
            <Row className="mb-2">Demotores</Row>
            <Row className="mb-2">Tyresales</Row>
          </Col>
        </Row>
        <Row className="justify-content-md-center text-center mt-4" md={3}>
          <p>
            &copy; {year} Copyright: {title}
          </p>
        </Row>
      </footer>
    </Container>
  )
}

export default Footer
