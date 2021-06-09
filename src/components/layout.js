import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {Helmet} from "react-helmet";
import {Popover} from 'react-bootstrap'
import AOS from 'aos'

import Header from "./header"
import Logo from "./logo"
import Navigation from "./navigation";

import "../assets/scss/style.scss"
import "../assets/css/aos.css"
import "../assets/css/feather.css"
import Footer from "./footer";



const query = graphql`
query LayoutQuery {
  site {
    siteMetadata {
      siteTitle: title
    }
  }
}
`


const Layout = ({children, className}) => {

  const { site } = useStaticQuery(query)
  const { siteTitle } = site.siteMetadata

  const isBrowser = typeof window !== "undefined"


  if(isBrowser){
  const script = document.createElement("script");

    AOS.init()
    const popovers = document.querySelectorAll('[data-toggle="popover"]');

    popovers.forEach(popover => {
      new Popover(popover);
    });

    setTimeout(function(){
      script.src = "https://static.zdassets.com/ekr/snippet.js?key=a2f1dead-39ef-4bd8-84ba-0b5fdef3a5cf";
      script.async = true;
      script.id = "ze-snippet"

      document.body.appendChild(script);
    }, 3500)

  

      
   


      

    


  } 

 
  return (
    <div>
    <Helmet title={`The #1 Cryptocurrency Tax Software | TaxBit`}>
    </Helmet>
        <Navigation/>
        {children}
      <Footer/>


      
    </div>
  )
}

export default Layout

