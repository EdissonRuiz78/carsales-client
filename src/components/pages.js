import React from "react"
import Layout from "./layout"
import styled from "@emotion/styled"
import Image from "gatsby-image"
import UseApiVehicles from "../hooks/useApiVehicles"
import { graphql } from "gatsby"
import { Title } from "./carList"
import CarList from "./carList"

export const query = graphql`
  query($id: String!) {
    allStrapiPages(filter: { id: { eq: $id } }) {
      nodes {
        title
        content
        image {
          sharp: childImageSharp {
            fluid(maxWidth: 1600) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
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
    grid-template-columns: 1fr 1fr;
    column-gap: 2rem;
  }
`

export const Text = styled.div`
  font-weight: 700;
  font-size: 1.2rem;
  margin-bottom: 1rem;
`

const Pages = ({
  data: {
    allStrapiPages: { nodes },
  },
}) => {
  const cars = UseApiVehicles()
  const { title, content, image } = nodes[0]

  return (
    <Layout>
      <Title>{title}</Title>
      <Grid>
        <div className="my-auto">
          <Image fluid={image.sharp.fluid} />
        </div>
        <div>{content}</div>
      </Grid>
      {title === "Vehicles" && <CarList cars={cars} />}
    </Layout>
  )
}

export default Pages
