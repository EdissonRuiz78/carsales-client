import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Form } from "react-bootstrap"

const useFilter = () => {
  const [option, setOption] = useState("")

  const response = useStaticQuery(graphql`
    query {
      allStrapiCollections {
        nodes {
          id
          name
        }
      }
    }
  `)

  const collections = response.allStrapiCollections.nodes

  const Filter = () => (
    <Form>
      <Form.Group>
        <Form.Label>Collections</Form.Label>
        <Form.Control
          as="select"
          value={option}
          onChange={e => setOption(e.target.value)}
        >
          <option value="">-- Select --</option>
          {collections.map(element => (
            <option key={element.id} value={element.name}>
              {element.name}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
    </Form>
  )
  return { option, Filter }
}

export default useFilter
