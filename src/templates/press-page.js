import React, {useState} from "react"
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Content, { HTMLContent } from '../components/Content'
import {Container, Button, Jumbotron, Collapse} from 'react-bootstrap'
import PressBlogs from "../components/pressBlogs"
import SEO from "../components/seo"
import FeaturedOnGrid from '../components/FeaturedOnGrid'

export const PressPageTemplate = ({ content, lastEditDate, featuredOn, contentComponent }) => {
  const PageContent = contentComponent || Content
  const featuredOnTop = Array.prototype.slice.call(featuredOn, 0, 6);
  const featuredOnAll = Array.prototype.slice.call(featuredOn, 6);
  const [open, setOpen] = useState(false);

  const expandText = open ? 'Show Less' : 'Show More'

  return (
    <div>
    <Jumbotron className="pageHead text-white mb-4  consumerHero">
      <Container className="mt-8">
        <h1>Press & Media</h1>
      </Container>
    </Jumbotron>
          <Container className="mb-8">
            <h2 className="text-center mt-8 mb-6">In the News</h2>
            <FeaturedOnGrid gridItems={featuredOnTop}  columnSize={6} gridClass="featuredPress" />

         <div  className="text-center mt-8">
               <Button
                       onClick={() => setOpen(!open)}
                       aria-controls="allFeatures"
                       aria-expanded={open}
                       className={`btn-sm ${open}`} 
                     >
                       {expandText}
                     </Button>
                     </div>
                     <Collapse in={open}>
                     <div className="allFeatures">
                       <FeaturedOnGrid gridItems={featuredOnAll}  columnSize={6} gridClass="featuredPress mt-6" />
                       </div>
                     </Collapse>


              <div className="collapse" id="allFeatures">
                <div className="card card-body">
                  
                  </div>
              </div>

            </Container> 
            <section className="bg-light pt-6 pb-8">
            <Container>
            <h2 className="text-center mt-8 mb-6">Press Releases</h2>
            <PressBlogs />
          </Container>      
          </section>

          <section className="bg-gradient pt-6 pb-8">
            <Container className="text-center">
            <h2 className="text-white mt-8 mb-4">Media Kit</h2>
            <p className="text-white mb-4" >A collection of our logo and brand assets.</p><br/>
            <a className="btn-lg btn-light" target="_blank" href="/assets/TaxBit-Media-Kit.zip"> Download Now</a>
          </Container>      
          </section>
       </div>      
  )
}

PressPageTemplate.propTypes = {
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const PressPage = ({ data }) => {
  const { markdownRemark: post } = data
  const isBrowser = typeof window !== "undefined"
  if(isBrowser){
    window.analytics.track("Viewed Press Page");
  }
  


  return (
    <Layout>
      <SEO
        title="Press & Media | TaxBit"
        description=""
      />
      <PressPageTemplate
        contentComponent={HTMLContent}
        content={post.html}
        lastEditDate={post.frontmatter.date}
        featuredOn={post.frontmatter.featuredOn}
      />
    </Layout>
  )
}

PressPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default PressPage

export const PressPageQuery = graphql`
  query PressPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        featuredOn {
          image {
            childImageSharp {
              fluid(maxWidth: 800, quality: 80) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          date(formatString: "MMMM DD, YYYY")
          title
          link
        }
      }
    }
  }
`
