import React, {useState} from "react"
import { Link } from "gatsby"
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../assets/img/logo.svg'
import JoinModal from "../components/joinModal"

const MenuItems = [
  {
    path: "/",
    title: "Home"
  },
  {
    path: "/blog",
    title: "Blog"
  },
]



const Navigation = ({ data }) => {
     const [learnHovered, setLearnHovered] = useState(false);
     const toggleLearn = () => setLearnHovered(!learnHovered);
     const hovered = learnHovered ? 'show' : ''

     const [menuOpen, setmenuOpen] = useState(false);
     const toggleMenu = () => setmenuOpen(!menuOpen);
     const openedMenu = menuOpen ? 'show' : ''

    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
  <div className="container">
    {/* Brand */}

      <Link className="navbar-brand" rel="canonical" to="/"><img src={logo} alt="TaxBit" className="logo" /></Link>

    {/* Toggler */}
    <button className="navbar-toggler" onClick={toggleMenu} type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    {/* Collapse */}
    <div className={`collapse navbar-collapse ${openedMenu}`} id="navbarCollapse">
      {/* Toggler */}
      <button className="navbar-toggler" onClick={toggleMenu} type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fe fe-x" />
      </button>
      {/* Navigation */}
      <ul className="navbar-nav ml-auto">
        <li className="nav-item dropdown">
          <Link className="nav-link" rel="canonical" to="/consumer">
            Consumer
          </Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link" rel="canonical" to="/enterprise">
            Enterprise
          </Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link" rel="canonical" to="/pricing">
            Pricing
          </Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" onClick={toggleLearn} id="navbarDocumentation" data-toggle="dropdown" href="#" aria-haspopup="true" aria-expanded="false">
            Learn
          </a>

          <div className={`dropdown-menu dropdown-menu-md ${hovered}`} aria-labelledby="navbarDocumentation">
            <div className="list-group list-group-flush">
              <Link className="list-group-item" rel="canonical" to="/blog">
                <div className="icon icon-sm text-primary">
                  <i className="fe fe-edit" />
                </div>
                <div className="ml-4">
                  <h6 className="font-weight-bold text-uppercase text-primary mb-0">
                    Blog
                  </h6>
                  <p className="font-size-sm text-gray-700 mb-0">
                    Industry News & Expert Insight
                  </p>
                </div>
              </Link>
              <Link className="list-group-item" rel="canonical" to="/cryptocurrency-tax-guide">
                <div className="icon icon-sm text-primary">
                  <i className="fe fe-map" />
                </div>
                <div className="ml-4">
                  <h6 className="font-weight-bold text-uppercase text-primary mb-0">
                    Tax Guide
                  </h6>
                  <p className="font-size-sm text-gray-700 mb-0">
                    2020 Guide to Crypto Taxes
                  </p>
                </div>
              </Link>
              <a rel="canonical" className="list-group-item" href="https://help.taxbit.com/hc/en-us" target="_blank">
                <div className="icon icon-sm text-primary">
                  <i className="fe fe-book-open" />
                </div>
                <div className="ml-4">
                  <h6 className="font-weight-bold text-uppercase text-primary mb-0">
                    Help Center
                  </h6>
                  <p className="font-size-sm text-gray-700 mb-0">
                    FAQ + Other Helpful Answers
                  </p>
                </div>
              </a>
            </div>
          </div>
        </li>
      </ul>
      {/* Button */}
      <JoinModal variant="primary" className="navbar-btn btn-sm ml-auto">Join</JoinModal>
      <a rel="canonical" className="navbar-btn btn btn-sm btn-link text-white" href="https://app.taxbit.com/login/" target="_blank">
        Sign In
      </a>
    </div>
  </div>
</nav>

    )
  }

export default Navigation
