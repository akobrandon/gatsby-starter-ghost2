import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Content, { HTMLContent } from '../components/Content'
import {Container, Button, Jumbotron} from 'react-bootstrap'
import SEO from "../components/seo"

export const CryptocurrencyGlossaryTemplate = ({ content, lastEditDate, contentComponent }) => {
  const PageContent = contentComponent || Content
  const isBrowser = typeof window !== "undefined"
  if(isBrowser){
    window.analytics.track("Viewed Tax Glossary");
  }
  return (
    <div>
    <SEO
      title="Cryptocurrency Terms Glossary | TaxBit"
      description="A glossary of cryptocurrency and tax-related terminology, including trading, IRS forms, tax rates, and capital gains and losses."
    />
    
    <Jumbotron className="pageHead text-white mb-4  consumerHero">
      <Container className="mt-8">
        <h1>Cryptocurrency Terms Glossary</h1>
      </Container>
    </Jumbotron>
          <Container>
            <PageContent className="content" content={content} />  
          </Container>      
       </div>      
  )
}

CryptocurrencyGlossaryTemplate.propTypes = {
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const CryptocurrencyGlossary = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <CryptocurrencyGlossaryTemplate
        contentComponent={HTMLContent}
        content={post.html}
        lastEditDate={post.frontmatter.date}
      />
    </Layout>
  )
}

CryptocurrencyGlossary.propTypes = {
  data: PropTypes.object.isRequired,
}

export default CryptocurrencyGlossary

export const CryptocurrencyGlossaryQuery = graphql`
  query CryptocurrencyGlossary($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
