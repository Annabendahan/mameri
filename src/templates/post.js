import React, { Component } from "react"
import Layout from "../components/layout"


class PostTemplate extends Component {
    render() {
        const post = this.props.data.wordpressPost

        return (
            <Layout>
              <div className="background-hono">
                  <p className="high2"> {  post.title }</p>
                  <p className="desc"> { post.content } </p>
              </div>
            </Layout>
        )
    }
}


export default PostTemplate

export const pageQuery = graphql`
    query currentPostQuery($id: String!) {
        wordpressPost(id: { eq: $id }) {
            title
            content
        }
        site {
            siteMetadata {
                title

            }
        }
    }`
