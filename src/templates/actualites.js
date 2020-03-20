import React, { Component } from "react"
import Link from "gatsby-link"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import VisitCard from "../components/VisitCard"
import pol from "../images/Polygon 1.svg"

import { graphql } from "gatsby"

class ActualitesTemplate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cat: [4, 5],
      displayOptions: false,
      word: "Catégories",
    }
  }

  displayOptions = () => {
    this.setState({ displayOptions: !this.state.displayOptions })
  }

  selectCat = (num, word) => {
    this.setState({
      cat: [num],
      displayOptions: !this.state.displayOptions,
      word: word,
    })
  }

  resetCat = () => {
    this.setState({
      cat: [4, 5],
      displayOptions: !this.state.displayOptions,
      word: "Afficher tout",
    })
  }

  render() {
    const data = this.props.data

    return (
      <Layout>
        <div className="background-hono">
          <div className="bigbox">
            <div className="bleft">
              <h1>ACTUALITÉS </h1>

              <div className="searchCat">
                <div
                  className="desc selectCat"
                  onClick={() => this.displayOptions()}
                >
                  {" "}
                  <p>
                    {" "}
                    {this.state.word}{" "}
                    <svg
                      width="12"
                      height="6"
                      viewBox="0 0 12 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 6L11.1962 0.75H0.803848L6 6Z"
                        fill="#313030"
                      />
                    </svg>
                  </p>
                </div>

                {this.state.displayOptions ? (
                  <div className="desc cats">
                    {" "}
                    <p className="cat" onClick={() => this.resetCat()}>
                      {" "}
                      Afficher tout{" "}
                    </p>
                    <p
                      className="cat"
                      onClick={() => this.selectCat(4, "Droit Social")}
                    >
                      {" "}
                      Droit Social{" "}
                    </p>
                    <p
                      className="cat"
                      onClick={() => this.selectCat(5, "Droit de la Santé")}
                    >
                      {" "}
                      Droit de la Santé{" "}
                    </p>
                  </div>
                ) : null}
              </div>

              <div>
                {data.allWordpressPost.edges.map(({ node }) => (
                  <div key={node.slug}>
                    {/* <p className="high2"> {node.date} </p> */}
                    {this.state.cat.includes(node.tags[0]) ? (
                      <div className={"article"}>
                        <p
                          className="high2"
                          dangerouslySetInnerHTML={{ __html: node.title }}
                        />

                        <p
                          className="desc"
                          dangerouslySetInnerHTML={{ __html: node.content }}
                        />
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>

            <VisitCard />
          </div>
        </div>

        <p
          style={{
            width: `300px`,
            margin: `auto`,
          }}
        >
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
        </p>
      </Layout>
    )
  }
}

ActualitesTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default ActualitesTemplate

export const pageQuery = graphql`
  query actualitesQuery {
    allWordpressPost(filter: { categories: { eq: 2 } }) {
      edges {
        node {
          id
          title
          categories
          tags
          content
          excerpt
          slug
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
`
