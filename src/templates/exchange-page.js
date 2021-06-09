import React, {useState} from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import ReactMarkdown from 'react-markdown'
import {render} from 'react-dom'
import Helmet from 'react-helmet'
import ShareButtons from "../components/share"


export const pageQuery = graphql`
  query ExchangeQuery($id: String!){
    markdownRemark(id: { eq: $id }) {
      id
      html
      excerpt(pruneLength: 140)
      fields{
        slug
      }
      frontmatter {
        title
        guide
        CSVinstructions
        APIinstructions
        notice
        noticeType
        exchangeLogo {
          childImageSharp {
            fluid(maxWidth: 450, maxHeight: 200, quality: 80, srcSetBreakpoints: [960, 1440]) {
              ...GatsbyImageSharpFluid
            }
            sizes {
              src
            }
          }
        }
      }
    }
  }
`
const ExchangePage = ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, fields, excerpt } = markdownRemark
  const exchangeLogo = frontmatter.exchangeLogo ? frontmatter.exchangeLogo.childImageSharp.fluid : ""

  const [height, setHeight] = useState(500);

  const isBrowser = typeof window !== "undefined"
  if(isBrowser){
    window.analytics.track("Viewed Exchange Page");
    window.addEventListener("message", function(event) {
      if (event.data.hasOwnProperty("FrameHeight")) {
        console.log(event.data)
        const height = +event.data.FrameHeight +48;
        setHeight(height)
      }
    })
  }
  return (
    <Layout>
      <Helmet title={"Filing taxes with "+frontmatter.title+" + TaxBit"} >


      </Helmet>
      <section className="pt-10 pb-8 consumerHero">
        <div className="shape shape-blur-3 svg-shim text-white">
          <svg viewBox="50 100 1738 487" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h1420.92s713.43 457.505 0 485.868C707.502 514.231 0 0 0 0z" fill="url(#paint0_linear)"></path><defs><linearGradient id="paint0_linear" x1="0" y1="0" x2="1049.98" y2="912.68" gradientUnits="userSpaceOnUse"><stop stop-color="currentColor" stop-opacity=".075"></stop><stop offset="1" stop-color="currentColor" stop-opacity="0"></stop></linearGradient></defs></svg>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="text-white col-12 col-md-10 text-center">
              <h1 data-aos="fade-up" className="display-2 pt-6">
                Connecting with {frontmatter.title}
              </h1>
              <p data-aos="fade-up" data-aos-delay="250" className="lead">TaxBit Makes it Easy to Track and File your Crypto Taxes with {frontmatter.title}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="row justify-content-center">
            <div className="text-white col-md-4 text-center">
              {exchangeLogo ? (
                <Img
                  fluid={exchangeLogo}
                  objectFit="contain"
                  alt={frontmatter.title + ' Logo'}
                  className="exchangeLogo"
                />
              ) : ""}
              {frontmatter.APIinstructions ? (
              <div className="badge badge-rounded-circle badge-success-soft mr-3">
                 &nbsp; API Support &nbsp; <i className="fe fe-check float-left" />
              </div>
              ) : ""}
              <div className="badge badge-rounded-circle badge-success-soft mb-7">
                 &nbsp; CSV Support &nbsp; <i className="fe fe-check float-left" />
              </div>
              <ShareButtons title={'Filing your crypto taxes with '+frontmatter.title+' + TaxBit'} url={"https://taxbit.com"+fields.slug} twitterHandle="TaxBit"/>
            </div>
            <div className="col-12 col-md-8 pt-8 mb-8">
              {frontmatter.notice ? (
              <div className={`alert ${"alert-"+frontmatter.noticeType}`} role="alert">
                {frontmatter.notice}
              </div>
              ) : ""}
              {frontmatter.APIinstructions ? (
                <div className="mb-6">
                  <h2 className="mb-6">Automated syncing with {frontmatter.title} API and TaxBit</h2>
                  <ReactMarkdown>{frontmatter.APIinstructions}</ReactMarkdown>
                </div>
              ) : ""}

              {frontmatter.guide ? (
                <>
                  <iframe className="guideFrame mb-6" style={{height}} src={frontmatter.guide} title="Connecting to your exchange guide."></iframe>
                </>
              ) : ""}
              {frontmatter.CSVinstructions ? (
                <>
                  <h2 className="mb-6">Importing a {frontmatter.title} CSV into TaxBit</h2>
                  <ReactMarkdown>{frontmatter.CSVinstructions}</ReactMarkdown>
                </>
              ) : ""}
            </div>
          </div>
      </section>
    </Layout>
  )
}

export default ExchangePage
