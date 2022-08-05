// exports.createPages = async ({ actions }) => {
//   const { createPage } = actions
//   createPage({
//     path: "/using-dsg",
//     component: require.resolve("./src//using-dsg.js"),
//     context: {},
//     defer: true,
//   })
// }

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query projects {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)
  data.allMarkdownRemark.nodes.forEach(e => {
    console.log(e)
    actions.createPage({
      path: `/projects/` + e.frontmatter.slug,
      component: require.resolve("./src/templates/projects-details.js"),
      context: { slug: e.frontmatter.slug },
    })
  })
}
