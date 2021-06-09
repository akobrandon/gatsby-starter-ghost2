import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { RiArrowRightSLine } from "react-icons/ri"



import Trustbox from '../components/Trustbox'
import JoinModal from "../components/joinModal"
import ContactModal from "../components/contactModal"
import Layout from "../components/layout"
import RecentBlogs from "../components/recentBlogs"
import SEO from "../components/seo"
import logo from '../assets/img/logo.svg'

import { Button, Tab, Nav, Row, Col } from 'react-bootstrap';

export const pageQuery = graphql`
  query PricingQuery($id: String!){
		markdownRemark(id: { eq: $id }) {
      id
    }
  }
`

const HomePage = ({ data }) => {
  const isBrowser = typeof window !== "undefined"
  if(isBrowser && window.gtag){
    window.analytics.track("Viewed Pricing Page");
    window.gtag('event', 'conversion', {'send_to': 'AW-761088599/la8vCJuSwf4BENeU9eoC'});
  }

  return (
		<Layout>
      <SEO
        title="Pricing | TaxBit"
        description=""
      />
        <section className="pt-8 pt-md-11 pb-10 pb-md-15 consumerHero">
          <div className="shape shape-blur-3 svg-shim text-white">
            <svg viewBox="50 100 1738 487" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h1420.92s713.43 457.505 0 485.868C707.502 514.231 0 0 0 0z" fill="url(#paint0_linear)"></path><defs><linearGradient id="paint0_linear" x1="0" y1="0" x2="1049.98" y2="912.68" gradientUnits="userSpaceOnUse"><stop stop-color="currentColor" stop-opacity=".075"></stop><stop offset="1" stop-color="currentColor" stop-opacity="0"></stop></linearGradient></defs></svg>
          </div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-md-10 col-lg-8 text-center">
                {/* Heading */}
                <h1 data-aos="fade-up" className="display-2 pt-6 text-white">
                  Pricing
                </h1>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-n8 mt-md-n14">
          <div className="container">
            <div className="row gx-4 pricingCardContainer">
              <div  data-aos="fade-up" data-aos-delay={50} className="pricingCard col-6 col-md-4">
       
                <div className="card bg-lightGradient shadow-lg mb-6">
                  <div className="card-body">
                    <div className="basicPlan" />
                    <div className="mb-3">
                      <span className="badge rounded-pill badge-primary-soft">
                        <span className="h6 text-uppercase">Basic</span>
                      </span>
                    </div>
                    <div className="d-flex">
                      <span className="h2 mb-0">$</span>
                      <span className="font-weight-bold display-3 mb-0">50</span>
                      <span className="h3 align-self-end mb-1">/year</span>
                    </div>
                    <p className="text-muted mt-2">
                      <span className="font-weight-bold h3 mb-0">250</span> Transactions
                    </p>
                  </div>
                  <div className="card-body bg-white card-features">
                    <div>
                      <div className="text-muted float-right">
                        Live Chat
                      </div>
                      <p>
                        Support Level
                      </p>
                    </div>
                    <div>
                      <div className="text-muted float-right">
                        Current Year
                      </div>
                      <p>
                        Tax Forms
                      </p>
                    </div>
                    <div>
                      <div className="badge badge-rounded-circle badge-dark-soft float-right">
                        <i className="fe fe-x" />
                      </div>
                      <p>
                        Tax Optimizer
                      </p>
                    </div>
                    <div>
                      <div className="badge badge-rounded-circle badge-dark-soft float-right">
                        <i className="fe fe-x" />
                      </div>
                      <p>
                        Loss Harvesting
                      </p>
                    </div>
                    <div>
                      <div className="badge badge-rounded-circle badge-dark-soft float-right">
                        <i className="fe fe-x" />
                      </div>
                      <p>
                        Portfolio Performance
                      </p>
                    </div>
                    <div>
                      <div className="badge badge-rounded-circle badge-dark-soft float-right">
                        <i className="fe fe-x" />
                      </div>
                      <p>
                        DeFi Beta
                      </p>
                    </div>
                    <div>
                      <div className="badge badge-rounded-circle badge-dark-soft float-right">
                        <i className="fe fe-x" />
                      </div>
                      <p>
                        CPA Review
                      </p>
                    </div>
                    <JoinModal className="btn-primary-soft btn-block">Start Trial</JoinModal>
                  </div>
                </div>
              </div>


              <div  data-aos="fade-up" data-aos-delay={100} className="pricingCard col-6 col-md-4">
       
                <div className="card bg-lightGradient shadow-lg mb-6">
                  <div className="card-body">
                  <div className="plusPlan" />
                
                    <div className="mb-3">
                      <span className="badge rounded-pill badge-primary-soft">
                        <span className="font-weight-bold h6 text-uppercase">Plus +</span>
                      </span>
                    </div>
                    <div className="d-flex">
                      <span className="h2 mb-0">$</span>
                      <span className="font-weight-bold display-3 mb-0">175</span>
                      <span className="h3 align-self-end mb-1">/year</span>
                    </div>
                    <p className="text-muted mt-2">
                      <span className="font-weight-bold h3 mb-0">2,500</span> Transactions
                    </p>
                  </div>
                  <div className="card-body bg-white card-features">
                    <div>
                      <div className="text-muted float-right">
                        Live Chat
                      </div>
                      <p>
                        Support Level
                      </p>
                    </div>
                    <div>
                      <div className="text-muted float-right">
                        All Years
                      </div>
                      <p>
                        Tax Forms
                      </p>
                    </div>
                    <div>
                      <div className="badge badge-rounded-circle badge-success-soft float-right">
                        <i className="fe fe-check" />
                      </div>
                      <p>
                        Tax Optimizer
                      </p>
                    </div>
                    <div>
                      <div className="badge badge-rounded-circle badge-success-soft float-right">
                        <i className="fe fe-check" />
                      </div>
                      <p>
                        Loss Harvesting
                      </p>
                    </div>
                    <div>
                      <div className="badge badge-rounded-circle badge-success-soft float-right">
                        <i className="fe fe-check" />
                      </div>
                      <p>
                        Portfolio Performance
                      </p>
                    </div>
                    <div>
                      <div className="badge badge-rounded-circle badge-success-soft float-right">
                        <i className="fe fe-check" />
                      </div>
                      <p>
                        DeFi Beta
                      </p>
                    </div>
                    <div>
                      <div className="badge badge-rounded-circle badge-dark-soft float-right">
                        <i className="fe fe-x" />
                      </div>
                      <p>
                        CPA Review
                      </p>
                    </div>
                    <JoinModal className="btn-primary btn-block">Start Trial</JoinModal>
                  </div>
                </div>
              </div>
              <div data-aos="fade-up" data-aos-delay={150} className="pricingCard col-12 col-md-4">
              
                <div className="card bg-darkGradient shadow-lg mb-6">
                  <div className="card-body">
                    <div className="proPlan" />
                    <div className="mb-3">
                      <span className="badge rounded-pill badge-primary-soft">
                        <span className="font-weight-bold text-white h6 text-uppercase">PRO</span>
                      </span>
                    </div>
                    <div className="d-flex text-white">
                      <span className="h2 mb-0">$</span>
                      <span className="font-weight-bold display-3 mb-0">500</span>
                      <span className="h3 align-self-end mb-1">/year</span>
                    </div>
                    <p className="text-muted mt-2">
                      <span className="font-weight-bold h3 mb-0">25,000</span> Transactions
                    </p>
                  </div>
                  <div className="card-body bg-white card-features">
                    <div>
                      <div className="text-muted float-right">
                        Live Chat
                      </div>
                      <p>
                        Support Level
                      </p>
                    </div>
                    <div>
                      <div className="text-muted float-right">
                        All Years
                      </div>
                      <p>
                        Tax Forms
                      </p>
                    </div>
                    <div>
                      <div className="badge badge-rounded-circle badge-success-soft float-right">
                        <i className="fe fe-check" />
                      </div>
                      <p>
                        Tax Optimizer
                      </p>
                    </div>
                    <div>
                      <div className="badge badge-rounded-circle badge-success-soft float-right">
                        <i className="fe fe-check" />
                      </div>
                      <p>
                        Loss Harvesting
                      </p>
                    </div>
                    <div>
                      <div className="badge badge-rounded-circle badge-success-soft float-right">
                        <i className="fe fe-check" />
                      </div>
                      <p>
                        Portfolio Performance
                      </p>
                    </div>
                    <div>
                      <div className="badge badge-rounded-circle badge-success-soft float-right">
                        <i className="fe fe-check" />
                      </div>
                      <p>
                        DeFi Beta
                      </p>
                    </div>
                    <div>
                      <div className="badge badge-rounded-circle badge-success-soft float-right">
                        <i className="fe fe-check" />
                      </div>
                      <p>
                        CPA Review
                      </p>
                    </div>
                    <JoinModal className="btn-primary-soft btn-block">Start Trial</JoinModal>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-3 border-bottom">
          <div className="container">
            <h2 className="text-center mb-8"  data-aos="fade-up" data-aos-delay={0}>All Plans Include</h2>
            <div className="row">
              <div className="col-12 col-md-4 my-5" data-aos="fade-up" data-aos-delay={0}>
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

              
              <div className="col-12 col-md-4 my-5" data-aos="fade-up" data-aos-delay={50}>
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

              <div className="col-12 col-md-4 my-5" data-aos="fade-up" data-aos-delay={100}>
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

              <div className="col-12 col-md-4 my-5" data-aos="fade-up" data-aos-delay={0}>
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
              <div className="col-12 col-md-4 my-5" data-aos="fade-up" data-aos-delay={50}>
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
              <div className="col-12 col-md-4 my-5" data-aos="fade-up" data-aos-delay={100}>
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
                 <h2 className="text-center mb-8">Customer Reviews</h2>
            <div className="col">
            <Trustbox length={0} ellipsis={""}/>
            </div>
            </div>
          </div>
        </section>
        <section className="mt-6">
          <div className="container">
            <div className="row gx-4 pricingCardContainer">
              <div className="col-12">
              
                <div className="card bg-dark text-white shadow-lg mb-6">
                  <div className="card-body enterprisePlan text-center">
                
                    <div className="my-3">
                      <img src={logo} alt="TaxBit" className="logo" />
                      <div className="fadeIntro">
                        ENTERPRISE
                      </div>
                    </div>
                    <p className="mt-5">
                      <span className="h3 mb-0">Schedule a customized demo tailored to your platform</span>
                  
                      <ContactModal variant="light" className="mt-6">Schedule a Demo</ContactModal>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
		</Layout>
	)
}

export default HomePage
