import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Content, { HTMLContent } from '../components/Content'
import {Container, Button, Jumbotron} from 'react-bootstrap'
import RecentBlogs from "../components/recentBlogs"
import SEO from "../components/seo"

export const TermsPageTemplate = ({ content, lastEditDate, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <div>
    <Jumbotron className="pageHead text-white mb-4  consumerHero">
      <Container className="mt-8">
        <h1>Terms of Service</h1>
        <p>Last Updated {lastEditDate}</p>
      </Container>
    </Jumbotron>
          <Container>
            <PageContent className="content" content={content} />  
          </Container>      
       </div>      
  )
}

TermsPageTemplate.propTypes = {
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const TermsPage = ({ data }) => {
  const { markdownRemark: post } = data

  const isBrowser = typeof window !== "undefined"
  if(isBrowser){
    window.analytics.track("Viewed Terms Page");
  }

  return (
    <Layout>
      <SEO
        title="Terms & Conditions | TaxBit"
        description="Refund-maximizing, Cryptocurrency Tax Software You Can Depend On. Automatically sync your transactions from any of the top exchanges &#10004; Instantly download your IRS tax forms &#129534; — Get started for FREE!"
      />
      <TermsPageTemplate
        contentComponent={HTMLContent}
        content={post.html}
        lastEditDate={post.frontmatter.date}
      />
    </Layout>
  )
}

TermsPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default TermsPage

export const TermsPageQuery = graphql`
  query TermsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
