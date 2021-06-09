import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { RiArrowRightSLine } from "react-icons/ri"
import Trustbox from '../components/Trustbox'
import Testimonials from '../components/Testimonials'
import Helmet from 'react-helmet'
import Layout from "../components/layout"
import RecentBlogs from "../components/recentBlogs"
import SEO from "../components/seo"
import JoinModal from "../components/joinModal"


import consumerBg from '../assets/img/icons/social/twitter.svg';

import { Button, Tab, Nav, Row, Col } from 'react-bootstrap';

export const pageQuery = graphql`
  query ConsumerQuery($id: String!){
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        tagline
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 480, maxHeight: 380, quality: 80, srcSetBreakpoints: [960, 1440]) {
              ...GatsbyImageSharpFluid
            }
            sizes {
              src
            }
          }
        }
        testimonials {
          author
          image{
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          quote
        }
      }
    }
  }
`

const HomePage = ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  const isBrowser = typeof window !== "undefined"
  if(isBrowser){
    window.analytics.track("Viewed Consumer Page");
  }
  return (
    <Layout>
    <Helmet title={`The #1 Cryptocurrency Tax Software | TaxBit`} >
      <script type="text/javascript" src="https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js" async></script>
      <script type="text/javascript" src="https://www.mczbf.com/tags/11977/tag.js" async></script>
      <meta property="og:image" content="https://cdn.taxbit.com/img/assets/TaxBit_Square_Small.png" />
    </Helmet>
      <SEO
        title="TaxBit: Automated Cryptocurrency Taxes & Portfolio Management"
        description="Refund-maximizing, Cryptocurrency Tax Software You Can Depend On. Automatically sync your transactions from any of the top exchanges &#10004; Instantly download your IRS tax forms &#129534; — Get started for FREE! "
      />

      <div>
        <section className="pt-0 pt-md-11 text-light hero consumerHero">
          <div className="container">
            <div className="row align-items-center">
              <div className="offset-1 offset-md-0 col-10 col-md-5 col-lg-6 order-md-2">
  
                <img src="/assets/consumerHero.svg" className="d-none d-md-block img-fluid  mw-md-150 mb-6 mb-md-0" alt="..." data-aos="fade-up" data-aos-delay={100} />
              </div>
              <div className="col-12 col-md-7 col-lg-6 order-md-1" data-aos="fade-up">
                <h1 className="display-3 text-center text-md-left">
                  Automated Cryptocurrency Taxes and Portfolio Management
                </h1>
                <p className="lead text-center text-md-left mb-6 mb-lg-8">
                  Designed by CPAs and tax attorneys, TaxBit connects all of your cryptocurrency transactions across every exchange so that you can accurately file your taxes, manage your portfolio, and make tax optimized trades.
                </p>
          
                <div className="text-center text-md-left">
                  <JoinModal variant="light" className="btn-lg">Start Free Trial</JoinModal>
                </div>
              </div>
            </div>
          </div>
        </section>
        


         <section className=" pt-8 pb-8 py-md-11" data-aos="fade-up" data-aos-delay={200}>
          <div className="container">
            <div className="row mb-5">
              <div className="col-12 col-md-9">
                <h2>Generate your Tax Forms in Two Simple Steps</h2>
              </div>
            </div>
            <div className="row">
              <Tab.Container defaultActiveKey="first">
                <Row>
                  <Col sm={6}>
                    <Nav variant="pills" className="flex-column stepTabs">
                      <Nav.Item>
                        <Nav.Link eventKey="first"><h3>Step 1 - Sync Transactions</h3>
                          <small>
                            TaxBit integrates with every exchange so you don’t have to manually upload your data. We automatically bring in and synchronize your transactions.
                          </small>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third"><h3>Step 2 - Download your Tax Forms</h3>
                          <small>
                            After syncing your transactions, you can click to download your completed tax forms. Your tax forms can be handed over to your accountant, or loaded into popular tax filing softwares such as TurboTax, TaxAct, etc.
                          </small>
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  <Col sm={6}>
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        <video width="100%" src="/assets/taxEngineLoop.mp4" muted loop playsInline preload="auto" autoPlay></video>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        second
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <video width="100%" src="/assets/myTaxesLoop.mp4" muted loop playsInline preload="auto" autoPlay></video>
                      </Tab.Pane>
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
            </div>
          </div>
        </section>

        <div className="section bg-black pt-8 pt-md-12 pb-8 pb-md-12">
  <div className="container">
    <div className="row justify-content-between mb-5">
      <div className="col-6 offset-3 offset-md-0 mt-10 mb-12 my-md-0 consumerIllustration order-md-2 col-md-5 text-center">
        <img data-aos="fade-up" className="rack1" data-aos-duration="600" data-aos-delay="50" className="mb-md-0" src="/assets/consumerIllustrationBG.svg" alt="..." />
        <img data-aos="fade-up" className="rack1" data-aos-duration="600" data-aos-delay="100" className="mb-md-0" src="/assets/consumerIllustration3.svg" alt="..." />
        <img data-aos="fade-down" className="rack1" data-aos-duration="900" data-aos-delay="150" className="mb-md-0" src="/assets/consumerIllustration2.svg" alt="..." />
      </div>
      <div className="col-12 col-md-7 order-md-1 mt-12 mt-md-0">

        <h2 className="text-white" style={{maxWidth: '450px'}}>
         Value Beyond Tax Compliance
        </h2>

        <div className="lead text-muted mb-0">
          Filing your taxes is good, saving money is even better. TaxBit provides you with best-in-industry features to reduce your taxes and manage your portfolio.
        </div>
        <div className="row mt-8">
          <div className="col-12 col-md-6" data-aos="fade-up" data-aos-delay={50}>
            <div className="row">
              <div className="col-auto col-md-12">
              
                <div className="row gx-0 align-items-center mb-md-5">
                  <div className="col-auto">
                    <img className="img-fluid w-75 w-md-100 mb-6 mb-md-0" src="/assets/icons/optimization.svg" alt="Integrations" />
                  </div>
                </div> 
              </div>
              <div className="col col-md-12 ml-n5 ml-md-0">
              
                <h3 className="text-white">
                  Tax Optimization & Loss Harvesting
                </h3>
            
                <p className="text-muted mb-6 mb-md-0">
                  See the tax impact of your trades before you make them. Receive real-time insights into which trades you should make to increase your tax refund.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6" data-aos="fade-up" data-aos-delay={150}>
            <div className="row">
              <div className="col-auto col-md-12">
          
                <div className="row gx-0 align-items-center mb-md-5">
                  <div className="col-auto">
                    <img className="img-fluid w-75 w-md-100 mb-6 mb-md-0" src="/assets/icons/performance.svg" alt="..." />
                  </div>
                </div>
              </div>
              <div className="col col-md-12 ml-n5 ml-md-0">
        
                <h3 className="text-white">
                  Portfolio Performance
                </h3>
        
                <p className="text-muted mb-6 mb-md-0">
                  See your return on investment position on both a cash and tax basis. Quickly identify where you are winning and losing in the market. No matter where your coins are stored, we bring them all together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div> 
  </div>
</div>



        {/* FEATURES
          ================================================== */}
        <section className="py-8 py-md-11 border-bottom">
          <div className="container">
            <div className="row mb-8">
              <div className="col-12 col-md-9">
                <h2>Why TaxBit?</h2>
                <p>TaxBit is the leading provider of forms 1099 in the cryptocurrency space. Regulatory agencies use TaxBit to assist with cryptocurrency tax matters. The industry’s leading investors have invested in and use TaxBit. You are in good hands.</p>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-lg-3 col-md-6 mb-6" data-aos="fade-up" data-aos-delay={0}>
                <div className="icon text-primary mb-5">
                  <img className="icon" src="/assets/icons/trust.svg"/>
                </div>
                <h3>
                  Accuracy you can trust
                </h3>
                <p className="text-muted mb-6 mb-md-0">
                  We don’t just give you tax forms… we give you an immutable audit trail that supports every number that you file. TaxBit is both a software provider and accounting firm with CPAs and tax attorneys. Trust the experts.
                </p>
              </div>
              <div className="col-12 col-lg-3 col-md-6 mb-6" data-aos="fade-up" data-aos-delay={50}>
                <div className="icon text-primary mb-5">
                  <img className="icon" src="/assets/icons/privacy.svg"/>
                </div>
                <h3>
                  Privacy and security focused
                </h3>
                <p className="text-muted mb-6 mb-md-0">
                  We are independently SOC 2 certified. We use read-only API keys so that we never have access to your assets. We agonize over the safety and security of your data.
                </p>
              </div>
               <div className="col-12 col-lg-3 col-md-6 mb-6" data-aos="fade-up" data-aos-delay={100}>
                <div className="icon text-primary mb-5">
                  <img className="icon" src="/assets/icons/support.svg"/>
                </div>
                <h3>
                  Best-in-industry customer support
                </h3>
                <p className="text-muted mb-6 mb-md-0 mt-3">
                  Taxes can be intimidating. We provide you with customer support specialists that obsess over taking care of you. You also can access our CPAs and attorneys should you ever be audited by the IRS or have technical tax questions.
                </p>
              </div>
               <div className="col-12 col-lg-3 col-md-6 mb-6" data-aos="fade-up" data-aos-delay={150}>
                <div className="icon text-primary mb-5">
                  <img className="icon" src="/assets/icons/value.svg"/>
                </div>
                <h3>
                 Value beyond tax compliance
                </h3>
                <p className="text-muted mb-6 mb-md-0">
                  We want to help you save money. TaxBit’s tax optimization suite ensure that you are making trades that reduce your tax bill to the greatest extent possible. TaxBit’s portfolio management tools give you real-time insights into your portfolio. 
                </p>
              </div>
            </div>
          </div>
        </section>


          <section className="section bg-gradient py-10">
          <div className="container">
            <div className="row text-center mb-5">
              
              <div className="col-12">

                <h2 className="text-white">
                 Get Started Today!
                </h2>

                <div className="lead text-white mb-6">
                  Generate your cryptocurrency tax forms now
                </div>
                <JoinModal variant="light" className="btn-lg">Start Free Trial</JoinModal>
              </div>
            </div>

          </div>
          
        </section>


        <section className="py-8 py-md-11 border-bottom">
          <div className="container">
            <h2 className="mb-8">Customer Reviews</h2>
              <Trustbox testimonials={frontmatter.testimonials} />
          </div>
        </section>

   
       
        
      </div>

      
      <RecentBlogs/>
    </Layout>
  )
}


class Slider extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null,
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }

  render() {
    const { index, direction } = this.state;
    return (
      <Testimonials activeIndex={index}
        direction={direction}
        onSelect={this.handleSelect}
        testimonials={this.props.testimonials} />
    );
  }
}

export default HomePage
