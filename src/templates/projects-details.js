import React from "react"
import { graphql } from "gatsby"
import { Container } from "react-bootstrap"
import Img from "gatsby-image"
import Layout from "../components/layout"

const productDetail = ({ data }) => {
  const { html, frontmatter } = data.markdownRemark
  const { title, stack, featuredImg } = frontmatter
  console.log(data)
  return (
    <>
      <Layout>
        <Container>
          <h1>{title}</h1>
          <h3>{stack}</h3>
          <Img
            fluid={featuredImg.childImageSharp.fluid}
            style={{ maxWidth: "100%" }}
          />
          <div dangerouslySetInnerHTML={{ __html: html }}></div>
        </Container>
      </Layout>
    </>
  )
}

export const query = graphql`
  query projects2($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        featuredImg {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack
      }
    }
  }
`

export default productDetail
