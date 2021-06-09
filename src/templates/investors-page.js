import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Content, { HTMLContent } from '../components/Content'
import {Container, Button, Jumbotron} from 'react-bootstrap'
import SEO from "../components/seo"
import FeaturedOnGrid from '../components/FeaturedOnGrid'

export const InvestorsPageTemplate = ({ content, lastEditDate, investors, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <div>
    <Jumbotron className="pageHead text-white mb-4  consumerHero">
      <Container className="mt-8">
        <h1>Backed by the Best</h1>
        <p>TaxBit is backed and partnered with the world's leading investors in cryptocurrency and fintech.</p>
      </Container>
    </Jumbotron>
          <Container className="mb-5">
            <FeaturedOnGrid gridItems={investors} columnSize={4} gridClass="featuredInvestors" />
            </Container>
       </div>      
  )
}

InvestorsPageTemplate.propTypes = {
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const InvestorsPage = ({ data }) => {
  const { markdownRemark: post } = data
  const isBrowser = typeof window !== "undefined"
  if(isBrowser){
    window.analytics.track("Viewed Investors Page");
  }
  return (
    <Layout>
      <SEO
        title="Investors | TaxBit"
        description=""
      />
      <InvestorsPageTemplate
        contentComponent={HTMLContent}
        content={post.html}
        lastEditDate={post.frontmatter.date}
        investors={post.frontmatter.investors}
      />
    </Layout>
  )
}

InvestorsPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default InvestorsPage

export const InvestorsPageQuery = graphql`
  query InvestorsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        investors {
          image {
            childImageSharp {
              fluid(maxWidth: 200, quality: 80) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          link
        }
      }
    }
  }
`
