import React from 'react'
import { navigate } from 'gatsby-link'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import {Container, Row, Col, Modal, Button, Jumbotron} from 'react-bootstrap'

function encode(data) {
  const formData = new FormData()

  for (const key of Object.keys(data)) {
    formData.append(key, data[key])
  }

  return formData
}

export default class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleAttachment = e => {
    this.setState({ [e.target.name]: e.target.files[0] })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  render() {
    return (
      
            <form
                name={ this.props.name }
                className="card p-3"
                style={{maxWidth:"900px", margin: "0 auto"}}
                method="post"
                action="/careers/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >

              <Row>
              <Col md={6}>
                <input type="hidden" name="form-name" value="file-upload" />
                <div hidden>
                  <label>
                    Don’t fill this out:{' '}
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'name'}>
                    Your Name
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      style={{width: "100%"}}
                      type={'text'}
                      name={'name'}
                      onChange={this.handleChange}
                      id={'name'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field mt-3">
                  <label className="label" htmlFor={'email'}>
                    Your Email
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      style={{width: "100%"}}
                      type={'email'}
                      name={'email'}
                      onChange={this.handleChange}
                      id={'email'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field mt-3">
                  <label className="label" htmlFor={'linkedin'}>
                    LinkedIn <small className="text-muted">(Optional)</small>
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      style={{width: "100%"}}
                      type={'text'}
                      name={'linkedin'}
                      onChange={this.handleChange}
                      id={'linkedin'}
                      required={false}
                    />
                  </div>
                </div>
                </Col>
                <Col md={6}>
                <div className="field">
                  <div className="file">
                    <label className="file-label">
                      <span className="file-cta">
                        <span className="file-label">Cover Letter <small className="text-muted">(Optional)</small></span>
                      </span><br/>
                      <input
                        className="file-input pt-2"
                        type="file"
                        name="cover"
                        onChange={this.handleAttachment}
                      />
                      
                    </label>
                  </div>
                </div>
                <div className="field mt-3">
                  <div className="file">
                    <label className="file-label">
                      <span className="file-cta">
                        <span className="file-label">Resume <small className="text-muted">(Optional)</small></span>
                      </span><br/>
                      <input
                        className="file-input"
                        type="file"
                        name="resume"
                        onChange={this.handleAttachment}
                      />
                      
                    </label>
                  </div>
                </div>
                <div className="field mt-2">
                  <label className="label" htmlFor={'github'}>
                    GitHub <small className="text-muted">(Optional)</small>
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      style={{width: "100%"}}
                      type={'text'}
                      name={'github'}
                      onChange={this.handleChange}
                      id={'github'}
                      required={false}
                    />
                  </div>
                </div>
                </Col>
                <Col md={12}>
                <div className="field mt-3">
                  <label className="label" htmlFor={'other'}>
                    Everything Else <small className="text-muted">(Optional)</small>
                  </label>
                  <div className="control">
                    <textArea
                      className="input"
                      name={'other'}
                      rows={4}
                      style={{"width":"100%", fontSize: "70%"}}
                      onChange={this.handleChange}
                      id={'other'}
                      required={false}
                    />
                  </div>
                </div>
                <div className="field mt-3">
                  <button className="btn-lg btn-primary" type="submit">
                    Apply Now
                  </button>
                </div>
                </Col>
                </Row>
              </form>
    )
  }
}
