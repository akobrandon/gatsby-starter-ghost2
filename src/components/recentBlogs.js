import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import { RiArrowDownLine, RiArrowRightSLine } from "react-icons/ri"

import PostCard from "./post-card"

const PostMaker = ({ data }) => (
<section className="my-6">
<div className="container">
<div className="row mb-5 mt-8">
  <div className="col-12">
    <Link rel="canonical" className="button float-right pt-2" to="/blog">View All<span className="icon-right"><RiArrowRightSLine/></span></Link>
    <h2>From the Blog</h2>
  </div>
</div>
<div className="row">
  {data}
</div>
</div>
</section>
)

export default function BlogListHome() {
  return (
    <StaticQuery 
      query={graphql`
        query {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { template: { eq: "blog-post" } } }
            limit: 3
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
                  featuredImage {
                    childImageSharp {
                      fluid(maxWidth: 350, quality: 80) {
                        ...GatsbyImageSharpFluid
                        ...GatsbyImageSharpFluidLimitPresentationSize
                      }
                    }
                  }
                }
              }
            }
          }
        }`
      }

      render={ data => {
          const posts = data.allMarkdownRemark.edges
            .filter(edge => !!edge.node.frontmatter.date)
            .map(edge =>
              <PostCard key={edge.node.id} data={edge.node} />
          )
          return <PostMaker data={posts} />
        } 
      }
    />
  )
}