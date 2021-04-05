import React from "react"
import Layout from "./layout"
import styled from "@emotion/styled"
import Image from "gatsby-image"
import { graphql } from "gatsby"
import { Title } from "./carList"

export const query = graphql`
  query($id: String!) {
    allStrapiVehicles(filter: { id: { eq: $id } }) {
      nodes {
        agents {
          email
          name
          phone
        }
        airbags
        collections {
          name
        }
        doors
        image {
          sharp: childImageSharp {
            fluid(maxWidth: 1600) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        name
        overview
        price
        seats
        model
      }
    }
  }
`

const Grid = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  width: 90%;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 2fr;
    column-gap: 2rem;
  }
`

export const Text = styled.div`
  font-weight: 700;
  font-size: 1.2rem;
  margin-bottom: 1rem;
`

const Cars = ({
  data: {
    allStrapiVehicles: { nodes },
  },
}) => {
  const {
    name,
    price,
    overview,
    seats,
    model,
    airbags,
    doors,
    image,
    collections,
    agents,
  } = nodes[0]
  console.log(nodes[0])
  return (
    <Layout>
      <Title>{name}</Title>
      <Grid>
        <div>
          <Text>
            Drive away {model} model from ${price}
          </Text>
          <Text>Features</Text>
          <ul className="mb-4">
            <li>{doors} doors</li>
            <li>{seats} seats</li>
            <li>{airbags} airbags</li>
          </ul>
          <Text>Type</Text>
          <p className="mb-4">{collections.name}</p>
          <Text>Book Now!</Text>
          <p>Agent name: {agents.name}</p>
          <p>Phone: {agents.phone}</p>
          <p>Email: {agents.email}</p>
        </div>
        <div>
          <Image fluid={image.sharp.fluid} />
          <p className="mt-4">{overview}</p>
        </div>
      </Grid>
    </Layout>
  )
}

export default Cars
