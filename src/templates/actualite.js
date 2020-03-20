import React, { Component } from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

class ActualiteTemplate extends Component {
  render() {
    const post = this.props.data.wordpressPost

    return (
      <Layout>
        <div className="background-hono">
          <p
            className="high2"
            dangerouslySetInnerHTML={{ __html: post.title }}
          />

          <p
            className="desc"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </Layout>
    )
  }
}

export default ActualiteTemplate

export const pageQuery = graphql`
  query actualitePostQuery($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
