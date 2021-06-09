import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const PostCard = ({ data }) => (

  <div className="col-12 col-md-6 col-lg-4 d-flex  mb-6">
    <div className="card mb-lg-0 shadow-light-lg">
      <Link className="card-img-top card-zoom" to={data.fields.slug}>

      <Img 
            fluid={data.frontmatter.featuredImage.childImageSharp.fluid} 
            objectFit="cover"
            objectPosition="50% 50%"
            alt={data.frontmatter.title + ' - Featured image'}
            className="card-img-top"
          />
      </Link>
      <Link to={data.fields.slug} rel="canonical" className="card-body">
        <h3>
          {data.frontmatter.title}
        </h3>
      </Link>
      <a className="card-meta" href="#!">
        <hr className="card-meta-divider" />
        {/*<div className="avatar avatar-sm mr-2">
          <img src="/assets/img/avatars/avatar-2.jpg" alt="..." className="avatar-img rounded-circle" />
        </div>
        <h6 className="text-uppercase text-muted mr-2 mb-0">
          Adolfo Hess
        </h6>*/}
        <p className="h6 text-uppercase text-muted mb-0 ml-auto">
          <time>{data.frontmatter.date}</time>
        </p>
      </a>
    </div>
  </div>

)

export default PostCard