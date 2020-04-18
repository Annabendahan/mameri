import React, { Component } from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import VisitCard from "../components/VisitCard"

class ActualiteTemplate extends Component {
  render() {
    const post = this.props.data.wordpressPost

    return (
      <Layout>
        <div className="background-hono">
          <div className="bigbox">
            <div className="bleft">
              {post.tags == 4 ? <p className="cat">DOMMAGE CORPOREL</p> : null}
              {post.tags == 5 ? <p className="cat">DROIT DU TRAVAIL</p> : null}
              {post.tags == 6 ? (
                <p className="cat">PROTECTION SOCIALE</p>
              ) : null}
              {post.tags == 7 ? (
                <p className="cat">DROIT DES ASSURANCES</p>
              ) : null}
              <p
                className="high2"
                dangerouslySetInnerHTML={{ __html: post.title }}
              />

              <p
                className="desc"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>

            <VisitCard />
          </div>
        </div>
      </Layout>
    )
  }
}

export default ActualiteTemplate

export const pageQuery = graphql`
  query actualitePostQuery($id: String!) {
    wordpressPost(id: { eq: $id }) {
      id
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
