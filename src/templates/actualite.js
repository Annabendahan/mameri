import React, { Component } from "react"
import Layout from "../components/layout"
import Link from "gatsby-link"
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
          <br />
          <br />
          <p
            style={{
              width: `300px`,
              margin: `auto`,
            }}
          >
            <Link to="/actualites/" className="button bt2">
              {" "}
              ACTUALITÉS{" "}
              <svg
                className="yellowr"
                width="14"
                height="8"
                viewBox="0 0 14 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.3536 4.35355C13.5488 4.15829 13.5488 3.84171 13.3536 3.64645L10.1716 0.464466C9.97631 0.269204 9.65973 0.269204 9.46447 0.464466C9.2692 0.659728 9.2692 0.976311 9.46447 1.17157L12.2929 4L9.46447 6.82843C9.2692 7.02369 9.2692 7.34027 9.46447 7.53553C9.65973 7.7308 9.97631 7.7308 10.1716 7.53553L13.3536 4.35355ZM0 4.5L13 4.5V3.5L0 3.5L0 4.5Z"
                  fill="yellow"
                />
              </svg>{" "}
            </Link>
          </p>
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
