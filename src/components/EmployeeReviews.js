import React from 'react';
import EmployeeTestimonials from './employeeTestimonials'
import {Row, Col, Carousel} from 'react-bootstrap'
import trustPilotReviews from "../../static/assets/employeeReviews.json"
import trustPilotRating from "../../static/assets/trustpilot.json"

const TrustBox = (props) => {
  return (
<Row
>
<Col md={12}>
<Slider testimonials={trustPilotReviews.reviews} length={props.length} ellipsis={props.ellipsis}/>
</Col>
</Row>
  );
};
export default TrustBox;


class Slider extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null,
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }

  render() {
    const { index, direction } = this.state;
    return (
      <EmployeeTestimonials activeIndex={index}
        direction={direction}
        onSelect={this.handleSelect}
        testimonials={this.props.testimonials}
        length={this.props.length}
        ellipsis={this.props.ellipsis} />
    );
  }
}



/*
const PostMaker = ({ data }) => (
<section className="my-6">
Review
</section>
)

export default function BlogListHome() {
  return (
    <StaticQuery 
      query={graphql`
        query {
          allMarkdownRemark(
            filter: { frontmatter: { template: { eq: "blog-post" } } }
            limit: 3
          ) {
            edges {
              node {
                id
                excerpt(pruneLength: 250)
                fields {
                  slug
                }
                frontmatter {
                  date(formatString: "MMMM DD, YYYY")
                  title
                  featuredImage {
                    childImageSharp {
                      fluid(maxWidth: 540, maxHeight: 360, quality: 80) {
                        ...GatsbyImageSharpFluid
                        ...GatsbyImageSharpFluidLimitPresentationSize
                      }
                    }
                  }
                }
              }
            }
          }
        }`
      }

      render={ data => {
          const posts = data.allMarkdownRemark.edges
            .filter(edge => !!edge.node.frontmatter.date)
            .map(edge =>
              <PostCard key={edge.node.id} data={edge.node} />
          )
          return <PostMaker data={posts} />
        } 
      }
    />
  )
}*/