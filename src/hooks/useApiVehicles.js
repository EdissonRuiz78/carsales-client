import { useStaticQuery, graphql } from "gatsby"

const UseApiVehicles = () => {
  const vehicles = useStaticQuery(graphql`
    query MyQuery {
      allStrapiVehicles {
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
          id
          doors
          name
          overview
          price
          seats
          image {
            sharp: childImageSharp {
              fluid(maxWidth: 600, maxHeight: 400) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)

  return vehicles.allStrapiVehicles.nodes
}

export default UseApiVehicles
