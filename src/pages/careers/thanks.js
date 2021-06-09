import React from 'react'
import { Link } from 'gatsby'
import Layout from '../../components/layout'
import {Container, Row, Col, Modal, Button, Jumbotron} from 'react-bootstrap'

export default () => (
    <Layout>
    <Jumbotron className="pageHead text-white mb-0">
            <Container>
              <h1>Thanks!</h1>
              <p>We have received your application!</p><br/>
              <p><Link to="/careers" className="text-white"><i className="icon-left" /> Back to TaxBit Careers</Link></p>
            </Container>
          </Jumbotron>   
  </Layout>
)
