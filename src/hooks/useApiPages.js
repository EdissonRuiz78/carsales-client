import { useStaticQuery, graphql } from "gatsby"

const UseApiPages = () => {
  const pages = useStaticQuery(graphql`
    query {
      allStrapiPages {
        nodes {
          id
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
  `)

  return pages.allStrapiPages.nodes
}

export default UseApiPages
