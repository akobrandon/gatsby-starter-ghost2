import React from 'react'
import { Link } from 'gatsby'
import {Container, Button} from 'react-bootstrap'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import { navigate } from "gatsby"


const cta = class extends React.Component {
  
  state = {
    email: "",
  }
  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }
  handleSubmit = e => {
    e.preventDefault();
    addToMailchimp(this.state.email)   
    .then(data => {
      localStorage.setItem('email', this.state.email)
      navigate("/invite/user/")
    })
    .catch(() => {
    })
  }
    

  render() {
    return (
     <div className="bg-gradient p-4">
        <Container className="container-spacer">
          <div className="text-center text-white mb-4 pb-3">
            <h3>Start a Free TaxBit Trial Today!</h3>
            <p className="mb-4">Enter your email here to get <strong>10% Off</strong> for a Limited Time</p><br/>
            <form onSubmit={this.handleSubmit}>
              <input type="text" placeholder="Email Address" name="email" type="email" value={this.state.email}
            onChange={this.handleInputChange} />
              <input type="submit" value="Next"/>
            </form>

            
          </div>
        </Container>
      </div>
    )
  }
}

export default cta