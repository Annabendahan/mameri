import React, { Component } from "react"
import Link from "gatsby-link"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import VisitCard from "../components/VisitCard"

import { graphql } from "gatsby"

class PostsTemplate extends Component {
  render() {
    const data = this.props.data

    return (
      <Layout>
        <div className="background-hono">
          <div className="bigbox">
            <div className="bleft">
              <h1> NOS PUBLICATIONS </h1>

              <h2 className="title">
                <svg
                  className="yellows"
                  width="15"
                  height="15"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="10" height="10" fill="#F2DC17" />
                </svg>
                ARTICLES
              </h2>

              <div>
                {data.allWordpressPost.edges.map(({ node }) => (
                  <div key={node.slug} className={"article"}>
                    {/* <p className="high2"> {node.date} </p> */}
                    <p
                      className="high2"
                      dangerouslySetInnerHTML={{ __html: node.title }}
                    />

                    <p
                      className="desc"
                      dangerouslySetInnerHTML={{ __html: node.content }}
                    />
                  </div>
                ))}
              </div>
            </div>

            <VisitCard />
          </div>
        </div>

        <div className="parcours">
          <h2 className="title">
            <svg
              className="yellows"
              width="15"
              height="15"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="10" height="10" fill="#F2DC17" />
            </svg>
            MÉMOIRES D'ÉTUDE
          </h2>

          <div className="mem">
            <p className="">
              {" "}
              <svg
                className="yellows"
                width="5"
                height="5"
                viewBox="0 0 5 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="2.5" cy="2.5" r="2.5" fill="#2a4b80" />
              </svg>
              Le recours subrogatoire des organismes payeur en droit du dommage
              corporel, le contrôle opéré par la Cour de cassation{" "}
            </p>
            <p className="">
              {" "}
              <svg
                className="yellows"
                width="5"
                height="5"
                viewBox="0 0 5 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="2.5" cy="2.5" r="2.5" fill="#2a4b80" />
              </svg>
              La défense des intérêts de la victime pendant la phase d’expertise
              en réparation du dommage corporel
            </p>
            <p className="">
              {" "}
              <svg
                className="yellows"
                width="5"
                height="5"
                viewBox="0 0 5 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="2.5" cy="2.5" r="2.5" fill="#2a4b80" />
              </svg>
              L’accompagnement affectif et sexuel des personnes en situation de
              handicap physique{" "}
            </p>
          </div>
        </div>

        <Link to="/contact/" className="button bt2">
          {" "}
          NOUS CONTACTER{" "}
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
      </Layout>
    )
  }
}

PostsTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default PostsTemplate

export const pageQuery = graphql`
  query postsQuery {
    allWordpressPost {
      edges {
        node {
          id
          title
          content
          excerpt
          slug
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
`
