import React from "react"
import { Link } from "gatsby"
import {RiArrowLeftSLine, RiBugLine, RiSkullLine} from "react-icons/ri"
import Hero from '../components/Hero'
import SEO from "../components/seo"
import Layout from "../components/layout"

const NotFound = () => (
  <Layout className="not-found-page">
    <SEO title="Page not found"/>
    <div className="wrapper" style={{
      textAlign: "center"
    }}>

    <Hero>
          <div className="row align-items-center">
            <div className="col-12" data-aos="fade-up">
              <h1>Oops we did not expect that to happen</h1>
              <p className="lead text-center">
                The page you're looking for can not be found.
                </p>
      
            </div>
          </div>
        </Hero>
      <Link to="/" className="button"><RiArrowLeftSLine className="icon -left"/>Back to Homepage</Link>
    </div>
  </Layout>
)

export default NotFound