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
              </div>
            ))}
          </div>
        </h1>
      </div>
    )}
  />
)
