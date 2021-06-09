import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"


const PostMaker = ({ data }) => (
  <>
  {data}
  </>
)

export default function JobList(props) {
  return (
    <StaticQuery 
      query={graphql`
        query {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { template: { eq: "job-post" } } }
          ) {
            edges {
              node {
                id
                excerpt(pruneLength: 250)
                fields {
                  slug
                }
                frontmatter {
                  date(formatString: "MMMM DD, YYYY")
                  title
                }
              }
            }
          }
        }`
      }

      render={ data => {
          const posts = data.allMarkdownRemark.edges
            .filter(edge => edge.node.frontmatter.team === props.team || props.team === false)
            .map(edge =>
            <tr className={edge.node.frontmatter.team}>
              <td>
                <Link to={edge.node.fields.slug} className="text-reset text-decoration-none">
                  <p className="mb-1">
                    {edge.node.frontmatter.title}
                  </p>
                  <p className="font-size-sm text-muted mb-0">
                  </p>
                </Link>
              </td>
              <td>
                <Link to={edge.node.fields.slug} className="text-reset text-decoration-none">
                  <p className="font-size-sm mb-0">
                    {edge.node.frontmatter.team}
                  </p>
                </Link>
              </td>
              <td>
                <Link to={edge.node.fields.slug} className="text-reset text-decoration-none">
                  <p className="font-size-sm mb-0">
                    Salt Lake City
                  </p>
                </Link>
              </td>
            </tr>
          )

         
          return <PostMaker data={posts} />
        } 
      }
    />
  )
}