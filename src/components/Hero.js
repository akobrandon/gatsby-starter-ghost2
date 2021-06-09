import React from 'react'
import {Container, Button, Jumbotron} from 'react-bootstrap'

const Hero = (props) => {
  return (
    <Jumbotron className={ `pageHead text-white mb-4 ${ props.className }` } >
      <Container>
        {props.children}
      </Container>
    </Jumbotron>  
  )
}

export default Hero
