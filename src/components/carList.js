import React, { useState, useEffect } from "react"
import styled from "@emotion/styled"
import Image from "gatsby-image"
import urlSlug from "url-slug"
import useFilter from "../hooks/useFilter"
import { Link } from "gatsby"
import { Button } from "react-bootstrap"

const Grid = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  width: 90%;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 1rem;
  }
`

export const FilterBox = styled.div`
  margin: 0 auto;
  max-width: 350px;
  width: 90%;
`

const Card = styled.div`
  max-width: 350px;
  width: 95%;
  border: 1px solid #e1e1e1;
  margin: 1rem auto;

  img {
    max-width: 100%;
  }
`

export const Title = styled.h1`
  margin: 1rem auto;
  text-align: center;
  font-size: 3rem;
`

export const Price = styled.div`
  font-weight: 700;
  font-size: 1.5rem;
  margin: 10px auto;
  text-align: center;
`

const CarList = ({ cars }) => {
  const { option, Filter } = useFilter()
  const [vehicles, setVehicles] = useState([])

  useEffect(() => {
    if (option) {
      const filterCars = cars.filter(item => item.collections.name === option)
      setVehicles(filterCars)
    } else {
      setVehicles(cars)
    }
  }, [option])

  return (
    <>
      <Title>New Car Showroom</Title>
      <FilterBox>{Filter()}</FilterBox>
      <Grid>
        {vehicles.map(car => (
          <Card key={car.id}>
            <Image fluid={car.image.sharp.fluid} />
            <h5 className="text-center mt-2">{car.name}</h5>
            <p className="text-center text-muted mt-2 mb-0">Drive away from</p>
            <Price>${car.price}</Price>
            <Button as={Link} to={urlSlug(car.name)} variant="dark" block>
              More Details
            </Button>
          </Card>
        ))}
      </Grid>
    </>
  )
}

export default CarList
