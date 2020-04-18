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

              <h2 className="title">
                {" "}
                <svg
                  className="yellows"
                  width="15"
                  height="15"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="10" height="10" fill="#F2DC17" />
                </svg>{" "}
                <span
                  className="high2"
                  dangerouslySetInnerHTML={{ __html: post.title }}
                />
              </h2>

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
