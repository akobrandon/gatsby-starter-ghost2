import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import { RiArrowRightLine, RiArrowLeftLine } from "react-icons/ri"
import Hero from '../components/Hero'
import Layout from "../components/layout"
import JobForm from "../components/JobForm"
import SEO from '../components/seo';
import ReactMarkdown from 'react-markdown'
import {Container, Row, Col, Modal, Button, Jumbotron} from 'react-bootstrap'


const JobPost = ({ data, pageContext }) => {
  const { markdownRemark } = data
  const { frontmatter, html, excerpt } = markdownRemark


  return (
    <Layout>
      <SEO
        title={frontmatter.title+" Job Opening | TaxBit"}
        description={frontmatter.description ? frontmatter.description : excerpt}
        article={true}
      />

      

      <Hero>
              <Row>
                <Col md={7}>
                  <p><small><Link className="text-white" to="/careers"><i className="icon-left" /> View All Careers</Link></small></p>
                  <h1>{frontmatter.title}</h1>
                </Col>
              </Row>
        </Hero>
        <section className="section">
          <div className="container pt-2">
            <div className="content my-4 pb-4">
              <h3>About TaxBit</h3>
              <p>
                TaxBit is the technology platform that enables cryptocurrency adoption by automating the tax complexities behind the asset class. TaxBit is used by thousands of consumers, leading exchanges, governmental authorities, respected accounting firms, and other cryptocurrency facilitators. TaxBit is trusted for solving some of the most novel and difficult tax problems at scale. If you’re searching for a company that’s dedicated to your ideas and growth, recognizes your unique contribution, and provides a fun, flexible and inclusive work environment, then TaxBit is the place for you. Whether you are a fin-tech wizard, crypto enthusiast, or passionate about solving complex problems at scale, we’d love to speak with you. Apply now.
                </p>
              <Link className="text-muted" to="/careers">Read More</Link>
              
              <h3 className="mt-4">Job Description</h3>
              <p>
                {frontmatter.description}
              <br/>
              This is a full time on site position based out of Salt Lake City Utah area.
              </p>
              
              <h3 className="mt-4">Responsibilities</h3>
              <ReactMarkdown>{frontmatter.responsibilities}</ReactMarkdown>
              
              <h3 className="mt-4">Skills</h3>
              <ReactMarkdown>{frontmatter.skills}</ReactMarkdown>
    </div>
    </div>

    <div className="bg-gradient mb-4 p-1">
  <Container className="container-spacer">
    <div className="text-center text-white mb-3 pb-1">
      <h3>Apply Now</h3>
    </div>
          <JobForm name={frontmatter.title + " <@U01H541T3EU>"} />
  </Container>
</div>

<div className="container">
            <div className="content">

<h2 className="text-center">Why You Should Apply</h2>
<ul>
<li>TaxBit is enabling the future of money by automating the tax compliance at scale.</li>
<li>TaxBit is backed by Fintech leaders TTV Capital and Valar Ventures, crypto moguls Dragonfly Capital Partners, Collaborative Fund and Winklevoss Capital, and generalist investors Global Founders Capital, Table Management, and Album VC.</li>
<li>TaxBit is partnered with the leading cryptocurrency exchanges such as Gemini, Uphold, CEX.io, BlockFi, and more.</li>
<li>We’re growing! TaxBit has had 10x YOY growth. We believe in our people and provide opportunities for career growth and leadership.</li>
</ul>

            </div>
          </div>
        </section>

      
      <div>
        <section className="pt-8">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-md-10 col-lg-9 col-xl-8">
                {/* Heading */}
                <h1 className="display-4 text-center">
                  
                </h1>
                {/* Text */}
                <p className="lead mb-7 text-center text-muted">
                  
                </p>
               
              </div>
            </div>
          </div>
        </section>
        <section className="py-6 py-md-8">
          <div className="container">
            <div className="row justify-content-center">
              <div className="blogContent col-12 col-md-10 col-lg-9 col-xl-8" dangerouslySetInnerHTML={{ __html: html }}>
                
              </div>
            </div>
          </div>
        </section>
      </div>



    </Layout>
  )
}

export default JobPost

export const pageQuery = graphql`
  query JobPostQuery($id: String!) {
    markdownRemark( 
      id: { eq: $id }
    ) {
      id
      html
      excerpt(pruneLength: 148)
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        description
      }
    }
  }
`