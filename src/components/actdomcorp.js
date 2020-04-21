import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
export default () => (
  <StaticQuery
    query={graphql`
      query MyQuery {
        allWordpressPost(
          sort: { fields: date, order: DESC }
          limit: 1
          filter: { tags: { eq: 4 } }
        ) {
          edges {
            node {
              id
              title
              excerpt
              path

              content
              tags
            }
          }
        }
      }
    `}
    render={data => (
      <div>
        <h1>
          {" "}
          <div>
            {data.allWordpressPost.edges.map(({ node }) => (
              <div key={node.slug} className={"actualite"}>
                <Link to={`/actualites/${node.path}`}>
                  {/* <p className="high2"> {node.date} </p> */}
                  <p className="cat"> DOMMAGE CORPOREL</p>
                  <p
                    className="high3"
                    dangerouslySetInnerHTML={{ __html: node.title }}
                  />

                  {/* <p
                  className="desc-small"
                  dangerouslySetInnerHTML={{ __html: node.excerpt }}
                /> */}
                </Link>
                <br />

                <p className="desc plus">
                  En savoir plus{" "}
                  <svg
                    width="25"
                    height="8"
                    viewBox="0 0 40 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M39.3536 4.35355C39.5488 4.15829 39.5488 3.84171 39.3536 3.64645L36.1716 0.464466C35.9763 0.269204 35.6597 0.269204 35.4645 0.464466C35.2692 0.659728 35.2692 0.976311 35.4645 1.17157L38.2929 4L35.4645 6.82843C35.2692 7.02369 35.2692 7.34027 35.4645 7.53553C35.6597 7.7308 35.9763 7.7308 36.1716 7.53553L39.3536 4.35355ZM0 4.5H39V3.5H0L0 4.5Z"
                      fill="black"
                    />
                  </svg>
                </p>
              </div>
            ))}
          </div>
        </h1>
      </div>
    )}
  />
)
