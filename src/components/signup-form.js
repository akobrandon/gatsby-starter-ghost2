import React, { useState } from 'react';
import auth0 from 'auth0-js';
import jwtDecode from 'jwt-decode';
import PasswordField from './PasswordField'
import MustContainItem from './MustContainItem';

const isStaging = false


const clientID = isStaging ? "wQvYrm5nSHsXUMLxpe3mcwZlL8QeMRoz" : 'kx8a9s2semLsblStBOX8xeHhbfkgD9AU';
const redirectUri = isStaging ? 'https://staging.taxbit.com/login/callback' : 'https://app.taxbit.com/login/callback';



const webAuth = new auth0.WebAuth({
  overrides: {
    __token_issuer: 'auth.taxbit.com'
  },
  domain: 'auth.taxbit.com',
  clientID: clientID,
  redirectUri: redirectUri,
  responseType: 'token',
  audience: 'taxbit-internal'
})

const SignupForm = ({promoCode}) => {

  const [email, setEmail] = React.useState('')
  const [error, setError] = React.useState('')

  const [password, setPassword] = useState("")

   const [isLoading, setIsLoading] = useState(false)

  const doSignup = (e) => {
    //e.preventDefault()
    setAllValid(false)
    setIsLoading(true)
    setError('')
    webAuth.signupAndAuthorize({
      connection: 'Username-Password-Authentication',
      email,
      password,
      username: email,
      user_metadata: {
        promo_code: promoCode
      },
      redirectUri: redirectUri,
    }, (err, res) => {
      if (err) {
        setAllValid(true)
        setIsLoading(false)
        // Do whatever you want with the error
        console.error(err)
        switch (err.code) {
          case 'invalid_password':
            setError('Invalid Password')
            // Do something with the `err.description.rules` or `err.policy`
            break;
          case 'user_exists':
            setError(err.description)
            break;
        }
      } else {
        const { uuid } = jwtDecode(res.accessToken)
        window.analytics.track('Signed Up');
        webAuth.login({
          realm: 'Username-Password-Authentication',
          email,
          password
        })
      }
    })
  }

  const submitClick = (e) => {
    e.preventDefault()
    validatePassword()
    if(!allValid){
      showRequirements()
    } else {
      doSignup()
    }
  }

  const doGoogle = (e) => {
    e.preventDefault()
    setError('')
    webAuth.authorize({
      connection: 'google-oauth2',
      user_metadata: {
        promo_code: promoCode
      },
      redirectUri: redirectUri,
    }, (err, res) => {
      if (err) {
        console.error(err)
        switch (err.code) {
          case 'invalid_password':
            setError('Invalid Password')
            // Do something with the `err.description.rules` or `err.policy`
            break;
          case 'user_exists':
            setError(err.description)
            break;
        }
      } else {
        /*const { uuid } = jwtDecode(res.accessToken)
        console.log(uuid)
        //window.analytics.identify(uuid);
        window.analytics.track('Signed Up');
        webAuth.login({
          realm: 'Username-Password-Authentication',
          email,
          password
        })*/
      }
    })
  }




  // booleans for password validations
  const [containsUL, setContainsUL] = useState(false) // uppercase letter
  const [containsLL, setContainsLL] = useState(false) // lowercase letter
  const [containsDC, setContainsDC] = useState(true) // double character
  const [containsSC, setContainsSC] = useState(false) // special character
  const [contains8C, setContains8C] = useState(false) // min 8 characters

  // checks all validations are true
  const [allValid, setAllValid] = useState(false)

  // labels and state boolean corresponding to each validation
  const mustContainData = [
    ["An uppercase letter (a-z)", containsUL],
    ["A lowercase letter (A-Z)", containsLL],
    ["A number or special character (!@#$)", containsSC],
    ["At least 8 characters", contains8C],
    ["No more than 2 identical characters in a row (e.g., 'aaa' not allowed", containsDC],
  ]

  const validatePassword = () => {
    // has uppercase letter
    if (password.toLowerCase() != password) setContainsUL(true)
    else setContainsUL(false)

    // has lowercase letter
    if (password.toUpperCase() != password) setContainsLL(true)
    else setContainsLL(false)

    // has number
    if (/(.)\1{2,}/.test(password)) setContainsDC(false)
    else setContainsDC(true)

    // has special character
    if (/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(password) || /\d/.test(password)) setContainsSC(true)
    else setContainsSC(false)

    // has 8 characters
    if (password.length >= 8) setContains8C(true)
    else setContains8C(false)

    // all validations passed
    if (containsUL && containsLL && containsDC && containsSC && contains8C ) setAllValid(true)
    else setAllValid(false)
  }

  const [blurred, setBlur] = useState(false);

  const showRequirements = () => setBlur(true);

  const requirementsStatus = blurred ? '' : 'hiddenForm'

  const loadingStatus = isLoading ? 'Loading' : 'Join Now'
/*
 <button className="mt-4 btn btn-block btn-light googleJoin" onClick={doGoogle}><img src="/assets/icons/google.svg"/>Sign up with Google</button> <br/>
      <p>or</p>
      */

  return (
    <>
      
      <button className="mt-4 btn btn-block btn-light googleJoin" onClick={doGoogle}><img src="/assets/icons/google.svg"/>Sign up with Google</button> <br/>
      <p>or</p>
      

      <div>{error}</div> 
      <form autoComplete="off" onSubmit={submitClick}>
        <input className="mt-5 form-control" required type={'email'} value={email} placeholder={'Email'} onChange={(e) => setEmail(e.target.value)}/>
        <input required type="password" 
              className="mt-4 form-control"
               placeholder={'Password'}
              value={password} 
              onChange={e=>setPassword(e.target.value)} 
              onKeyUp={validatePassword}
              onBlur={showRequirements} />
              <div className={`must-container cfb ${requirementsStatus}`}>
                {mustContainData.map(data=> <MustContainItem data={data}/>)}
              </div>
        <div className="mt-4 text-muted form-label-group"><span><label><input type="checkbox" required className="mr-2" /><span>I agree to the <a href="https://taxbit.com/terms" target="_blank">Terms and Conditions</a>.</span></label></span></div>
        <button className="mt-4 btn btn-block btn-sheen" onClick={validatePassword} type={'submit'} disabled={isLoading}>{loadingStatus}</button>
      </form>

       </>
  );
}

export default SignupForm;