import React, { Component } from 'react';

import FormField from './FormField';
import EmailField from './EmailField';
import PasswordField from './PasswordField';

class JoinForm extends Component {

  // initialize state to hold validity of form fields
  state = { password: false }

  // higher-order function that returns a state change watch function
  // sets the corresponding state property to true if the form field has no errors
  fieldStateChanged = field => state => this.setState({ [field]: state.errors.length === 0 });


  passwordChanged = this.fieldStateChanged('password');

  render() {
    const { password } = this.state;
    const formValidated = password;

   

    return (
          
         <PasswordField fieldId="password" label="Password" placeholder="Enter Password" onStateChanged={this.passwordChanged} thresholdLength={7} minStrength={3} required />
          
    );
  }

}

export default JoinForm;