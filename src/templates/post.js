import React from "react"
import PropTypes from 'prop-types'
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Helmet from 'react-helmet'
import { RiArrowRightLine, RiArrowLeftLine } from "react-icons/ri"
import JoinModal from "../components/joinModal"
import Layout from "../components/layout"
import SEO from '../components/seo';
import Hero from '../components/Hero';
import Moment from 'react-moment';
import { MetaData } from '../components/common/meta'

const Post = ({ data, location }) => {
    const post = data.ghostPost

  const isBrowser = typeof window !== "undefined"
  if(isBrowser){
    window.analytics.track("Viewed Blog Post", {
        //BlogTitle: post.title
    });
  }

  return (
    <MetaData
        data={data}
        location={location}
        type="article"
    />
    <Layout className="page">
      <section className="bg-cover">
          <div className="bg-cover-fade"></div>
          <div className="container">
        
            <img 
              src={post.feature_image} 
              objectFit="cover"
              objectPosition="50% 50%"
              alt={post.title + ' - Featured image'}
              className="featured-image"
            />

          </div>
          <img src={post.feature_image} objectFit="cover"
              objectPosition="50% 50%"
              alt={post.title + ' - Featured image'}
               className="featured-image-bg" />
          

</section>
      <div>
        <section className="pt-8">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-md-10 col-lg-9 col-xl-8">
                {/* Heading */}
                <p className="text-center">
                 <time className="ml-auto mt-5 font-size-sm text-muted" dateTime="2019-05-20">
                    Published  <Moment fromNow>{post.published_at}</Moment>
                  </time>
                </p>
                <h1 className="display-4 text-center">
                  {post.title}
                </h1>
                {/* Text */}
                <p className="lead mb-7 text-center text-muted">
                  {post.description}
                </p>
                <div className="row align-items-center py-5 border-top border-bottom">

            {post.authors.length > 0 &&
                    <div className="col-auto">
                        <div className="avatar avatar-lg float-left">
                          <img src={post.authors[0].profile_image} alt={post.authors[0].name} className="avatar-img rounded-circle" />
                        </div>
                        <h6 className="text-uppercase ml-8">
                          {post.authors[0].name}<br/><small>{post.authors[0].bio}</small>
                        </h6>
                    </div>

            }

                {post.authors.length > 1 &&
                    <div className="col-auto text-right ml-auto">
                        <div className="avatar avatar-lg float-right">
                          <img src={post.authors[1].profile_image} alt={post.authors[1].name} className="avatar-img rounded-circle" />
                        </div>
                        <h6 className="text-uppercase mr-8 text-right">
                          {post.authors[1].name}<br/><small>{post.authors[1].bio}</small>
                        </h6>
                    </div>
            }



                 
                </div>
        


                  
                  
               
              </div>
            </div>
          </div>
        </section>
        <section className="py-6 py-md-8">
          <div className="container">
            <div className="row justify-content-center">
              <div className="blogContent col-12 col-md-10 col-lg-9 col-xl-8" dangerouslySetInnerHTML={{ __html: post.html }}>
                
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



    </Layout>
  )
}

Post.propTypes = {
    data: PropTypes.shape({
        ghostPost: PropTypes.shape({
            codeinjection_styles: PropTypes.object,
            title: PropTypes.string.isRequired,
            html: PropTypes.string.isRequired,
            feature_image: PropTypes.string,
        }).isRequired,
    }).isRequired,
    location: PropTypes.object.isRequired,
}

export default Post

export const postQuery = graphql`
    query($slug: String!) {
        ghostPost(slug: { eq: $slug }) {
            ...GhostPostFields
        }
    }
`