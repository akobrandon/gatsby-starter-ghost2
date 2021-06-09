import React from "react"
import {Link} from "gatsby"
import { RiHeart2Line } from "react-icons/ri";
import logo from '../assets/img/logomark.svg';
import facebook from '../assets/img/icons/social/facebook.svg';
import twitter from '../assets/img/icons/social/twitter.svg';
import JoinModal from "../components/joinModal"

const Footer = () => (
  <footer className="py-8 py-md-11 bg-black text-white">
  <div className="container">
    <div className="row">
      <div className="col-12 col-md-4 col-lg-3">
        <img src={logo} alt="Logo" className="footer-brand img-fluid mb-2" />
      </div>
      <div className="col-6 col-md-4 col-lg-3">
        {/* Heading */}
        <h6 className="font-weight-bold text-uppercase text-gray-500">
          Product
        </h6>
        {/* List */}
        <ul className="list-unstyled text-muted mb-6 mb-md-8 mb-lg-0">
          <li className="mb-3">
          <JoinModal variant="link p-0" className="text-white" rel="canonical">Join Now</JoinModal>
          </li>
          <li className="mb-3">
            <Link to="/consumer" rel="canonical">Consumer</Link>
          </li>
          <li className="mb-3">
            <Link to="/enterprise" rel="canonical">Enterprise</Link>
          </li>
          <li className="mb-3">
            <Link to="/pricing" rel="canonical">Pricing</Link>
          </li>
        </ul>
      </div>
      <div className="col-6 col-md-4 col-lg-3">
        <h6 className="font-weight-bold text-uppercase text-gray-500">
          Learn
        </h6>

        {/* List */}
        <ul className="list-unstyled text-muted mb-6 mb-md-8 mb-lg-0">
          <li className="mb-3">
            <Link to="/cryptocurrency-tax-guide" rel="canonical">Cryptocurrency Tax Guide</Link>
          </li>
          <li className="mb-3">
            <Link to="/blog" rel="canonical">Blog</Link>
          </li>
          <li className="mb-3">
            <a rel="noopener" href="https://help.taxbit.com/hc/en-us/categories/360004363274-FAQs" rel="canonical" target="_blank">FAQ</a>
          </li>
          <li className="mb-3">
            <a rel="noopener" href="https://help.taxbit.com/" rel="canonical" target="_blank">Help Center</a>
          </li>
        </ul>
      </div>
      <div className="col-6 col-md-4 offset-md-4 col-lg-3 offset-lg-0">
        {/* Heading */}
        <h6 className="font-weight-bold text-uppercase text-gray-500">
          About
        </h6>
        {/* List */}
        <ul className="list-unstyled text-muted mb-0">
          <li className="mb-3">
            <Link to="/careers" rel="canonical">Careers</Link>
          </li>
          <li className="mb-3">
            <Link to="/press-media" rel="canonical">Press & Media</Link>
          </li>
          <li className="mb-3">
            <Link to="/privacy" rel="canonical">Privacy</Link>
          </li>
          <li className="mb-3">
            <Link to="/terms" rel="canonical">Terms</Link>
          </li>
          <li>
          	<ul className="list-unstyled list-inline list-social mb-6 mb-md-0">
          	  <li className="list-inline-item list-social-item mr-3">
          	    <a rel="canonical" href="https://www.facebook.com/TaxBitCom" target="_blank" className="text-decoration-none">
          	      <img src={facebook} className="list-social-icon" alt="..." />
          	    </a>
          	  </li>
          	  <li className="list-inline-item list-social-item mr-3">
          	    <a rel="canonical" href="https://twitter.com/taxbit" target="_blank" className="text-decoration-none">
          	      <img src={twitter} className="list-social-icon" alt="..." />
          	    </a>
          	  </li>
          	</ul>
          </li>
        </ul>
      </div>
    </div> {/* / .row */}
  </div> {/* / .container */}
</footer>

)

export default Footer