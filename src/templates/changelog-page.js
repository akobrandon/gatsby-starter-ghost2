import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Content, { HTMLContent } from '../components/Content'
import {Container, Button, Jumbotron} from 'react-bootstrap'


export const ChangelogPageTemplate = ({ content, lastEditDate, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <div>
    <Jumbotron className="pageHead text-white mb-4  consumerHero">
      <Container className="mt-8">
        <h1>Changelog</h1>
        <p>Last Updated {lastEditDate}</p>
      </Container>
    </Jumbotron>
          <Container>
            <PageContent className="content" content={content} />  
          </Container>      
       </div>      
  )
}

ChangelogPageTemplate.propTypes = {
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const ChangelogPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <ChangelogPageTemplate
        contentComponent={HTMLContent}
        content={post.html}
        lastEditDate={post.frontmatter.date}
      />
    </Layout>
  )
}

ChangelogPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ChangelogPage

export const ChangelogPageQuery = graphql`
  query ChangelogPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
