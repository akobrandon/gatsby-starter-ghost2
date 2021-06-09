import React, { useState } from 'react';
import { navigate } from 'gatsby-link'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Hero from '../components/Hero'
import JobList from '../components/JobList'
import Helmet from 'react-helmet'
import {Container, Row, Col, Modal, Button, Jumbotron} from 'react-bootstrap'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Content, { HTMLContent } from '../components/Content'
import SEO from "../components/seo"


export const FeedbackPageTemplate = ({ content, lastEditDate, contentComponent }) => {
  const [userRating, setUserRating] = useState("null")

  const [message, setMessage] = useState("")

  const thumbsUp = (e) => {
    e.preventDefault()
    setUserRating("thumbsUp")
  }

  const thumbsDown = (e) => {
    e.preventDefault()
    setUserRating("thumbsDown")
  }


  const sendMessage = (e) => {
    e.preventDefault()
    window.zE('webWidget', 'chat:send', message)
    window.zE('webWidget', 'toggle')
  }

  return (
    <div>
      <Helmet title={`Feedback | TaxBit`} >
        <script type="text/javascript" src="https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js" async></script>
      </Helmet>
      <Hero>
          <div className="row align-items-center">
            <div className="col-12 col-md-7 col-lg-6 order-md-1" data-aos="fade-up">
            </div>
          </div>
        </Hero>
        <section className="section">
          <div className="container">
            <div className={`content my-4 pb-4 text-center userRating ${userRating}`}>
            <div className="initialMessage">
              <h3 className="my-6">How would you rate your experience with TaxBit?</h3>
              <button onClick={thumbsUp} type="button" className="btn btn-outline-primary mr-5"><i className="fe fe-lg fe-thumbs-up"></i></button>
              <button onClick={thumbsDown} type="button" className="btn btn-outline-primary"><i className="fe fe-lg fe-thumbs-down"></i></button>
            </div>
            <div className="thumbsUpMessage">
              <h3>Awesome! Please consider leaving us a review:</h3>
            </div>
            <div className="thumbsDownMessage">
              <h3>We're sorry to hear you had a poor experience. What could we do better for you next time?</h3>
            </div>
            <div className="contactForm">
            <textarea 
              className="my-4 form-control"
               placeholder={'Feedback'}
              value={message} 
              onChange={e=>setMessage(e.target.value)} ></textarea>
              <button onClick={sendMessage} type="button" className="btn float-right btn-primary mr-5">Submit</button>
            </div>
            <div className="trustpilot-widget" data-locale="en-US" data-template-id="530d0eaf748a510e2093cf9b" data-businessunit-id="5e5d8f30d4941700016227e1" data-style-height="850px" data-style-width="100%">
              <a href="https://www.trustpilot.com/review/taxbit.com" target="_blank" rel="noopener">Trustpilot</a>
            </div>
                  

    </div>
    </div>
        </section>
      </div>     
  )
}

FeedbackPageTemplate.propTypes = {
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const FeedbackPage = ({ data }) => {
  const { markdownRemark: post } = data

  const isBrowser = typeof window !== "undefined"
  if(isBrowser){
    window.analytics.track("Viewed Terms Page");
  }

  return (
    <Layout>
      <SEO
        title="Feedback | TaxBit"
        description="Refund-maximizing, Cryptocurrency Tax Software You Can Depend On. Automatically sync your transactions from any of the top exchanges &#10004; Instantly download your IRS tax forms &#129534; — Get started for FREE!"
      />
      <FeedbackPageTemplate
        contentComponent={HTMLContent}
        content={post.html}
        lastEditDate={post.frontmatter.date}
      />
    </Layout>
  )
}

FeedbackPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default FeedbackPage

export const FeedbackPageQuery = graphql`
  query FeedbackPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
