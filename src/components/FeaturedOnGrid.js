import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import {Row, Col} from 'react-bootstrap'
const FeaturedOn = ({ gridItems, columnSize, gridClass }) => (
  <Row className={gridClass}>
    {gridItems.map(item => (
      <Col md={columnSize} className="featuredTile d-flex my-2 py-2">
      <div className="card mb-lg-0">
      <small className="text-muted">{item.date}</small>
      <a href={item.link} className="" target="_blank">
      <h4>{item.title}</h4>
      
        <PreviewCompatibleImage imgStyle={{ objectFit: "contain" }} imageInfo={item} />
      </a>  
      </div>
      </Col>
    ))}
  </Row>
)

FeaturedOn.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      link: PropTypes.string,
    })

  ),
}

export default FeaturedOn