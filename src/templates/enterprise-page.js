import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { RiArrowRightSLine } from "react-icons/ri"
import EnterpriseForm from "../components/EnterpriseForm"
import ContactModal from "../components/contactModal"
import Layout from "../components/layout"
import RecentBlogs from "../components/recentBlogs"
import SEO from "../components/seo"

import { Button, Tab, Nav, Row, Col } from 'react-bootstrap';

export const pageQuery = graphql`
  query EnterpriseQuery($id: String!){
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
        cta {
          ctaText
          ctaLink
        }
      }
    }
  }
`

const HomePage = ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  const Image = frontmatter.featuredImage ? frontmatter.featuredImage.childImageSharp.fluid : ""
  const isBrowser = typeof window !== "undefined"
  if(isBrowser){
    window.analytics.track("Viewed Enterprise Page");
  }
	return (
		<Layout>
      <SEO
        title="TaxBit: Leading 1099 Cryptocurrency Tax Software"
        description="No matter the variation of 1099, we’ve got you covered. TaxBit provides your users with a complete tax experience in-app of your platform. Technology and accounting firm to handle it all."
      />

      <div>
        <section className="pt-0 pt-lg-11 text-light hero enterpriseHero">
          <div className="container">
            <div className="row align-items-center">
              <div className="offset-1 offset-md-0 col-10 col-md-5 col-lg-6 order-md-2">
  
                <img src="/assets/enterpriseHero.png" className="d-none d-md-block img-fluid  mw-md-150 mb-6 mb-md-0" alt="..." data-aos="fade-up" data-aos-delay={100} />
              </div>
              <div className="col-12 col-md-7 col-lg-6 order-md-1" data-aos="fade-up">
                <h1 className="display-3 text-center text-md-left">
                  An End-to-End Suite of Tax Services Integrated within your Platform
                </h1>
                <p className="lead text-center text-md-left mb-6 mb-lg-8">
                  Technology and accounting firm converge to automate your tax information reporting needs. No matter the variation of 1099, we’ve got you covered. We don’t stop there… We provide your users with a complete tax experience in-app of your platform.
                </p>
          
                <div className="text-center text-md-left">
                  <ContactModal variant="light" className="btn-lg">Schedule a Demo</ContactModal>
                </div>
              </div>
            </div>
          </div>
        </section>
       


         <section className=" pt-8 pb-8 pb-md-12" data-aos="fade-up" data-aos-delay={200}>
          <div className="container">
            <div className="row mb-5">
              <div className="col-12 col-md-9">
                <h2>Driving Customer Value and Volume to your Platform</h2>
                <p>It isn’t enough to deliver your users tax forms at the end of each year. TaxBit’s tax center suite technology provides users with a complete, interactive tax experience in-app of your platform.</p>
              </div>
            </div>
            <div className="row">
              <Tab.Container defaultActiveKey="first">
                <Row>
                  <Col sm={6}>
                    <Nav variant="pills" className="flex-column stepTabs">
                      <Nav.Item>
                        <Nav.Link eventKey="first"><h3>Real-time tax position</h3>
                          <small>
                            See your tax liability (or refund position!) as you trade throughout the year.
                          </small>
                        </Nav.Link>
                      </Nav.Item>

                      <Nav.Item>
                        <Nav.Link eventKey="second"><h3>Completed tax forms</h3>
                          <small>
                            Access your completed tax forms with a few clicks. You are ready to file!
                          </small>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third"><h3>Tax optimization</h3>
                          <small>
                            Execute trades that reduce your tax liability (or increase your tax refund!) to the greatest extent possible.
                          </small>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="fourth"><h3>Chat with tax experts</h3>
                          <small>
                            Offload your users’ tax questions to tax experts. We are here to best serve your users.
                          </small>
                        </Nav.Link>
                      </Nav.Item>



                    </Nav>
                  </Col>
                  <Col sm={6}>
                    <Tab.Content className="enterpriseTabs">
                      <Tab.Pane className="enterpriseTab1" eventKey="first">
                        <div className="device device-macbook" data-aos="fade-up" data-aos-delay={100}>
                          <img src="/assets/enterpriseScreen.svg" className={`enterpriseScreen device-screen full`} />
                          <img src="/assets/devices/macbook.svg" className="img-fluid"/>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane className="enterpriseTab2" eventKey="second">
                        <img src="/assets/8949Screen.png"  alt="" />
                        <img src="/assets/1099.png"  alt="UI" />
                      </Tab.Pane>
                      <Tab.Pane className="enterpriseTab3" eventKey="third">
                        <img src="/assets/taxOptimizer.svg" className="optimizerWindow" alt="UI" data-aos="fade-up" data-aos-delay={100} />
                        <div className="device device-macbook">
                          <img src="/assets/enterpriseScreen.svg" className={`enterpriseScreen device-screen full`} />
                          <img src="/assets/devices/macbook.svg" className="img-fluid"/>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane className="enterpriseTab4" eventKey="fourth">
                        <img src="/assets/chatScreen.png" className="chatWindow" alt="UI" data-aos="fade-up" data-aos-delay={100} />
                        <div className="device device-macbook">
                          <img src="/assets/enterpriseScreen.svg" className={`enterpriseScreen device-screen full`} />
                          <img src="/assets/devices/macbook.svg" className="img-fluid"/>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
            </div>
            <Row>
              <Col className="text-center mt-8" sm={12}>
                We do so much more... Contact us to see a customized demo. <br/>
                <ContactModal variant="primary" className="mt-8">Schedule a Demo</ContactModal>
              </Col>
            </Row>
          </div>
        </section>

        <div className="section bg-black pt-8 pt-md-12 pb-8 pb-md-12">
  <div className="container">
    <div className="row justify-content-between align-items-center mb-5">
      <div className="offset-2 col-4 offset-md-0 mb-4 my-md-0 col-md-4 order-md-2 text-center enterpriseServerContainer">
        <img className="rack1" src="/assets/enterpriseServer/enterpriseServerBG.png" alt="enterprise server" />
        <img  data-aos="fade-down" data-aos-duration="500" data-aos-delay="50" className="rack1" src="/assets/enterpriseServer/enterpriseServerB1.png" alt="enterprise server" />
        <img  data-aos="fade-down" data-aos-duration="1000" data-aos-delay="162" className="rack1" src="/assets/enterpriseServer/enterpriseServerB2.png" alt="enterprise server" />
        <img  data-aos="fade-down" data-aos-duration="500" data-aos-delay="375" className="rack1" src="/assets/enterpriseServer/enterpriseServerR1.png" alt="enterprise server" />
        <img  data-aos="fade-down" data-aos-duration="800" data-aos-delay="525" className="rack1" src="/assets/enterpriseServer/enterpriseServerR2.png" alt="enterprise server" />
        <img  data-aos="fade-down" data-aos-duration="900" data-aos-delay="400" className="rack1" src="/assets/enterpriseServer/enterpriseServerL1.png" alt="enterprise server" />
        <img  data-aos="fade-down" data-aos-duration="1200" data-aos-delay="450" className="rack1" src="/assets/enterpriseServer/enterpriseServerL2.png" alt="enterprise server" />
        <img  data-aos="fade-down" data-aos-duration="1500" data-aos-delay="500" className="rack1" src="/assets/enterpriseServer/enterpriseServerL3.png" alt="enterprise server" />
        <img  data-aos="fade-down" data-aos-duration="900" data-aos-delay="670" className="rack1" src="/assets/enterpriseServer/enterpriseServerF1.png" alt="enterprise server" />

        <img className="img-fluid mw-md-150 mb-md-0 hiddenBg" src="/assets/enterpriseServer/enterpriseServerB1.png" alt="..." />
      </div>
      <div className="col-12 col-md-7 order-md-1 mt-12 mt-md-0">

        <h2 className="text-white" style={{maxWidth: '450px'}}>
         Technology and Professionals that Scale with Your Business
        </h2>

        <div className="lead text-muted mb-0">
          Our CPAs, tax attorneys, and technology professionals become an extension of your team.
        </div>
        <div className="row mt-8">
          <div className="col-12 col-md-6" data-aos="fade-up" data-aos-delay={50}>
            <div className="row">
              <div className="col-auto col-md-12">
              
                <div className="row gx-0 align-items-center mb-md-5">
                  <div className="col-auto">
                    <img className="img-fluid w-75 w-md-100 mb-6 mb-md-0" src="/assets/icons/integration.svg" alt="Integrations" />
                  </div>
                </div> 
              </div>
              <div className="col col-md-12 ml-n5 ml-md-0">
              
                <h3 className="text-white">
                  One Simple Integration
                </h3>
            
                <p className="text-muted mb-6 mb-md-0">
                  Avoid spreadsheets and system fragmentation. TaxBit handles everything related to tax information reporting from beginning to end.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6" data-aos="fade-up" data-aos-delay={150}>
            <div className="row">
              <div className="col-auto col-md-12">
          
                <div className="row gx-0 align-items-center mb-md-5">
                  <div className="col-auto">
                    <img className="img-fluid w-75 w-md-100 mb-6 mb-md-0" src="/assets/icons/cloud.svg" alt="..." />
                  </div>
                </div>
              </div>
              <div className="col col-md-12 ml-n5 ml-md-0">
        
                <h3 className="text-white">
                  Security & Compliance Focused
                </h3>
        
                <p className="text-muted mb-6 mb-md-0">
                  Data security is of utmost importance to TaxBit. We are independently SOC 2 certified and deeply invest in the security of our infrastructure.
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
                <p>TaxBit doesn’t merely produce and issue tax forms. We integrate technology within your platform to drive customer value and volume to your business.</p>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-lg-3 col-md-6 mb-6" data-aos="fade-up" data-aos-delay={0}>
                <div className="icon text-primary mb-5">
                  <img src="/assets/icons/experts.svg"/>
                </div>
                <h3>
                  Best-in-class tax experts
                </h3>
                <p className="text-muted mb-6 mb-md-0">
                  You’d be hard pressed to find CPAs and attorneys closer to the ground on all things related to cryptocurrency taxes. We serve on the tax leadership committee of the Chamber of Digital Commerce and work directly with the IRS and other regulatory bodies through our own relationships. Our tax experts have been exclusive panelists at IRS Virtual Currency Summits and actively work with congressional members of the Blockchain Caucus.
                </p>
              </div>
              <div className="col-12 col-lg-3 col-md-6 mb-6" data-aos="fade-up" data-aos-delay={50}>
                <div className="icon text-primary mb-5">
                  <img src="/assets/icons/liability.svg"/>
                </div>
                <h3>
                  Full Liability Coverage
                </h3>
                <p className="text-muted mb-6 mb-md-0">
                  Experts should always stand behind everything that they do. TaxBit is both an accounting firm and technology provider that takes on full liability for every 1099 that we issue. You don’t need to stress about staying up-to-date on what forms you need to issue, when you need to issue them, and how to accurately compile the information in order to issue them. We take liability for and handle everything from beginning-to-end.
                </p>
              </div>
               <div className="col-12 col-lg-3 col-md-6 mb-6" data-aos="fade-up" data-aos-delay={100}>
                <div className="icon text-primary mb-5">
                  <img src="/assets/icons/trust.svg"/>
                </div>
                <h3>
                  Trusted by the industry
                </h3>
                <p className="text-muted mb-6 mb-md-0 mt-3">
                  TaxBit has produced and issued more 1099 tax forms relating to cryptocurrency than any provider. We are the first provider to develop cost basis tracking technology in order to appropriately produce and file form 1099-B. Your users will have confidence that the 1099s you file accurately reflect their cryptocurrency activity - no more unnecessary and costly 1099-K audits from the IRS.
                </p>
              </div>
               <div className="col-12 col-lg-3 col-md-6 mb-6" data-aos="fade-up" data-aos-delay={150}>
                <div className="icon text-primary mb-5">
                  <img src="/assets/icons/forms.svg"/>
                </div>
                <h3>
                  Unified 1099 and 8949 tax reporting
                </h3>
                <p className="text-muted mb-6 mb-md-0">
                  TaxBit also has consumer software that provides users with their form 8949. TaxBit integrates with and connects cost basis information across every exchange, reconciles transactions to the 1099s that you issue, and provides users with completed tax forms that are ready to file. All of this happens in-app of your platform, completely transforming your users' experience as related to taxes. 
                </p>
              </div>
            </div>
          </div>
        </section>
       
        
      </div>
        <section className="section enterpriseHero py-10">
        <div className="container">
          <div className="row text-center mb-5">
            
            <div className="col-12">

              <h2 className="text-white">
               Lets Talk!
              </h2>

              <div className="lead text-white mb-6">
                Please contact us to schedule a customized demo tailored to your platform
              </div>
              <EnterpriseForm/>
            </div>
          </div>

        </div>
        
      </section>

      
      <recentBlogs/>
		</Layout>
	)
}

export default HomePage
