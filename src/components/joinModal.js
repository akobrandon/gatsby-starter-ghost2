import React from 'react'
import { Link } from 'gatsby'
import {Modal, Button} from 'react-bootstrap'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import { navigate } from "gatsby"
import logo from '../assets/img/logo.svg'
import SignupForm from "../components/signup-form"

function encode(data) {
  const formData = new FormData()

  for (const key of Object.keys(data)) {
    formData.append(key, data[key])
  }

  return formData
}

const joinModal = class extends React.Component {
  
  constructor(props, context) {
    super(props, context);

    this.state = {
      show: false,
    };

    this.handleShow = () => {
      this.setState({ show: true });
      window.analytics.track("Opened Consumer Join Modal");
    };

    this.handleHide = () => {
      this.setState({ show: false });
    };
  }

  render() {
    return (
     <>
        <Button className={this.props.className} variant={this.props.variant} onClick={this.handleShow}>{this.props.children}</Button>

        <Modal
          show={this.state.show}
          onHide={this.handleHide}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Body className="no-padding">
            <div className="card">
              <button type="button" className="modal-close close text-white" onClick={this.handleHide}  aria-label="Close">
                <span>×</span>
              </button>
              <div className="py-10 w-100 consumerHero text-center card-img-top">
                <div className="shape shape-blur-3 svg-shim text-white">
                  <svg viewBox="50 200 1738 487" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h1420.92s713.43 457.505 0 485.868C707.502 514.231 0 0 0 0z" fill="url(#paint0_linear)"></path><defs><linearGradient id="paint0_linear" x1="0" y1="0" x2="1049.98" y2="912.68" gradientUnits="userSpaceOnUse"><stop stop-color="currentColor" stop-opacity=".075"></stop><stop offset="1" stop-color="currentColor" stop-opacity="0"></stop></linearGradient></defs></svg>
                </div>
                <img src={logo} alt="TaxBit" className="logo" />
                <div className="fadeIntro">
                  CONSUMER
                </div>
              </div>

              <div className="card-body">
                <h2 className="mb-0 font-weight-bold text-center" id="modalSignupVerticalTitle">
                  Start a Free Trial
                </h2>
                {/* Text */}
                <p className="mb-6 text-center text-muted">
                  Free 14 Day Trial
                </p>
                <SignupForm/>
                <p className="mb-0 mt-5 font-size-sm text-center text-muted">
                  Already have an account? <a href="https://app.taxbit.com/" target="_blank">Login</a>
                </p>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </>
    )
  }
}

export default joinModal