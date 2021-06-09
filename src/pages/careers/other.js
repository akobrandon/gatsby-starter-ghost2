import React, {useState} from "react"
import { navigate } from 'gatsby-link'
import { Link, StaticQuery, graphql } from "gatsby"
import Layout from '../../components/layout'
import Hero from '../../components/Hero'
import JobList from '../../components/JobList'
import Helmet from 'react-helmet'
import JobForm from "../../components/JobForm"
import {Container, Row, Col, Modal, Button, Jumbotron} from 'react-bootstrap'


const JobIndex = ({data}) => {




    return (
      <Layout>
      <Helmet title={`Careers | TaxBit`} />
      <Hero>
          <div className="row align-items-center">
            
            <div className="col-12" data-aos="fade-up">
              <h1 className="display-3 text-center text-md-left">
                Dont see a job listing fit for you?
              </h1>
              <p className="lead text-center text-md-left mb-6 mb-lg-8">
                Tell us a bit about your skillset and how you think you could help TaxBit. 
              </p>
        
              <div className="text-center text-md-left">
              </div>
            </div>
            <div className="col-12 text-black">
          <JobForm name={"Other"} />
            </div>
          </div>
        </Hero>
        <section className="section">

<div className="container my-8">

<h2 className="text-center">Why You Should Apply</h2>
<ul>
<li>TaxBit is enabling the future of money by automating the tax compliance at scale.</li>
<li>TaxBit is backed by Fintech leaders TTV Capital and Valar Ventures, crypto moguls Dragonfly Capital Partners, Collaborative Fund and Winklevoss Capital, and generalist investors Global Founders Capital, Table Management, and Album VC.</li>
<li>TaxBit is partnered with the leading cryptocurrency exchanges such as Gemini, Uphold, CEX.io, BlockFi, and more.</li>
<li>We’re growing! TaxBit has had 10x YOY growth. We believe in our people and provide opportunities for career growth and leadership.</li>
</ul>

</div>

        </section>
      </Layout>
    )
  }



export default JobIndex