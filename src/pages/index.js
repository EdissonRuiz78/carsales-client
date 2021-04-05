import React from "react"
import Layout from "../components/layout"
import UseApiPages from "../hooks/useApiPages"
import UseApiVehicles from "../hooks/useApiVehicles"
import BackgroundImage from "gatsby-background-image"
import styled from "@emotion/styled"
import CarList from "../components/carList"

const ImageBack = styled(BackgroundImage)`
  height: 600px;
`

const Title = styled.h1`
  margin: 0 auto;
  padding-top: 1rem;
  text-align: center;
  font-size: 3rem;
`

const Content = styled.h1`
  margin: 0 auto;
  padding-top: 0.8rem;
  text-align: center;
  font-size: 1.2rem;
`

const IndexPage = () => {
  const data = UseApiPages()
  const cars = UseApiVehicles()
  const infoHome = data.filter(item => item.title === "Home")
  const { content, image } = infoHome[0]

  return (
    <Layout>
      <ImageBack tag="section" fluid={image.sharp.fluid} fadeIn="soft">
        <div>
          <Title>Find you next car</Title>
          <Content>{content}</Content>
        </div>
      </ImageBack>
      <main>
        <CarList cars={cars} />
      </main>
    </Layout>
  )
}

export default IndexPage
