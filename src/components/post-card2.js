import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Moment from 'react-moment';

const PostCard = ({ data }) => {

  return(
  <div className="col-12 col-md-6 col-lg-4 d-flex  mb-6">
    <div className="card mb-lg-0 shadow-light-lg">
      <Link className="card-img-top card-zoom" to={data.slug}>

      <img 
            src
            ={data.feature_image} 
            objectFit="cover"
            objectPosition="50% 50%"
            alt={data.title + ' - Featured image'}
            className="card-img-top"
          />
      </Link>
      <Link to={data.slug} rel="canonical" className="card-body">
        <h3>
          {data.title}
        </h3>
      </Link>
      <Link className="card-meta text-muted mt-auto" to={data.slug}>
        <hr className="card-meta-divider" />
        
          <span className="float-left">{ data.primary_author.name }</span>
        <p className="mb-0 ml-auto">
          <Moment fromNow>{data.published_at}</Moment>
        </p>
      </Link>
    </div>
  </div>

)
}

export default PostCard