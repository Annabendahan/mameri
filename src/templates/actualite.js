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
          <p className="desc see">
            {" "}
            <Link to="/actualites">Voir toutes les actualités</Link>{" "}
            <svg
              width="30"
              height="8"
              viewBox="0 0 40 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M39.3536 4.35355C39.5488 4.15829 39.5488 3.84171 39.3536 3.64645L36.1716 0.464466C35.9763 0.269204 35.6597 0.269204 35.4645 0.464466C35.2692 0.659728 35.2692 0.976311 35.4645 1.17157L38.2929 4L35.4645 6.82843C35.2692 7.02369 35.2692 7.34027 35.4645 7.53553C35.6597 7.7308 35.9763 7.7308 36.1716 7.53553L39.3536 4.35355ZM0 4.5H39V3.5H0L0 4.5Z"
                fill="#2a4b80"
              />
            </svg>
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
