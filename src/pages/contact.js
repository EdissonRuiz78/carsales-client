import React from "react"
import { Container, Form, Button, Col } from "react-bootstrap"
import Layout from "../components/layout"

const Contact = () => (
  <Layout>
    <h2 className="text-center mt-4">GET IN TOUCH</h2>
    <Container className="mt-4 p-4 border">
      <Form>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter full name" />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Example: user@user.com" />
          </Form.Group>
        </Form.Row>

        <Form.Group>
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="Example: 1234 Main St" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Phone Contact</Form.Label>
          <Form.Control placeholder="Example: +1 123 123 123" />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>City</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>State</Form.Label>
            <Form.Control as="select" defaultValue="Choose...">
              <option>Choose...</option>
              <option>City 1</option>
              <option>City 2</option>
              <option>City 3</option>
              <option>City 4</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Zip Code</Form.Label>
            <Form.Control />
          </Form.Group>
        </Form.Row>

        <Button variant="dark" type="submit">
          Submit
        </Button>
        <Form.Text className="text-muted">
          We'll contact you as soon as possible.
        </Form.Text>
      </Form>
    </Container>
  </Layout>
)

export default Contact
