import React, { useState, useEffect } from 'react'
import { graphql, navigate, Link } from "gatsby"
import { useCookies } from 'react-cookie';
import Trustbox from '../components/Trustbox'
import Layout from "../components/layout"
import SEO from "../components/seo"
import SignupForm from "../components/signup-form"
import {Container, Button, Jumbotron} from 'react-bootstrap'
import logo from '../assets/img/logo.svg'
import blockFiLogo from '../../static/assets/blockfiPlus.png'

export const pageQuery = graphql`
  query InviteQuery($id: String!){
    markdownRemark(id: { eq: $id }) {
      id
      html
      excerpt(pruneLength: 140)
      frontmatter {
        title
        promoCode
        greeting
      }
    }
  }
`
const InvitePage = ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, excerpt } = markdownRemark

  const [percent_off, setPercent] = useState(0)

  const [cookies, setCookie] = useCookies(['name']);

  const isBrowser = typeof window !== "undefined"
  if(isBrowser && window.gtag){
    window.analytics.track("Viewed Partner Landing Page", {
        PartnerCode: frontmatter.promoCode
    });
    window.gtag('event', 'conversion', {'send_to': 'AW-761088599/la8vCJuSwf4BENeU9eoC'});
    setCookie("promo_code", frontmatter.promoCode, { 
      path: "/",
      maxAge: 3600,
      domain: ".taxbit.com"});
  }


    useEffect(() => {
      fetch('https://api.taxbit.com/v1/subscriptions/coupons/'+frontmatter.promoCode, {
        retryOn: [500],
        retries: 5,
        retryDelay: 300
  }).then(response => response.json())
      .then(result => {
        if(frontmatter.promoCode == "blockfi"){
          setPercent(10)
        } else {
          if (result.valid) {
            setPercent(result.percent_off)
          }
        }
      },
      error => {
        alert(error)
      })
    }, [])





  return (
    <div>
      <SEO
        title={frontmatter.title+" + TaxBit"}
        description={excerpt}
      />
      <Jumbotron className="text-white mb-4 mt-0 inviteHero">
        <div className="container">
          <div className="row">
            <div className="offset-1 offset-md-0 col-10 col-md-5 col-lg-6 order-md-2">
              <img src="/assets/consumerHero.svg" className="d-none d-md-block img-fluid  mw-md-150 mb-6 mb-md-0" alt="..." />
            </div>
            <div className="col-12 col-md-7 col-lg-6 order-md-1">
              <Link to="/"><img src={logo} alt="TaxBit" className="logo mb-8" /></Link>
              {frontmatter.promoCode == "blockfi"  && 
                <img src={blockFiLogo} alt="TaxBit" className="logo blockfiPlus mb-8" />
                }
              <h1 className="mt-5">{frontmatter.greeting} <br/>Get {percent_off}% off all Plans</h1>
              <article dangerouslySetInnerHTML={{ __html: html }} />
              <SignupForm promoCode={frontmatter.promoCode}/>
            </div>
          </div>
        </div>


      </Jumbotron>
      <section className="py-3 border-bottom">
        <div className="container">
          <h2 className="text-center mb-8"  >All Plans Include</h2>
            <div className="row">
              <div className="col-12 col-md-4 my-5" >
                <div className="icon text-primary mb-5">
                  <img src="/assets/icons/authorities.svg"/>
                </div>
                <h3>
                  IRS compliant outputs
                </h3>
                <div className="d-flex">
                  <span className="badge badge-rounded-circle badge-success-soft mt-1 mr-4">
                    <i className="fe fe-check"></i>
                  </span>
                  <p>IRS 8949 tax forms</p>
                </div>
                <div className="d-flex">
                  <span className="badge badge-rounded-circle badge-success-soft mt-1 mr-4">
                    <i className="fe fe-check"></i>
                  </span>
                  <p>IRS audit trail</p>
                </div>
                <div className="d-flex">
                  <span className="badge badge-rounded-circle badge-success-soft mt-1 mr-4">
                    <i className="fe fe-check"></i>
                  </span>
                  <p>Immutable data records</p>
                </div>
              </div>


              <div className="col-12 col-md-4 my-5" >
                <div className="icon text-primary mb-5">
                  <img src="/assets/icons/support.svg"/>
                </div>
                <h3>
                  Best-in-industry customer support
                </h3>
                <div className="d-flex">
                  <span className="badge badge-rounded-circle badge-success-soft mt-1 mr-4">
                    <i className="fe fe-check"></i>
                  </span>
                  <p>Live Chat</p>
                </div>
                <div className="d-flex">
                  <span className="badge badge-rounded-circle badge-success-soft mt-1 mr-4">
                    <i className="fe fe-check"></i>
                  </span>
                  <p>Comprehensive knowledge base</p>
                </div>
                <div className="d-flex">
                  <span className="badge badge-rounded-circle badge-success-soft mt-1 mr-4">
                    <i className="fe fe-check"></i>
                  </span>
                  <p>Ticket escalation to CPAs and attorneys</p>
                </div>

              </div>

              <div className="col-12 col-md-4 my-5">
                <div className="icon text-primary mb-5">
                  <img src="/assets/icons/privacy.svg"/>
                </div>
                <h3>
                  Comprehensive security
                </h3>
                <div className="d-flex">
                  <span className="badge badge-rounded-circle badge-success-soft mt-1 mr-4">
                    <i className="fe fe-check"></i>
                  </span>
                  <p>Read-only API Keys</p>
                </div>
                <div className="d-flex">
                  <span className="badge badge-rounded-circle badge-success-soft mt-1 mr-4">
                    <i className="fe fe-check"></i>
                  </span>
                  <p>Regulatory certifications</p>
                </div>
                <div className="d-flex">
                  <span className="badge badge-rounded-circle badge-success-soft mt-1 mr-4">
                    <i className="fe fe-check"></i>
                  </span>
                  <p>Secure payment info collection</p>
                </div>
              </div>

              <div className="col-12 col-md-4 my-5">
                <div className="icon text-primary mb-5">
                  <img src="/assets/icons/forms.svg"/>
                </div>
                <h3>
                  Robust compatability
                </h3>
                <div className="d-flex">
                  <span className="badge badge-rounded-circle badge-success-soft mt-1 mr-4">
                    <i className="fe fe-check"></i>
                  </span>
                  <p><span data-countup='{"startVal": 1800}' data-to="2000" data-aos data-aos-id="countup:in">2,000</span>+ Supported Currencies</p>
                </div>
                <div className="d-flex">
                  <span className="badge badge-rounded-circle badge-success-soft mt-1 mr-4">
                    <i className="fe fe-check"></i>
                  </span>
                  <p><span data-countup='{"startVal": 50}' data-to="150" data-aos data-aos-id="countup:in">150</span>+ Supported Exchanges</p>
                </div>
                <div className="d-flex">
                  <span className="badge badge-rounded-circle badge-success-soft mt-1 mr-4">
                    <i className="fe fe-check"></i>
                  </span>
                  <p><span data-countup='{"startVal": 50}' data-to="100" data-aos data-aos-id="countup:in">100</span>+ Supported Countries</p>
                </div>
              </div>
              <div className="col-12 col-md-4 my-5">
                <div className="icon text-primary mb-5">
                  <img src="/assets/icons/optimization.svg"/>
                </div>
                <h3>
                  Real-time reporting
                </h3>
                <div className="d-flex">
                  <span className="badge badge-rounded-circle badge-success-soft mt-1 mr-4">
                    <i className="fe fe-check"></i>
                  </span>
                  <p>Normalized data across all exchanges</p>
                </div>
                <div className="d-flex">
                  <span className="badge badge-rounded-circle badge-success-soft mt-1 mr-4">
                    <i className="fe fe-check"></i>
                  </span>
                  <p>Unified 1099 to 8949 matching</p>
                </div>
                <div className="d-flex">
                  <span className="badge badge-rounded-circle badge-success-soft mt-1 mr-4">
                    <i className="fe fe-check"></i>
                  </span>
                  <p>Exportable transaction reports</p>
                </div>
              </div>
              <div className="col-12 col-md-4 my-5">
                <div className="icon text-primary mb-5">
                  <img src="/assets/icons/performance.svg"/>
                </div>
                <h3>
                  Powerful dashboards
                </h3>
                <div className="d-flex">
                  <span className="badge badge-rounded-circle badge-success-soft mt-1 mr-4">
                    <i className="fe fe-check"></i>
                  </span>
                  <p>Real-time tax position</p>
                </div>
                <div className="d-flex">
                  <span className="badge badge-rounded-circle badge-success-soft mt-1 mr-4">
                    <i className="fe fe-check"></i>
                  </span>
                  <p>Consolidated asset balances</p>
                </div>
                <div className="d-flex">
                  <span className="badge badge-rounded-circle badge-success-soft mt-1 mr-4">
                    <i className="fe fe-check"></i>
                  </span>
                  <p>Unrealized gains/losses visibility</p>
                </div>
              </div>
            </div>
             <div className="row my-8">
             <h2 className="text-center mb-8">Cutomer Reviews</h2>
        <div className="col">
        <Trustbox length={0} ellipsis={""}/>
        </div>
        </div>
          </div>
        </section>
    </div>
  )
}

export default InvitePage
