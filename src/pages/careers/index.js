import React, {useState} from "react"
import { navigate } from 'gatsby-link'
import { Link, StaticQuery, graphql } from "gatsby"
import Layout from '../../components/layout'
import Hero from '../../components/Hero'
import JobList from '../../components/JobList'
import Helmet from 'react-helmet'
import {Container, Row, Col, Modal, Button, Jumbotron} from 'react-bootstrap'
import url from "auth0-js/src/helper/url"
import trustPilotRating from "../../../static/assets/trustpilot.json"
import EmployeeReviews from '../../components/EmployeeReviews'




const JobIndex = ({data}) => {

  const isBrowser = typeof window !== "undefined"
  if(isBrowser){
    var jobIndex;

    if (window.location.search.indexOf('gh_jid') == 1){
      jobIndex = false;
    } else {
      jobIndex = true;
    }
  }



    return (
      <Layout>
      <Helmet title={`Careers | TaxBit`} >
        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        <script async src="https://boards.greenhouse.io/embed/job_board/js?for=taxbit"></script>
        <script>
        {`
          var isEmpty = document.getElementById('grnhse_app').innerHTML === "";

          setTimeout(function(){
            if(isEmpty){
              Grnhse.Iframe.load();
            }
          }, 1500)`}
        </script>
      </Helmet>
      <Hero className="careers-jumbo">
          <div className="row align-items-center" >
            <div className="offset-1 offset-md-0 col-10 col-md-5 col-lg-6 order-md-2">
              <img src="/assets/rocket.png" className="img-fluid  mw-md-120 mb-6 mb-md-0" alt="..." data-aos="fade-up" data-aos-delay={100} />
            </div>
            <div className="col-12 col-md-7 col-lg-6 order-md-1" data-aos="fade-up" >
              <h1 className="display-3 text-center text-md-left ">
                Pioneer Cryptocurrency Adoption With Us
              </h1>
              <div className="text-center text-md-left">
                <a href="#grnhse_app" className="btn btn-light">See Open Positions</a>
                </div>
        
              <div className="text-center text-md-left">
              </div>
            </div>
          </div>
        </Hero>
        {jobIndex  && 
        
        
          <section className="pt-8 pt-md-11">
          <div className="container">
            <div className="row mb-8">
              <div className="col-12 col-md-9">
                <h2>Why TaxBit?</h2>
                <p>We’re helping <a href="https://www.youtube.com/watch?v=TAT93jaRQDU" target="_blank">drive widespread adoption of cryptocurrency </a>on a global scale. We’re just getting started and every member of the TaxBit team has a key role to play.</p>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-lg-3 col-md-6 mb-6" data-aos="fade-up" data-aos-delay={0}>
                <div className="icon text-primary mb-5">
                  <img alt="trust icon" className="icon" src="/assets/icons/star.svg"/>
                </div>
                <h3>
                  Autonomy and ownership
                </h3>
                <p className="text-muted mb-6 mb-md-0">
                  We believe in letting the best and brightest people take chances, think independently, make mistakes, innovate, and change the world.
                  </p>
              </div>
              <div className="col-12 col-lg-3 col-md-6 mb-6" data-aos="fade-up" data-aos-delay={50}>
                <div className="icon text-primary mb-5">
                  <img alt="trust icon" className="icon" src="/assets/icons/award.svg"/>
                </div>
                <h3>
                  Record breaking success
                </h3>
                <p className="text-muted mb-6 mb-md-0">
                  TaxBit announced <a href="https://www.forbes.com/sites/alexkonrad/2021/03/02/utah-startup-taxbit-raises-100-million-to-solve-cryptocurrency-tax-problem/?ss=venture-capital&sh=7d53a5a1775b" target="_blank">a record-breaking Series A</a> in March 2021, with some of the most respected VCs and Investors in the world.
                </p>
              </div>
               <div className="col-12 col-lg-3 col-md-6 mb-6" data-aos="fade-up" data-aos-delay={100}>
                <div className="icon text-primary mb-5">
                  <img alt="trust icon" className="icon" src="/assets/icons/rocket.svg"/>
                </div>
                <h3>
                  Continual learning and growth
                </h3>
                <p className="text-muted mb-6 mb-md-0 mt-3">
                  You’ll work closely with industry experts, and a world-class team.
                </p>
              </div>
               <div className="col-12 col-lg-3 col-md-6 mb-6" data-aos="fade-up" data-aos-delay={150}>
                <div className="icon text-primary mb-5">
                  <img alt="trust icon" className="icon" src="/assets/icons/experts.svg"/>
                </div>
                <h3>
                 Top ten best places to work
                </h3>
                <p className="text-muted mb-6 mb-md-0">
                  <a href="https://thetechtribune.com/10-best-tech-startups-in-utah/" target="_blank">Rated as a top tech startup</a>, we are passionate about celebrating wins, supporting growth, and fostering an inclusive culture.  
                </p>
              </div>
            </div>
          </div>
       




          

  <div className="bg-gradient oth">
    <Container className="container-spacer space">
      

      <section className="pt-4 py-md-11">
            <div className="row mb-4">
              <div className="col-12 col-md-9 text-white">
                <h2>Our Culture and Values</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-lg-4 col-md-6 mb-6" data-aos="fade-up" data-aos-delay={0}>
              <div className="card bg-lightGradient shadow-lg mb-6">
                  <div className="card-body">
                <div className="icon text-primary mb-5">
                  <img alt="trust icon" className="icon" src="/assets/icons/trust.svg"/>
                </div>
                <h3>
                  We're One Team
                </h3>
                <p className="text-muted mb-6 mb-md-0">
                  We all work and win together! We believe in an inclusive workplace with transparency and accountability.</p>
              </div>
              </div></div>
              <div className="col-12 col-lg-4 col-md-6 mb-6" data-aos="fade-up" data-aos-delay={50}>
              <div className="card bg-lightGradient shadow-lg mb-6">
                  <div className="card-body">
                <div className="icon text-primary mb-5">
                  <img alt="trust icon" className="icon" src="/assets/icons/performance.svg"/>
                </div>
                <h3>
                  Work Hard and Smart
                </h3>
                <p className="text-muted mb-6 mb-md-0">
                  We are a team of self-starters who are always looking for opportunities to make a positive impact at TaxBit.
                  </p>
                  </div></div>
              </div>
               <div className="col-12 col-lg-4 col-md-6 mb-6" data-aos="fade-up" data-aos-delay={100}>
               <div className="card bg-lightGradient shadow-lg mb-6">
                  <div className="card-body">
                <div className="icon text-primary mb-5">
                  <img alt="trust icon" className="icon" src="/assets/icons/support.svg"/>
                </div>
                <h3>
                  Customer-Obsessed
                </h3>
                <p className="text-muted mb-6 mb-md-0 mt-3">
                 We always strive to deliver the best possible customer experience and convert every customer into a TaxBit ambassador.
                </p>
                </div></div>
              </div>
               <div className="col-12 col-lg-4 col-md-6 mb-6" data-aos="fade-up" data-aos-delay={150}>
               <div className="card bg-lightGradient shadow-lg mb-6">
                  <div className="card-body">
                <div className="icon text-primary mb-5">
                  <img alt="trust icon" className="icon" src="/assets/icons/trending-up.svg"/>
                </div>
                <h3>
                 Accelerated Growth
                </h3>
                <p className="text-muted mb-6 mb-md-0">
                  We’re scaling rapidly and that requires complete transparency, open communication, an eye on the future, and endless opportunities for career development.
                  </p>
                  </div></div>
              </div>
              <div className="col-12 col-lg-4 col-md-6 mb-6" data-aos="fade-up" data-aos-delay={200}>
              <div className="card bg-lightGradient shadow-lg mb-6">
                  <div className="card-body">
                <div className="icon text-primary mb-5">
                  <img alt="trust icon" className="icon" src="/assets/icons/optimization.svg"/>
                </div>
                <h3>
                  Goal-Driven
                </h3>
                <p className="text-muted mb-6 mb-md-0 mt-3">
                 We’re successful because we collaborate cross functionally, we are mission and OKR-driven, and we align our goals across the organization.
                 </p>
                 </div></div>
              </div>
              <div className="col-12 col-lg-4 col-md-6 mb-6" data-aos="fade-up" data-aos-delay={250}>
              <div className="card bg-lightGradient shadow-lg mb-6">
                  <div className="card-body">
                <div className="icon text-primary mb-5">
                  <img alt="icon" className="icon" src="/assets/icons/heart.svg"/>
                </div>
                <h3>
                  Diversity and Inclusion
                </h3>
                <p className="text-muted mb-6 mb-md-0 mt-3">
                 We are committed to building an environment where all feel welcomed—inclusive of all genders, sexual orientations, ethnicities, religions, education, race, age, or personal characteristics.
                 </p>
                 </div></div>
              </div>
            </div>
        </section>



    </Container>
  </div>

    <div className="container abt-TB">
      <div className="content my-4 pb-4">
        <div className="row py-3">
          <div className="col-md-9">
            <h2>About TaxBit</h2>
            <p className="text-muted">
              Founded in 2018 by CPAs, tax attorneys, and software developers, TaxBit is establishing an entirely new category of business while enabling widespread adoption of cryptocurrency and other digital assets. Our founders had a vision to simplify crypto taxes by automating the regulatory hurdles of tax compliance. In such a highly regulated space with incredible complexity and market volatility, the need for compliant, consistent, and reliable software has never been greater.
            </p>
            <p className="text-muted">
              Working across multiple market verticals, TaxBit Enterprise, TaxBit Consumer, and soon to launch TaxBit ERP transforms the previously cumbersome experience of cryptocurrency tax reporting and accounting in a way that not only ensures compliance with tax law but also helps consumers optimize their investments and use cryptocurrency.
            </p>
          </div>
          <div className="col-md-3">
            <img width="100%" maxWidth="250px" src="/assets/founders.jpeg" alt="Founders of TaxBit, Justin, Brandon, and Austin Woodward."/>
          </div>
        </div>
      </div>
    </div>

    <div className="p-2 in-the-news">
    <div>
      <Row className="articles">
        <div>
          <a href="https://www.forbes.com/sites/alexkonrad/2021/03/02/utah-startup-taxbit-raises-100-million-to-solve-cryptocurrency-tax-problem/?sh=665e0777775b" target="_blank">
            <img src="/assets/featuredOn/forbes.png" alt="forbes magazine logo" className="forbes"/>
          </a>
        </div>
        <div>
          <a href="https://markets.businessinsider.com/news/stocks/the-irs-selects-taxbit-as-software-partner-1030415254?op=1" target="_blank">
            <img src="/assets/featuredOn/businessInsider.png" alt="business Insider logo" className="businessInsider"/>
          </a>
        </div>
        <div>
          <a href="https://finance.yahoo.com/news/taxbit-raises-100m-bid-crypto-204846448.html?guccounter=1&guce_referrer=aHR0cHM6Ly90YXhiaXQuY29tLw&guce_referrer_sig=AQAAAFgTyfbnuP8WTICwFTSrEsWacQhcZQ24mGj7zH0ryM1mgEhXk1AP7KG_GOeMIi6XqNmqMt123V4yyk_ybLda3SAFLrLNRYC_ls7QML7vTsXWlDh2TlR5YOMKLlE05cso-TBE5T07hsOtpoj-fqG3lBJJ-yuE9XB0Q6eMy7uuE0no" target="_blank">
            <img src="/assets/featuredOn/yahoo.png" alt="yahoo financial logo" className="yahoo"/>
          </a>
        </div>
        <div>
          <a href="https://www.nasdaq.com/articles/taxbit-raises-%24100m-in-bid-to-take-crypto-taxation-software-global-2021-03-02" target="_blank">
            <img src="/assets/featuredOn/nasdaq.png" alt="nasdaq logo" className="nasdaq"/>
          </a>
        </div>
        <div>
          <a href="https://www.entrepreneur.com/article/370396" target="_blank">
            <img src="/assets/featuredOn/entrepreneur.png" alt="entrepreneur magazine logo" className="entrepreneur"/>
          </a>
        </div>
      </Row>
    </div>
  </div>

  <section className="pt-8 pt-md-11">
          <div className="container">
          <h2 className="pb-4">What our Team Thinks</h2>
  <EmployeeReviews length={0} ellipsis={""}/>
  </div>
  </section>

   {/*Benefits and Perks card*/}
  <div className="bg-black">
    <Container className="container-spacer">

        <section className="section">
          <section className="py-8 pt-md-11">
          <div className="container">
            <div className="row mb-8">
              <div className="col-12 col-md-9 text-white">
                <h2>Benefits and Perks</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-lg-3 col-md-6 mb-6" data-aos="fade-up" data-aos-delay={0}>
                <div className="icon text-primary mb-5">
                  <img alt="trust icon" className="icon" src="/assets/icons/activity.svg"/>
                </div>
                <h3 className="text-white">
                  Health & Wellness
                </h3>
                <p className="text-muted mb-6 mb-md-0">
                  Taking care of our team is important, so TaxBit covers 100% of health insurance premiums for all TaxBit employees.
                  </p>
              </div>
              <div className="col-12 col-lg-3 col-md-6 mb-6" data-aos="fade-up" data-aos-delay={50}>
                <div className="icon text-primary mb-5">
                  <img alt="trust icon" className="icon" src="/assets/icons/sun.svg"/>
                </div>
                <h3 className="text-white">
                  Work-Life Balance
                </h3>
                <p className="text-muted mb-6 mb-md-0">
                  We know time off is necessary for our employees’ well-being, so we value a flexible work environment and encourage our employees to embrace a healthy work-life balance.
                  </p>
              </div>
               <div className="col-12 col-lg-3 col-md-6 mb-6" data-aos="fade-up" data-aos-delay={100}>
                <div className="icon text-primary mb-5">
                  <img alt="trust icon" className="icon" src="/assets/icons/heart.svg"/>
                </div>
                <h3 className="text-white">
                  Supportive Team
                </h3>
                <p className="text-muted mb-6 mb-md-0 mt-3">
                  We work hard together, support and help each other cross-functionally, and celebrate our wins with weekly team lunches.
                </p>
              </div>
               <div className="col-12 col-lg-3 col-md-6 mb-6" data-aos="fade-up" data-aos-delay={150}>
                <div className="icon text-primary mb-5">
                  <img alt="trust icon" className="icon" src="/assets/icons/value.svg"/>
                </div>
                <h3 className="text-white">
                 Competitive Compensation
                </h3>
                <p className="text-muted mb-6 mb-md-0">
                  All TaxBit employees are offered stock options, competitive salary, and a benefits package.  
                </p>
              </div>
            </div>
          </div>
        </section>
        </section>
    </Container>
        </div>
  {/*Job app*/}
  <div className="container">
  <div className="row">
    <div className="col-9">
      <div id="grnhse_app"></div>

    </div>
    <div className="col-3 d-none d-md-block">
   <a href="https://www.glassdoor.com/Overview/Working-at-TaxBit-EI_IE3201551.11,17.htm" target="_blank"><img width={200} className="mb-6" src="https://www.glassdoor.com/api/widget/verticalStarRating.htm?e=3201551" /></a><br/>
    <a href="https://thetechtribune.com/10-best-tech-startups-in-utah/" target="_blank" rel="nofollow" ><img width={200} className="mb-6" src="/assets/featuredOn/bestStartups.svg" /></a>
    <a href="https://www.trustpilot.com/review/taxbit.com" className="mb-6" target="_blank">
                    <img width={100} alt="TrustPilot Logo" src={"/assets/icons/stars/logo.png"} className=" mb-3"/><br/>
                    <img width={200} alt="Star Rating" src={"/assets/icons/stars/"+trustPilotRating.score.stars+".svg"} className="mb-5"/><br/>
                    {trustPilotRating.numberOfReviews.total} Total Reviews
                  </a>
        <div className="mt-6">
        <a className="twitter-timeline" data-height={800} href="https://twitter.com/TaxBit?ref_src=twsrc%5Etfw">Tweets by TaxBit</a> 
        </div>

    </div>
    <div className="col-12 text-center">
      <p>Dont see the perfect fit for you?  <Link to="/careers/other">
                  Let us know how you can help!
                </Link></p>
    </div>
  </div>
</div>



        </section>
      }
 {!jobIndex  &&
      <section className="section">
          <div className="container">
            <div className="content my-4 pb-4">
              <div className="row py-3">
                <div className="col-md-10">
                <div id="grnhse_app"></div>

    </div>
    </div>
    </div>
    </div>
    </section>
}

      </Layout>
    )
  }


const ButtonMaker = ({ data }) => {
  const [team, setTeam] = useState(false);

  return(
  <>
        <Button
            onClick={() => setTeam(false)}
            className={`btn-sm btn-secondary mr-3`}
          >All Teams
          </Button>
        {data.map((team, index) => (
           <Button
            onClick={() => setTeam(team.name)}
            className={`btn-sm btn-secondary mr-3 my-3`}
          >{team.name} ({team.count})
          </Button>
        ))}
        <table className="table table-align-middle">
  <thead>
            <tr>
              <th>
                <span className="h6 text-uppercase font-weight-bold">
                  Role
                </span>
              </th>
              <th>
                <span className="h6 text-uppercase font-weight-bold">
                  Team
                </span>
              </th>
              <th>
                <span className="h6 text-uppercase font-weight-bold">
                  Location
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            <JobList team={team} />
          </tbody>
          </table>
  </>
)
}

export function Jobs() {
  return (
    <StaticQuery
      query={graphql`
        query {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { template: { eq: "job-post" } } }
          ) {
            edges {
              node {
                id
                excerpt(pruneLength: 250)
              }
            }
          }
        }`
      }

      render={ data => {
        var array = data.allMarkdownRemark.edges;
        var flags = [], teamCount=[], output = [], l = array.length, i;
        for( i=0; i<l; i++) {
          var teamName = array[i].node.frontmatter.team
          if( !flags[teamName]) {
            flags[teamName] = true;

            var obj = {
              name: teamName,
              count: 0
            }
            teamCount.push(obj);
          }
          teamCount.find(team => team.name == teamName).count++;
        }

        return <ButtonMaker data={teamCount} />
      }
      }
    />
  )
}

export default JobIndex