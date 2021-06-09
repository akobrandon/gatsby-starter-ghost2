import React from "react"
import { Link , graphql } from "gatsby"
import { RiArrowRightLine, RiArrowLeftLine } from "react-icons/ri"

import Layout from "../components/layout"
import PostCard from "../components/post-card2"
import SEO from "../components/seo"
import Hero from '../components/Hero'
import Pagination from '../components/common/pagination'




const BlogIndex = ({ data, location, pageContext }) => {
    const posts = data.allGhostPost.edges
    
    return (
      <Layout className="blog-page">
        <SEO
          title={"Blog — TaxBit"}
        />
        <Hero>
          <h1  data-aos="fade-up" data-aos-delay={50} className="mb-2 mt-8">Latest Posts</h1>
          <p  data-aos="fade-up" data-aos-delay={100} className="text-white"><em>News and insight by Cryptocurrency Tax Attorneys and Blockchain CPA’s</em></p>
        </Hero>
        <div className="container">
          <div className="row blogPosts">
            {posts.map(({ node }) => (
                <PostCard key={node.id} data={node} />
            ))}
          </div>

          <Pagination pageContext={pageContext} />
        </div>

        
      </Layout>
    )
}

export default BlogIndex

export const pageQuery = graphql`
  query GhostPostQuery($limit: Int!, $skip: Int!) {
    allGhostPost(
        sort: { order: DESC, fields: [published_at] },
        limit: $limit,
        skip: $skip
    ) {
      edges {
        node {
          ...GhostPostFields
        }
      }
    }
  }
`