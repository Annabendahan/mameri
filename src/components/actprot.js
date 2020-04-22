import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
export default () => (
  <StaticQuery
    query={graphql`
      query youQuery {
        allWordpressPost(
          sort: { fields: date, order: DESC }
          limit: 1
          filter: { tags: { eq: 6 } }
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
              <Link to={`/actualites/${node.path}`}>
                <div key={node.slug} className={"actualite"}>
                  {/* <p className="high2"> {node.date} </p> */}
                  <h3 className="cat"> PROTECTION SOCIALE</h3>
                  <p
                    className="desc"
                    style={{
                      textAlign: "left",
                    }}
                    dangerouslySetInnerHTML={{ __html: node.title }}
                  />

                  {/* <p
                  className="desc-small"
                  dangerouslySetInnerHTML={{ __html: node.excerpt }}
                /> */}

                  <br />
                  <div className="lire">
                    {" "}
                    <p>
                      {" "}
                      En savoir plus{" "}
                      <svg
                        className="arrow"
                        width="14"
                        height="8"
                        viewBox="0 0 14 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.3536 4.35355C13.5488 4.15829 13.5488 3.84171 13.3536 3.64645L10.1716 0.464466C9.97631 0.269204 9.65973 0.269204 9.46447 0.464466C9.2692 0.659728 9.2692 0.976311 9.46447 1.17157L12.2929 4L9.46447 6.82843C9.2692 7.02369 9.2692 7.34027 9.46447 7.53553C9.65973 7.7308 9.97631 7.7308 10.1716 7.53553L13.3536 4.35355ZM0 4.5L13 4.5V3.5L0 3.5L0 4.5Z"
                          fill="white"
                        />
                      </svg>{" "}
                    </p>{" "}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </h1>
      </div>
    )}
  />
)
