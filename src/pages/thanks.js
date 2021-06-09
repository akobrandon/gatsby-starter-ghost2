import React from "react"
import { Link } from "gatsby"
import {RiArrowLeftSLine, RiCheckboxCircleLine} from "react-icons/ri"
import Hero from '../components/Hero'
import SEO from "../components/seo"
import Layout from "../components/layout"

const Thanks = () => (
  <Layout className="thanks-page">
    <SEO title="Thank you"/>
    <Hero>
      <h1 className="mb-2 mt-8">Message Received</h1>
      <p className="text-white"><em>Thank you for getting in touch us. We will get back to you shortly.</em></p>
    </Hero>
  </Layout>
)

export default Thanks