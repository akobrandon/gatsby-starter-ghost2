import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'
import PreviewCompatibleImage from './PreviewCompatibleImage'
//import Moment from 'react-moment';

import Carousel from 'react-multi-carousel';
import ReactReadMoreReadLess from "react-read-more-read-less";
import {Row, Col} from 'react-bootstrap'

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
    slidesToSlide: 4,
    dots: true
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3,
    dots: true
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2,
    dots: true
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
    dots: false
  }
};

//<Moment fromNow className="float-right">{testimonial.createdAt}</Moment>

const Testimonials = (props) => (
<>
  <Carousel slidesToSlide={2} responsive={responsive} ssr={true} infinite={true} autoPlay={true} arrows={false} autoPlaySpeed={10000}>
    {props.testimonials.map((testimonial, index) => (
      <div key={v4()} className="mb-5 px-3">
          
          <img alt="Star Rating" src={"/assets/icons/stars/"+testimonial.stars+".svg"} className="mb-3 w-50"/><br/>
          <p><strong className="pb-5">{testimonial.title}</strong></p>
          <p><ReactReadMoreReadLess
                charLimit={props.length}
                ellipsis={props.ellipsis}
                readMoreText={"Full Review"}
                readLessText={"Hide Review"}
            >
         {testimonial.text}
         </ReactReadMoreReadLess></p>
          <cite>{testimonial.consumer.displayName}</cite>
        </div>
    ))}
  </Carousel>
  </>
)

export default Testimonials
