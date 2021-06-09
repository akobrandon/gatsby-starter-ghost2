import React, {useState} from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { RiArrowRightSLine } from "react-icons/ri"
import Trustbox from '../components/Trustbox'
import Helmet from 'react-helmet'
import Layout from "../components/layout"
import RecentBlogs from "../components/recentBlogs"
import SEO from "../components/seo"
import JoinModal from "../components/joinModal"

import { Button, Tab, Nav, Row, Col } from 'react-bootstrap';

export const pageQuery = graphql`
  query HomeQuery($id: String!){
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
      }
    }
  }
`

const HomePage = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  const [enterpriseHovered, setEnterpriseHovered] = useState(false);
  const toggleEnterprise = () => setEnterpriseHovered(!enterpriseHovered);

  const [consumerHovered, setConsumerHovered] = useState(false);
  const toggleConsumer = () => setConsumerHovered(!consumerHovered);

  const full = enterpriseHovered ? 'full' : ''

  const empty = consumerHovered ? 'empty' : ''

  const isBrowser = typeof window !== "undefined"
  if(isBrowser && window.gtag){
    window.analytics.track("Viewed Home Page");
    window.gtag('event', 'conversion', {'send_to': 'AW-761088599/pD9mCKyOwf4BENeU9eoC'});
  }

  return (
    <Layout>
    <Helmet title={`The #1 Cryptocurrency Tax Software | TaxBit`} >
      <script type="text/javascript" src="https://www.mczbf.com/tags/11977/tag.js" async></script>
      <meta property="og:image" content="https://cdn.taxbit.com/img/assets/TaxBit_Square_Small.png" />
    </Helmet>
      <SEO
        title="TaxBit: The #1 Cryptocurrency Tax Software"
        description="
        Automatically sync your transactions from any of the top exchanges &#10004; Integration with TurboTax &#10004; Instantly download your IRS tax forms &#129534; — Get started for FREE, and maximize your refund!"
      />


      <div>
        <section className="pb-1 pt-0 pt-md-11 text-light hero consumerHero">
          <div className="shape shape-blur-3 svg-shim text-white">
            <svg viewBox="50 200 1738 487" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h1420.92s713.43 457.505 0 485.868C707.502 514.231 0 0 0 0z" fill="url(#paint0_linear)"></path><defs><linearGradient id="paint0_linear" x1="0" y1="0" x2="1049.98" y2="912.68" gradientUnits="userSpaceOnUse"><stop stop-color="currentColor" stop-opacity=".075"></stop><stop offset="1" stop-color="currentColor" stop-opacity="0"></stop></linearGradient></defs></svg>
          </div>
          <div className="container fadeIn">
            <div className="row align-items-center">
              <div className="col-12 col-md-10 offset-md-1" data-aos1="fade-up">
                <h1 data-aos1="fade-up" data-aos1-delay={50} className="display-3 text-center">
                  Cryptocurrency Tax Software for Consumers and Enterprises
                </h1>
                <p data-aos1="fade-up" data-aos1-delay={100} className="lead text-center mb-6 mb-lg-8">
                  TaxBit connects the consumer and enterprise cryptocurrency tax experiences. Whether you are a platform that needs to issue 1099s, or a user that needs to report their taxes, TaxBit’s cryptocurrency tax software unifies the process.
                </p>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-10 offset-1 offset-lg-0 col-lg-6 text-center order-lg-2">
                <div id="css-laptop" className="image-center">
                  <div className="laptop">
                    <span className="shadow"></span>
                    <span className="lid"></span>
                    <span className="camera"></span>
                    <span className="screen">
                      <img alt="Consumer Screen" src="/assets/consumerScreen.svg" className="device-screen"/>
                      <img alt="Enterprise Screen" src="/assets/enterpriseScreen.svg" className={`enterpriseScreen device-screen ${empty} ${full}`} />
                    </span>
                    <span className="chassis">
                      <span className="keyboard"></span>
                      <span className="trackpad"></span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-6 col-lg-3 text-right order-lg-1">
                <Link data-aos1="fade-up" data-aos1-delay={150} to="/consumer" className="btn btn-white shadow mt-5"
                onMouseEnter={toggleConsumer}
                onMouseLeave={toggleConsumer}>
                  Explore Consumer
                </Link>
              </div>
              <div className="col-6 col-lg-3 text-left order-lg-3">
                <Link data-aos1="fade-up" data-aos1-delay={200} to="/enterprise" className="btn btn-dark shadow mt-5"
                onMouseEnter={toggleEnterprise}
                onMouseLeave={toggleEnterprise}>
                  Explore Enterprise
                </Link>
              </div>
            </div>
          </div>
        </section>
        

         <section className=" pt-8 pb-8 pb-md-12" data-aos="fade-up" data-aos-delay={100}>
          <div className="container">
            <div className="row">
              <div className="col-8 col-md-7 col-lg-6" data-aos="fade-up">
                <h2>A Unified Suite of Tax Products</h2>
                <p>We connect the processes of enterprises producing and issuing 1099s with that of consumers transforming their 1099s and other data into completed tax reports that are ready to file. TaxBit Consumer and TaxBit Enterprise interact so that users have a seamless and unified tax experience across all of the platforms that they use.</p>
              </div>
              <div className="offset-0 offset-md-1 col-3 col-md-4 indexIllustration">

                <img src="/assets/devices.png" className="w-150 mb-6 mb-md-0" alt="..." data-aos="fade-up" data-aos-delay={100} />
              </div>
            </div>

          </div>
        </section>

        <div className="exchangesScrollerWrap section bg-black py-8 py-md-12">
          <div data-aos="fade-up" data-aos-delay={200} data-aos-duration={800} className="exchangesScroller">
            <div className="planeWrap"><div className="plane"></div></div>
            <div className="gradient"></div>
          </div>
  <div className="container">
    <div className="row justify-content-between align-items-center mb-5">


      <div className="col-12 col-md-6">

        <h2 className="text-white" data-aos="fade-up" data-aos-delay={50}>
         Automated Technology
        </h2>

        <div data-aos="fade-up" data-aos-delay={100} className="lead text-muted-80 mb-0">
          Our APIs make it easy to automatically bring in your data. Whether you are interacting with our tax center suites on an exchange or using TaxBit Consumer, you will see the real-time tax impact of your transactions across any exchange you trade on.
        </div>
      </div>
      <div className="col-6 offset-md-0 col-md-6 text-center">
        <svg id="homeIllustration1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 440.87 363.7">
  <defs>
    <linearGradient id="linear-gradient" x1="185.67" y1="509.67" x2="258.28" y2="509.67" gradientTransform="matrix(.87 -.5 -.5 -.87 168.46 749.09)" gradientUnits="userSpaceOnUse">
      <stop offset={0} stopColor="#16133e" stopOpacity={0} />
      <stop offset={0} stopColor="#1f4161" stopOpacity={0} />
      <stop offset=".64" stopColor="#2e8a99" />
      <stop offset={1} stopColor="#42e8e0" />
    </linearGradient>
    <linearGradient id="linear-gradient-2" x1="155.07" y1="474.94" x2="228.16" y2="474.94" xlinkHref="#linear-gradient" />
    <linearGradient id="linear-gradient-3" x1="165.63" y1="452.47" x2="280.58" y2="452.47" xlinkHref="#linear-gradient" />
    <linearGradient id="linear-gradient-4" x1="197.29" y1="487.44" x2="301.7" y2="487.44" xlinkHref="#linear-gradient" />
    <linearGradient id="linear-gradient-5" x1="197.39" y1="183.63" x2="43.2" y2="97.79" gradientTransform="matrix(1 0 0 -1 -.11 365.46)" gradientUnits="userSpaceOnUse">
      <stop offset={0} stopColor="#42e8e0" />
      <stop offset=".16" stopColor="#36adb3" stopOpacity=".74" />
      <stop offset=".32" stopColor="#2b798b" stopOpacity=".52" />
      <stop offset=".47" stopColor="#224e6b" stopOpacity=".33" />
      <stop offset=".62" stopColor="#1b2d52" stopOpacity=".19" />
      <stop offset=".76" stopColor="#161540" stopOpacity=".08" />
      <stop offset=".89" stopColor="#130735" stopOpacity=".02" />
      <stop offset={1} stopColor="#120231" stopOpacity={0} />
    </linearGradient>
    <style dangerouslySetInnerHTML={{__html: "\n      .cls-2{isolation:isolate;fill:#73fff5;opacity:.5}\n    " }} />
  </defs>
  <g id="stem4">
    <path d="M76.39 214.74a2.58 2.58 0 01-1.29-4.81l58.47-33.66a2.57 2.57 0 012.57 4.46l-58.47 33.66a2.51 2.51 0 01-1.28.35z" style={{isolation: 'isolate'}} fill="url(#linear-gradient)" opacity=".7" />
    <path className="cls-2" d="M137.06 177.23a2.54 2.54 0 11-3.48-.94 2.54 2.54 0 013.48.94z" />
    <path className="cls-2" d="M135.65 178a.92.92 0 11-1.6.91.92.92 0 01.34-1.25.93.93 0 011.26.34z" />
  </g>
  <g id="stem3">
    <path d="M67.25 260.18a2.57 2.57 0 01-1.29-4.8l58.93-33.92a2.57 2.57 0 012.57 4.46l-58.88 33.9a2.58 2.58 0 01-1.33.36z" style={{isolation: 'isolate'}} fill="url(#linear-gradient-2)" opacity=".7" />
    <path className="cls-2" d="M128.33 222.46a2.54 2.54 0 11-3.45-1 2.55 2.55 0 013.45 1z" />
    <path className="cls-2" d="M126.89 223.25a.92.92 0 11-1.6.91.92.92 0 01.34-1.25.93.93 0 011.26.34z" />
  </g>
  <g id="stem2">
    <path d="M87.67 274.46a2.57 2.57 0 01-1.29-4.8l95.16-54.79a2.57 2.57 0 012.57 4.46L89 274.15a2.58 2.58 0 01-1.33.31z" style={{isolation: 'isolate'}} fill="url(#linear-gradient-3)" opacity=".7" />
    <path className="cls-2" d="M185 215.86a2.54 2.54 0 11-3.48-.94 2.54 2.54 0 013.48.94z" />
    <path className="cls-2" d="M183.62 216.67a.93.93 0 01-.34 1.26.92.92 0 01-.92-1.6.91.91 0 011.24.33z" />
  </g>
  <g id="stem1">
    <path d="M97.6 228.29a2.57 2.57 0 01-1.28-4.8l86-49.53a2.59 2.59 0 012.57 4.5l-86 49.54a2.64 2.64 0 01-1.29.29z" style={{isolation: 'isolate'}} fill="url(#linear-gradient-4)" opacity=".7" />
    <path className="cls-2" d="M185.83 174.91a2.55 2.55 0 11-3.49-.92 2.54 2.54 0 013.49.92z" />
    <path className="cls-2" d="M184.42 175.73a.93.93 0 01-.34 1.26.92.92 0 01-.92-1.6.9.9 0 011.23.31z" />
  </g>
  <path id="beam1" d="M205.28 216.35c0-22.74-16-50.39-35.66-61.76-10.1-5.83-19.22-6.23-25.7-2.18L0 235.68l48 88.41 145.54-84a17.08 17.08 0 002.45-1.41c5.79-4.01 9.29-11.68 9.29-22.33z" style={{isolation: 'isolate'}} opacity=".6" fill="url(#linear-gradient-5)" />
</svg>

      
        <img className="d-none d-md-block mb-md-0 w-150" src="/assets/homeIllustration2.svg" alt="..." />

        <svg id="homeIllustration3" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 440.87 363.7"><defs><style dangerouslySetInnerHTML={{__html: ".cls-1{opacity:0.6;isolation:isolate;fill:url(#linear-gradient);}.cls-2{fill:#73fff5;}" }} /><linearGradient id="linear-gradient" x1="6011.83" y1="-2654.01" x2="5857.64" y2="-2739.86" gradientTransform="matrix(-1, 0, 0, 1, 6255.41, 2807.83)" gradientUnits="userSpaceOnUse"><stop offset={0} stopColor="#42e8e0" /><stop offset="0.16" stopColor="#36adb3" stopOpacity="0.74" /><stop offset="0.32" stopColor="#2b798b" stopOpacity="0.52" /><stop offset="0.47" stopColor="#224e6b" stopOpacity="0.33" /><stop offset="0.62" stopColor="#1b2d52" stopOpacity="0.19" /><stop offset="0.76" stopColor="#161540" stopOpacity="0.08" /><stop offset="0.89" stopColor="#130735" stopOpacity="0.02" /><stop offset={1} stopColor="#120231" stopOpacity={0} /></linearGradient></defs><path id="beam2" className="cls-1" d="M235.58,119.3c0,22.73,16,50.38,35.66,61.75,10.1,5.83,19.21,6.23,25.7,2.18h0l144-83.27-48-88.41-145.54,84A17.08,17.08,0,0,0,244.9,97h0C239.08,101,235.58,108.65,235.58,119.3Z" /><g id="b10"><path className="cls-2" d="M318.89,257.87H318V171.69c0-6.72-2.24-11.71-6.31-14.06s-9.51-1.79-15.32,1.57L242.93,190l-.46-.81,53.42-30.83c6.12-3.53,11.89-4.08,16.26-1.56s6.77,7.8,6.77,14.86Z" /><path className="cls-2" d="M317.78,261.78a1.22,1.22,0,0,1-.62-.16,1.52,1.52,0,0,1-.68-1.38,3.83,3.83,0,0,1,1.74-3,1.38,1.38,0,0,1,2.21,1.28,3.79,3.79,0,0,1-1.74,3A2,2,0,0,1,317.78,261.78Zm1.35-3.89a.85.85,0,0,0-.44.14h0a2.88,2.88,0,0,0-1.28,2.21.65.65,0,0,0,.21.57.62.62,0,0,0,.6-.11,2.86,2.86,0,0,0,1.28-2.2.66.66,0,0,0-.21-.58.45.45,0,0,0-.16,0Z" /></g><g id="b9"><path className="cls-2" d="M325.74,236.69h-.93V167.21c0-8.44-2.83-14.72-7.95-17.67s-12-2.27-19.28,2L243,183l-.46-.81,54.62-31.53c7.61-4.4,14.78-5.09,20.21-2s8.41,9.69,8.41,18.48Z" /><path className="cls-2" d="M324.6,240.46a1.26,1.26,0,0,1-.63-.16,1.52,1.52,0,0,1-.67-1.38,3.79,3.79,0,0,1,1.74-3h0a1.38,1.38,0,0,1,2.21,1.27,3.77,3.77,0,0,1-1.75,3A1.79,1.79,0,0,1,324.6,240.46Zm.9-3.75a2.84,2.84,0,0,0-1.27,2.21.65.65,0,0,0,.21.57c.13.08.35,0,.6-.1a2.88,2.88,0,0,0,1.28-2.21.65.65,0,0,0-.21-.57.66.66,0,0,0-.61.1Z" /></g><g id="b8"><path className="cls-2" d="M333,239.46H332V162.87c0-10.39-3.48-18.13-9.81-21.78s-14.76-2.8-23.77,2.4l-55.49,32-.46-.81,55.49-32c9.3-5.37,18.08-6.22,24.7-2.4S333,152.13,333,162.87Z" /><path className="cls-2" d="M331.82,243.23a1.37,1.37,0,0,1-.63-.16,1.54,1.54,0,0,1-.67-1.38,3.83,3.83,0,0,1,1.74-3h0a1.38,1.38,0,0,1,2.21,1.28,3.79,3.79,0,0,1-1.74,3A2,2,0,0,1,331.82,243.23Zm1.35-3.89a.77.77,0,0,0-.44.14h0a2.88,2.88,0,0,0-1.28,2.21.65.65,0,0,0,.21.57c.13.08.35,0,.6-.1a2.88,2.88,0,0,0,1.28-2.21.66.66,0,0,0-.21-.58A.45.45,0,0,0,333.17,239.34Z" /></g><g id="b7"><path className="cls-2" d="M338.69,257.29h-.93V157c0-11.71-3.92-20.42-11.05-24.53s-16.63-3.15-26.76,2.7L243,168l-.46-.81,57-32.9c10.44-6,20.27-7,27.7-2.7S338.7,144.91,338.7,157Z" /><path className="cls-2" d="M337.55,261a1.26,1.26,0,0,1-.63-.16,1.54,1.54,0,0,1-.67-1.38,3.79,3.79,0,0,1,1.74-3,1.38,1.38,0,0,1,2.21,1.27,3.83,3.83,0,0,1-1.74,3A1.85,1.85,0,0,1,337.55,261Zm1.35-3.89a1,1,0,0,0-.44.14,2.86,2.86,0,0,0-1.28,2.21.66.66,0,0,0,.21.58.68.68,0,0,0,.6-.11,2.88,2.88,0,0,0,1.28-2.21.65.65,0,0,0-.21-.57.33.33,0,0,0-.17,0Z" /></g><g id="b6"><rect className="cls-2" x="230.59" y="116.71" width="176.12" height="0.93" transform="matrix(0.87, -0.5, 0.5, 0.87, -15.92, 174.91)" /><path className="cls-2" d="M395.59,74.76a1.27,1.27,0,0,1-.63-.17,1.52,1.52,0,0,1-.67-1.37,3.79,3.79,0,0,1,1.74-3,1.55,1.55,0,0,1,1.53-.11,1.52,1.52,0,0,1,.68,1.38,3.79,3.79,0,0,1-1.74,3A1.82,1.82,0,0,1,395.59,74.76Zm1.35-3.9a.86.86,0,0,0-.44.15,2.83,2.83,0,0,0-1.28,2.21.65.65,0,0,0,.21.57.68.68,0,0,0,.6-.11,2.89,2.89,0,0,0,1.28-2.22.65.65,0,0,0-.21-.57.45.45,0,0,0-.16,0Z" /></g><g id="b5"><rect className="cls-2" x="233.47" y="115.35" width="155.32" height="0.93" transform="translate(-16.33 170.43) rotate(-29.89)" /><path className="cls-2" d="M377.62,78.38a1.13,1.13,0,0,1-.62-.16,1.52,1.52,0,0,1-.68-1.38,3.79,3.79,0,0,1,1.74-3,1.38,1.38,0,0,1,2.21,1.27,3.79,3.79,0,0,1-1.74,3h0A1.82,1.82,0,0,1,377.62,78.38ZM379,74.46a1,1,0,0,0-.44.14,2.83,2.83,0,0,0-1.28,2.21.48.48,0,0,0,.81.47,2.88,2.88,0,0,0,1.28-2.21.65.65,0,0,0-.21-.57A.29.29,0,0,0,379,74.46Z" /></g><g id="b4"><path className="cls-2" d="M242.61,148l-.47-.81,57-32.9c21.1-12.18,38.28-41.92,38.28-66.29V3.76h.93V48c0,24.66-17.38,54.77-38.75,67.1Z" /><path className="cls-2" d="M337.19,4.82a1.22,1.22,0,0,1-.62-.16,1.52,1.52,0,0,1-.68-1.38,3.79,3.79,0,0,1,1.74-3,1.55,1.55,0,0,1,1.54-.12,1.51,1.51,0,0,1,.72,1.38,3.79,3.79,0,0,1-1.74,3A1.82,1.82,0,0,1,337.19,4.82ZM338.54.93a.86.86,0,0,0-.44.15,2.87,2.87,0,0,0-1.27,2.2.66.66,0,0,0,.21.58.68.68,0,0,0,.6-.11h0a2.86,2.86,0,0,0,1.25-2.21.68.68,0,0,0-.2-.57A.42.42,0,0,0,338.54.93Z" /></g><g id="b3"><path className="cls-2" d="M242.61,140.54l-.47-.81,55.5-32c18.77-10.84,34-37.29,34-59V28.23h.93V48.74c0,22-15.48,48.78-34.51,59.76Z" /><path className="cls-2" d="M331.46,29.26a1.33,1.33,0,0,1-.62-.16,1.52,1.52,0,0,1-.67-1.38,3.79,3.79,0,0,1,1.74-3,1.37,1.37,0,0,1,1.92.23,1.34,1.34,0,0,1,.28,1.05,3.79,3.79,0,0,1-1.74,3A1.72,1.72,0,0,1,331.46,29.26Zm1.35-3.89a1,1,0,0,0-.44.14,2.84,2.84,0,0,0-1.27,2.21.47.47,0,0,0,.81.46h0a2.87,2.87,0,0,0,1.27-2.2c0-.29-.07-.5-.21-.58A.45.45,0,0,0,332.81,25.37Z" /></g><g id="b2"><path className="cls-2" d="M242.61,133l-.47-.81,54.63-31.53c15.26-8.82,27.68-30.33,27.68-48V39.32h.93V52.74c0,17.93-12.63,39.8-28.15,48.76Z" /><path className="cls-2" d="M324.24,40.36a1.22,1.22,0,0,1-.62-.16,1.49,1.49,0,0,1-.67-1.38,3.79,3.79,0,0,1,1.74-3,1.37,1.37,0,0,1,2.2,1.27,3.79,3.79,0,0,1-1.74,3h0A1.82,1.82,0,0,1,324.24,40.36Zm1.35-3.9a1,1,0,0,0-.44.14,2.87,2.87,0,0,0-1.26,2.22.66.66,0,0,0,.21.58.68.68,0,0,0,.6-.11h0A2.84,2.84,0,0,0,326,37.08a.65.65,0,0,0-.21-.57A.26.26,0,0,0,325.59,36.46Z" /></g><g id="b1"><path className="cls-2" d="M242.61,126l-.47-.81,53.4-30.77c12.18-7,22.1-24.21,22.1-38.28V26h.93V56.13c0,14.37-10.12,31.9-22.56,39.08Z" /><path className="cls-2" d="M317.43,26.92a1.37,1.37,0,0,1-.63-.16,1.54,1.54,0,0,1-.67-1.38,3.79,3.79,0,0,1,1.74-3,1.38,1.38,0,0,1,2.21,1.28,3.8,3.8,0,0,1-1.75,3h0A1.68,1.68,0,0,1,317.43,26.92ZM318.78,23a.88.88,0,0,0-.45.14,2.84,2.84,0,0,0-1.27,2.21.65.65,0,0,0,.21.57c.13.08.35,0,.6-.1h0a2.88,2.88,0,0,0,1.28-2.21.66.66,0,0,0-.21-.58A.45.45,0,0,0,318.78,23Z" /></g></svg>


      </div>
    </div>

  </div>

</div>



        <section className="py-8 py-md-11 border-bottom">
          <div className="container">
            <div className="row mb-8">
              <div className="col-12 col-md-9">
                <h2>Professional Grade Software You Can Trust</h2>
                <p>TaxBit is the leading provider of forms 1099 in the cryptocurrency space. Regulatory agencies use TaxBit to assist with cryptocurrency tax matters. The industry’s leading investors have invested in and use TaxBit. You are in good hands.</p>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-lg-3 col-md-6 mb-6" data-aos="fade-up" data-aos-delay={0}>
                <div className="icon text-primary mb-5">
                  <img alt="experts icon" className="icon" src="/assets/icons/experts.svg"/>
                </div>
                <h3>
                  Designed by CPAs and tax attorneys
                </h3>
                <p className="text-muted mb-6 mb-md-0">
                  When it comes to 1099 issuances and tax form filings, it’s a zero error game.
                </p>
              </div>
              <div className="col-12 col-lg-3 col-md-6 mb-6" data-aos="fade-up" data-aos-delay={50}>
                <div className="icon text-primary mb-5">
                  <img alt="privacy icon" className="icon" src="/assets/icons/privacy.svg"/>
                </div>
                <h3>
                  Privacy and security focused
                </h3>
                <p className="text-muted mb-6 mb-md-0">
                  Independently SOC 2 certified. We agonize over the safety of your data.
                </p>
              </div>
               <div className="col-12 col-lg-3 col-md-6 mb-6" data-aos="fade-up" data-aos-delay={100}>
                <div className="icon text-primary mb-5">
                  <img alt="authorities icon" className="icon" src="/assets/icons/authorities.svg"/>
                </div>
                <h3>
                  Trusted by the authorities
                </h3>
                <p className="text-muted mb-6 mb-md-0 mt-3">
                  Working with some of the largest regulatory agencies around the world.
                </p>
              </div>
               <div className="col-12 col-lg-3 col-md-6 mb-6" data-aos="fade-up" data-aos-delay={150}>
                <div className="icon text-primary mb-5">
                  <img alt="trust icon" className="icon" src="/assets/icons/trust.svg"/>
                </div>
                <h3>
                 Trusted by the industry
                </h3>
                <p className="text-muted mb-6 mb-md-0">
                  Partnered with and servicing many of the industry’s most reputable exchanges.
                </p>
              </div>
            </div>
          </div>
        </section>

<div className="section text-white bg-black py-8 py-md-12">
   
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-5">
                <div className="row align-items-center">
                  <div className="col-4 col-md-6">
                    <img src="/assets/featuredOn/tigerWhite.png" className="w-100" />
                  </div>
                  <div className="col-4 col-md-6">
                    <img src="/assets/featuredOn/paradigmWhite.png" className="w-100" />
                  </div>
                  <div className="col-4 col-md-6 pt-md-8">
                    <img src="/assets/featuredOn/paypalWhite.png" className="w-100" />
                  </div>
                  <div className="col-4 col-md-6 pt-md-8">
                    <img src="/assets/featuredOn/coinbase_venturesWhite.png" className="w-100" />
                  </div>
                  <div className="col-4 col-md-6 offset-md-4 pt-md-8">
                    <img src="/assets/featuredOn/winklevossWhite.png" className="w-100" />
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-7 pt-8 pt-md-0 text-right">
                <h2>Backed by the Industry's Biggest Names</h2>
                <p className="text-muted">TaxBit is backed by the world's leading investors in cryptocurrency and fintech. This foundation sets us up for many years to come to fulfill our mission of enabling widespread cryptocurrency adoption by automating the regulatory hurdle of tax compliance.</p>
                <Link to="/investors" className="btn btn-primary btn-small shadow mt-5">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
</div>
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
              <Trustbox />
          </div>
        </section>




      </div>


      <RecentBlogs/>
    </Layout>
  )
}

export default HomePage
