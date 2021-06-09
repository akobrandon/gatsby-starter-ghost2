import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Content, { HTMLContent } from '../components/Content'
import {Container, Button, Jumbotron} from 'react-bootstrap'
import RecentBlogs from "../components/recentBlogs"
import SEO from "../components/seo"

export const PrivacyPageTemplate = ({ content, lastEditDate, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <div>
    <Jumbotron className="pageHead text-white mb-4  consumerHero">
      <Container className="mt-8">
        <h1>Privacy Policy</h1>
        <p>Last Updated {lastEditDate}</p>
      </Container>
    </Jumbotron>
          <Container>
            <PageContent className="content" content={content} />  
          </Container>      
       </div>      
  )
}

PrivacyPageTemplate.propTypes = {
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const PrivacyPage = ({ data }) => {
  const { markdownRemark: post } = data
  const isBrowser = typeof window !== "undefined"
  if(isBrowser){
    window.analytics.track("Viewed Privacy Page");
  }
  return (
    <Layout>
      <SEO
        title="Privacy Policy | TaxBit"
        description="As a TaxBit user, you have entrusted us with your relevant personal and financial data. We recognize that your relationship with us is based on trust, and that you expect us to act responsibly and in your best interests. "
      />
      <PrivacyPageTemplate
        contentComponent={HTMLContent}
        content={post.html}
        lastEditDate={post.frontmatter.date}
      />
    </Layout>
  )
}

PrivacyPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default PrivacyPage

export const PrivacyPageQuery = graphql`
  query PrivacyPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
