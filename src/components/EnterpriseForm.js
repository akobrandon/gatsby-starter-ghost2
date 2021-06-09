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
                name="Enterprise Form"
                className="card p-3"
                style={{maxWidth:"900px", margin: "0 auto"}}
                method="post"
                action="/thanks"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >
                <div hidden>
                  <label>
                    Don’t fill this out:{' '}
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </div>
                <div className="field">
                  <div className="control">
                    <input
                      className="form-control"
                      style={{width: "100%"}}
                      type={'text'}
                      name={'name'}
                      onChange={this.handleChange}
                      id={'name'}
                      required={true}
                      placeholder="Name"
                    />
                  </div>
                </div>
                <div className="field mt-3">
                  <div className="control">
                    <input
                      className="form-control"
                      style={{width: "100%"}}
                      type={'email'}
                      name={'email'}
                      onChange={this.handleChange}
                      id={'email'}
                      required={true}
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="field mt-3">
                  <div className="control">
                    <input
                      className="form-control"
                      style={{width: "100%"}}
                      type={'text'}
                      name={'company'}
                      onChange={this.handleChange}
                      id={'company'}
                      required={true}
                      placeholder="Company Name"
                    />
                  </div>
                </div>
                <div className="field mt-3">
                  <div className="control">
                    <textArea
                      className="form-control"
                      name={'comments'}
                      rows={4}
                      style={{"width":"100%", fontSize: "70%"}}
                      onChange={this.handleChange}
                      id={'comments'}
                      required={true}
                      placeholder="Please briefly describe your business."
                    />
                  </div>
                </div>
                <div className="field mt-3">
                  <button className="btn btn-block btn-sheen-enterprise" type="submit">
                    Submit
                  </button>
                </div>
              </form>
    )
  }
}
