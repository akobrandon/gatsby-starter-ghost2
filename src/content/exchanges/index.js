import React from 'react'

import Layout from '../../components/layout'
import Exchanges from '../../components/Exchanges'
import Hero from '../../components/Hero'
import {Container, Row, Col, Modal, Button, Jumbotron} from 'react-bootstrap'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Hero>
              <Row>
                <Col md={7}>
                  <h1>Exchanges</h1>
                </Col>
              </Row>
        </Hero>
            <Container className="blogPosts">
              <Exchanges />
            </Container>
      </Layout>
    )
  }
}
