const urlSlug = require("url-slug")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const response = await graphql(`
    query {
      allStrapiPages {
        nodes {
          title
          id
        }
      }
      allStrapiVehicles {
        nodes {
          name
          id
        }
      }
    }
  `)

  if (response.errors) {
    reporter.panic("There is not response", response.errors)
  }
  const pages = response.data.allStrapiPages.nodes
  const vehicles = response.data.allStrapiVehicles.nodes

  pages.forEach(element => {
    actions.createPage({
      path: urlSlug(element.title),
      component: require.resolve("./src/components/pages.js"),
      context: {
        id: element.id,
      },
    })
  })

  vehicles.forEach(element => {
    actions.createPage({
      path: urlSlug(element.name),
      component: require.resolve("./src/components/cars.js"),
      context: {
        id: element.id,
      },
    })
  })
}
