import { graphql, Link } from "gatsby"
import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import Img from "gatsby-image"
import Layout from "../../components/layout"

const Projects = ({ data }) => {
  const porjectData = data?.allMarkdownRemark?.nodes
  return (
    <Layout>
      <div>
        <Container>
          <Row className="gy-3">
            {porjectData?.map((e, i) => (
              <Col md={6} xl={4} key={i}>
                <Link to={`/projects/${e?.frontmatter?.slug}`}>
                  <Img fluid={e?.frontmatter?.thumb?.childImageSharp?.fluid} />
                </Link>
                {e?.frontmatter?.stack}
                {e?.frontmatter?.slug}
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query List {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date
          slug
          stack
          thumb {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

export default Projects
