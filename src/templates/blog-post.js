import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Helmet from 'react-helmet'
import { RiArrowRightLine, RiArrowLeftLine } from "react-icons/ri"
import JoinModal from "../components/joinModal"
import Layout from "../components/layout"
import SEO from '../components/seo';
import Hero from '../components/Hero'

const Pagination = (props) => (
  <div className="pagination -post">
    <ul>
        {(props.previous && props.previous.frontmatter.template === 'blog-post') && (
          <li>
              <Link to={props.previous.frontmatter.slug} rel="prev">
                <p><span className="icon -left"><RiArrowLeftLine/></span> Previous</p>
                <span className="page-title">{props.previous.frontmatter.title}</span>
              </Link>
          </li>
        )}
        {(props.next && props.next.frontmatter.template === 'blog-post') && (
          <li>
            <Link to={props.next.frontmatter.slug} rel="next">
              <p>Next <span className="icon-right"><RiArrowRightLine/></span></p>
              <span className="page-title">{props.next.frontmatter.title}</span>
            </Link>
          </li>
        )}
    </ul>
  </div>
)

const Post = ({ data, pageContext }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, excerpt } = markdownRemark
  const Image = frontmatter.featuredImage ? frontmatter.featuredImage.childImageSharp.fluid : ""
  const { previous, next } = pageContext

  let props = {
    previous,
    next
  }

  const isBrowser = typeof window !== "undefined"
  if(isBrowser){
    window.analytics.track("Viewed Blog Post", {
        BlogTitle: frontmatter.title
    });
  }

  return (
    <Layout className="page">

      <Helmet titleTemplate="%s | TaxBit Blog">
            <title>{`${frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${frontmatter.description}`}
            />
            <meta type="image" name="image" content={`https://taxbit.com${frontmatter.featuredImage.childImageSharp.fluid.src}`}/>
            <meta itemprop="image" content={`https://taxbit.com${frontmatter.featuredImage.childImageSharp.fluid.src}`}/>
            <meta name="twitter:card" content="summary"/>
            <meta name="twitter:title" content={`${frontmatter.title}`}/>
            <meta name="twitter:description" content={`${frontmatter.description}`}/>
            <meta name="twitter:site" content="@taxbit"/>
            <meta name="twitter:creator" content="@taxbit"/>
            <meta name="twitter:image:src" content={`${frontmatter.featuredImage.childImageSharp.fluid.src}`}/>            
            <meta property="og:image" name="og:image" content={`https://taxbit.com${frontmatter.featuredImage.childImageSharp.fluid.src}`}/>
            <meta name="og:title" content={`${frontmatter.title}`}/>
            <meta name="og:description" content={`${frontmatter.description}`}/>
            <meta name="og:type" content="website" />
          </Helmet>

      <section className="bg-cover">
          <div className="bg-cover-fade"></div>
          <div className="container">
          {Image ? (
            <Img 
              fluid={Image} 
              objectFit="cover"
              objectPosition="50% 50%"
              alt={frontmatter.title + ' - Featured image'}
              className="featured-image"
            />
          ) : ""}
          </div>

          {Image ? (
            <Img 
              fluid={Image} 
              objectFit="cover"
              objectPosition="50% 50%"
              alt={frontmatter.title + ' - Featured image'}
              className="featured-image-bg"
            />
          ) : ""}
          

</section>
      <div>
        <section className="pt-8">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-md-10 col-lg-9 col-xl-8">
                {/* Heading */}
                <h1 className="display-4 text-center">
                  {frontmatter.title}
                </h1>
                {/* Text */}
                <p className="lead mb-7 text-center text-muted">
                  {frontmatter.description}
                </p>
                {/* Meta */}
              

                {frontmatter.authorname == "Jeff" && 
                  <div className="authorBox">
                    <img src="/assets/blog/authors/jc.jpg" alt="Jeff Cartwright, Tax Compliance" className="authorImage"/>
                    <p>Jeff Cartwright<br/><small>Director of Compliance</small></p>
                  </div>
                }

                {frontmatter.authorname == "Justin"  && 
                  <div className="row align-items-center py-5 border-top border-bottom"><div className="col-auto">
                    <div className="avatar avatar-lg">
                      <img src="/assets/blog/authors/jw.jpg" alt="..." className="avatar-img rounded-circle" />
                    </div>
                  </div>
                  <div className="col ml-n5">
                    <h6 className="text-uppercase mb-0">
                      Justin Woodward<br/><small>Crypto Tax Attorney</small>
                    </h6>
                  </div>
                  <time className="col-auto font-size-sm text-muted" dateTime="2019-05-20">
                    Published on {frontmatter.date}
                  </time>
                  </div>
                }

                {frontmatter.authorname == "Seth"  && 
                  <div className="row align-items-center py-5 border-top border-bottom"><div className="col-auto">
                    <div className="avatar avatar-lg">
                      <img src="/assets/blog/authors/sw.jpg" alt="..." className="avatar-img rounded-circle" />
                    </div>
                  </div>
                  <div className="col ml-n5">
                    <h6 className="text-uppercase mb-0">
                      Seth Wilks<br/><small>Director of Tax SME</small>
                    </h6>
                  </div>
                  <time className="col-auto font-size-sm text-muted" dateTime="2019-05-20">
                    Published on {frontmatter.date}
                  </time>
                  </div>

                  
                }
                {frontmatter.authorname == "Michelle"  && 
                  <div className="row align-items-center py-5 border-top border-bottom"><div className="col-auto">
                    <div className="avatar avatar-lg">
                      <img src="/assets/blog/authors/mo.png" alt="..." className="avatar-img rounded-circle" />
                    </div>
                  </div>
                  <div className="col ml-n5">
                    <h6 className="text-uppercase mb-0">
                      Michelle O'Conner<br/><small>VP of Marketing</small>
                    </h6>
                  </div>
                  <time className="col-auto font-size-sm text-muted" dateTime="2019-05-20">
                    Published on {frontmatter.date}
                  </time>
                  </div>

                  
                }


                  
                  
               
              </div>
            </div>
          </div>
        </section>
        <section className="py-6 py-md-8">
          <div className="container">
            <div className="row justify-content-center">
              <div className="blogContent col-12 col-md-10 col-lg-9 col-xl-8" dangerouslySetInnerHTML={{ __html: html }}>
                
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
      </div>




      {(previous || next) && (
        <Pagination {...props} />
      )}
    </Layout>
  )
}

export default Post

export const pageQuery = graphql`
  query BlogPostQuery($id: String!) {
    markdownRemark( 
      id: { eq: $id }
    ) {
      id
      html
      excerpt(pruneLength: 148)
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        description
        authorname
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
            fixed(width: 1420, height: 960) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`