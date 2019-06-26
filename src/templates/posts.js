import React, { Component } from "react"
import Link from "gatsby-link"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import '../components/posts.css'

class PostsTemplate extends Component {
    render() {
        const data = this.props.data

        return(
          <Layout>
            <div className="posts">

                <h2 className="title">
  <svg className="yellows" width="15" height="15" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="10" height="10" fill="#FFF509"/>
  </svg>
  ARTICLES</h2>

  <div>
                {data.allWordpressPost.edges.map(({node}) => (

                    <div key={node.slug} className={"article"}>
                    <Link  to={'posts/' + node.slug}>



                              <p className="high2">
                               {node.title}</p>


                        <p className="post-desc"  dangerouslySetInnerHTML={{__html: node.excerpt}} ></p>




                  </Link>
                    </div>



                ))}
                </div>


            </div>


            <div className="memoires">

            <h2 className="title-w">
  <svg className="yellows" width="15" height="15" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="10" height="10" fill="#FFF509"/>
  </svg>
  MÉMOIRES D'ÉTUDE</h2>

  <p className="desc-w"> <svg  className="yellows" width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="2.5" cy="2.5" r="2.5" fill="white"/>
</svg>
 Le recours subrogatoire des organismes payeur en droit du dommage corporel, le contrôle opéré par la Cour de cassation </p>
  <p className="desc-w" > <svg className="yellows" width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="2.5" cy="2.5" r="2.5" fill="white"/>
</svg>
 La défense des intérêts de la victime pendant la phase d’expertise en réparation du dommage corporel</p>
  <p className="desc-w">  <svg  className="yellows" width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="2.5" cy="2.5" r="2.5" fill="white"/>
</svg>
L’accompagnement affectif et sexuel des personnes en situation de handicap physique </p>
            </div>


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
    query postsQuery{
        allWordpressPost{
            edges{
                node{
                    id
                    title
                    excerpt
                    slug
                    date(formatString: "MMMM DD, YYYY")
                }
            }
        }
    }
`
