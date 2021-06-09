import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Content, { HTMLContent } from '../components/Content'
import {Container, Button, Jumbotron, Row, Col, Accordion, Card} from 'react-bootstrap'
import Hero from '../components/Hero'
import JoinModal from "../components/joinModal"
import Helmet from 'react-helmet'
import FeaturedOnGrid from '../components/FeaturedOnGrid'

export const TaxGuideTemplate = ({ content, lastEditDate, contentComponent }) => {
  const PageContent = contentComponent || Content
  const isBrowser = typeof window !== "undefined"
  if(isBrowser){
    window.analytics.track("Viewed Tax Guide");
  }
  return (
   <div>
      <Helmet>
        <title>A Complete 2020 Guide to Cryptocurrency Taxes | TaxBit</title>
        <meta name="description" content="Let us help you understand the tax requirements for cryptocurrency in 2020 with a complete guide that covers every aspect of the process." />
      </Helmet>
      <Hero>
        <h1 className="mb-2 mt-8">The Most Trusted 2020 Guide to Cryptocurrency Taxes</h1>
        <p className="text-white"><em>Produced by Cryptocurrency Tax Attorneys and Blockchain CPA’s</em></p>
      </Hero>
      <Container className="taxGuide">
      
      <p><strong></strong></p>
        
       <div className="colorDivider"></div>
  <h2>Overview</h2>
  <p>
    TaxBit has helped thousands of taxpayers automate and file
    their cryptocurrency taxes. Although the IRS released its first guidance
    specifying that cryptocurrency is taxed as property in 2014, the past two years
    has brought increased IRS enforcement and audits. The
    IRS typically audits two years in arrears, meaning they are currently auditing the 2018 tax year. Notably, the{" "}
    <a
      target="_blank"
      href="https://taxbit.com/blog/2019-12-06-irs-releases-new-tax-form-asking-taxpayers-about-cryptocurrency-activity/"
    >
      IRS released a question on the newly released 2020 tax forms that asks
      every taxpayer “[a]t any time during 2020, did you sell, send, exchange,
      or otherwise acquire any financial interest in any virtual currency.”
    </a>
  </p>
  <p>
    With the IRS sending out tens of thousands of audits for the 2017 and 2018 tax years,
    there will be increased enforcement
    going forward. Whether you only need to file crypto taxes for this upcoming
    year, or if you need to amend previous tax years,{" "}
    <a target="_blank" href="https://taxbit.com/pricing/">
      TaxBit provides all historical tax forms for its users included in its
      Plus and Pro plans.
    </a>{" "}
    TaxBit’s team of tax experts and software developers are here to make the
    process simple and easy for taxpayers to file their cryptocurrency taxes.
  </p>
  <div className="colorDivider"></div>
  <h2>What is the Definition of Cryptocurrency?</h2>
  <p>The IRS’ Definition of Cryptocurrency is,</p>
  <blockquote class="blockquote">
    <a target="_blank" href="https://www.irs.gov/pub/irs-drop/rr-19-24.pdf">
      “Virtual currency is a digital representation of value that functions as a
      medium of exchange, a unit of account, and a store of value other than a
      representation of the United States dollar or a foreign currency.”
    </a>
  </blockquote>
  <p>
    Essentially, the IRS has a broad view of what classifies as virtual
    currency.
  </p>
  <br />
  <div class="alert alert-info" role="alert">
    <h4 class="alert-heading">How We Can Help</h4>
    <p>
      TaxBit supports over 4,000 different coins and assets and continues to add
      more upon user request.
    </p>
  </div>
  <div className="colorDivider"></div>
  <h2>How is Cryptocurrency Taxed?</h2>
  <p>
    In 2014, the IRS issued{" "}
    <a target="_blank" href="https://www.irs.gov/pub/irs-drop/n-14-21.pdf">
      Notice 2014-21
    </a>
    , clarifying that virtual currency is treated as property for tax purposes.{" "}
    <a
      target="_blank"
      href="https://taxbit.com/blog/2019-11-18-understanding-irs-8949-cryptocurrency-tax-form/"
    >
      This means that cryptocurrency is taxed as a capital asset and every
      taxable event must be reported on an IRS 8949 cryptocurrency tax form.
    </a>
  </p>
  <p>
    Beginning in 2020, the IRS added a new question to Form 1040 that asks
    taxpayers “[a]t any time during 2020, did you receive, sell, send, exchange,
    or otherwise acquire any financial interest in any virtual currency?”
  </p>
  <img width="100%" src="../assets/irs_new_form.png" alt="" /><br/>
  <p>
    If a taxpayer answers “Yes” to the new question then the IRS will look to
    see if the taxpayer filed an IRS 8949 capital gain/loss report for virtual
    currency transactions. If the taxpayer fails to report their cryptocurrency
    taxes then the IRS can now prove intentional disregard for knowingly failing
    to report cryptocurrency taxes.&nbsp;
  </p>
  <p>
    Fortunately, similar to the sale of stock,{" "}
    <a target="_blank" href="https://www.law.cornell.edu/uscode/text/26/1211">
      26 U.S. Code § 1211
    </a>{" "}
    of the Internal Revenue Code provides relief in the form of a deduction for
    losses on capital assets.{" "}
    <a
      target="_blank"
      href="https://taxbit.com/blog/2019-10-09-how-to-report-crypto-losses/"
    >
      If taxpayers had net capital losses on their cryptocurrency for the year
      then they may be eligible for an increased tax refund.
    </a>
  </p>
  <div className="colorDivider"></div>
  <h2>Non-Taxable Events</h2>
  <p>
    Cryptocurrency is taxed as property, meaning you must report gains/losses
    when disposing of an asset. Importantly, transferring assets between
    exchanges does not constitute a disposition of an asset and should not be
    reported as a taxable transaction. Similarly, buying cryptocurrency is not a
    taxable event, rather it sets the taxpayer’s cost basis in the asset.
    Gifting cryptocurrency is also not a taxable event.{" "}
    <a target="_blank" href="https://www.irs.gov/pub/irs-pdf/p559.pdf#page=24">
      (excluding large gifts that may trigger other tax obligations).
    </a>
    &nbsp;
  </p>
  <div className="colorDivider"></div>
  <h2>Cost Basis Methods</h2>
  <p>
    <a
      target="_blank"
      href="https://taxbit.com/blog/2019-12-13-proper-cryptocurrency-cost-basis-assignment-methods/"
    >
      After much anticipation, the IRS issued guidance on acceptable cost basis
      methods for calculating gains/losses on cryptocurrency.
    </a>{" "}
  </p>
  <p>
    Prior to the IRS’ guidance there were numerous potential cost basis
    assignment methods taxpayers were choosing from including:
  </p>
  <ul>
    <li>First in First Out (FIFO)</li>
    <li>Last in First Out (LIFO)</li>
    <li>Highest Cost</li>
    <li>Lowest Cost</li>
    <li>Average Cost</li>
    <li>Specific Identification</li>
  </ul>
  <p>
    However, the IRS’ new guidance specifically allows for only two cost basis
    assignment methods:
  </p>
  <ol>
    <li>First in First Out (FIFO)</li>
    <li>Specific identification</li>
  </ol>
  <img width="100%" src="../assets/fifo.png" />
  <p>
    Pursuant to FIFO,
    the first assets that you purchased will be the first assets that will be
    disposed of. In the example above using FIFO for the disposition of 2 BTC
    would result in taxable gains of $7,000.
  </p>
  <img width="100%" src="../assets/specific-id.png" />
  <p>
    Pursuant to the IRS’ recent revenue ruling, taxpayers may also use specific
    identification to report cryptocurrency taxes. Specific identification
    allows taxpayers to select which assets they are disposing of. For example,
    in the previous example the taxpayer is able to specifically identify that
    they are disposing of assets that were acquired on July 1 and September 1.
    Using the same example of disposing of 2 BTC above, using Specific ID would
    result in a $2,000 net capital loss as opposed to a $7,000 net capital gain.
  </p>
  <p>
    Using Specific ID to Select which assets you are disposing of can optimize
    your taxes. For example, it is typically better to dispose of assets that
    have a higher cost basis. Disposing of assets that have a higher cost basis
    will result in a lower overall tax liability. Notably, the IRS has indicated that Specific Identification should be applied on a "by exchange" basis. It is arguably not allowed to use specific identification through universally pooling assets. TaxBit provides support for Specific Identification by exchange in order to legally maximize users' taxes and to reconcile to any exchange issued 1099's.

    TaxBit automates the process
    by specifically identifying the assets by exchange with the highest cost basis for
    disposition and therefore lowering realized taxable gains.
  </p>
  <p>
    Taxpayers could arguably still file using specific identification, but then
    choose to allocate their asset’s basis based according to LIFO or another
    tax calculation method. TaxBit takes the position that using Specific ID and
    allocating according to LIFO makes little sense because if a taxpayer uses
    Specific ID then it almost always makes more sense to dispose of the highest
    cost basis asset.
  </p>
  <div className="colorDivider"></div>
  <h2>Cryptocurrency Fees & Cost Basis</h2>
  <p>
    Prior to the Tax Cuts and Jobs Act (TCJA) certain investment-related
    expenses were eligible for itemized deductions.{" "}
    <strong>
      For tax years 2018 to 2025 these deductions have been eliminated.
    </strong>{" "}
    However, cryptocurrency traders can still save money on their transactions
    fees by adding the cost of fees into their cost basis on the acquisition of
    crypto and deducting fees from the proceeds from the disposition of the
    asset.
  </p>
  <p>
    Prior to 2018, if taxpayers chose to claim the itemized deduction and deduct
    cryptocurrency exchange fees as investment related expenses, then they would
    not be eligible to adjust their cost basis for fees.
  </p>
  <p>
    <strong>
      However, in 2020, with the investment-related expenses itemized deduction
      eliminated, taxpayers can account for all fees the same way by adding them
      into the acquisition and disposition costs.
    </strong>
  </p>

  <h3>Example of Fees when Purchasing Cryptocurrency</h3>
  <p>
    If a taxpayer buys $10,000 worth of Bitcoin and pays $500 in fees, then the
    IRS allows you to report a cost basis of $10,500. Adjusting for fees allows
    a lesser realized taxable gain.
  </p>
  <h3>Example of Fees when Selling Cryptocurrency</h3>
  <p>
    This same example applies inversely for fees from proceeds from selling
    cryptocurrency.
  </p>
  <p className="text-centered">
    <strong>
      If the taxpayer sells their Bitcoin for $11,000 and pays $500 in fees,
      then the IRS allows the taxpayer to deduct the $500 from the proceed
      amount. In this example the taxpayer would report proceeds of $10,500 from
      selling the crypto.
    </strong>
  </p>
  <p>
    In the above example, if fees were not accounted for then the taxpayer would
    have a cost basis of $10,000 in the Bitcoin and proceeds of $11,000. This
    would result in a $1,000 taxable gain. However, if fees are accounted for
    then the taxpayer would have a cost basis of $10,500 and proceeds of
    $10,500, leaving them with no taxable gains.
  </p>
  <div class="alert alert-info" role="alert">
    <h4 class="alert-heading">How We Can Help</h4>
    <p>
      Cryptocurrency traders often make hundreds, if not thousands of trades a
      year. Properly accounting for fees on every transaction can be nearly
      impossible to do manually. Fortunately,{" "}
      <a href="https://taxbit.com" target="_blank">
        TaxBit
      </a>{" "}
      automatically accounts for exchange fees.
    </p>
  </div>
  <div className="colorDivider"></div>
  <h2>Tax Rate (long-term versus short-term capital gains)</h2>
  <p>
    The United States distinguishes between{" "}
    <strong>long-term and short-term capital gains.</strong> If you hold a
    particular cryptocurrency for one year or less your transaction will
    constitute short-term capital gains. Short-term capital gains are added to
    your income and taxed at your ordinary income tax rate.
  </p>
  <h3>Long-Term Capital Gains</h3>
  <p>
    If you held a particular cryptocurrency for more than one year then you are
    eligible for tax preferred long-term capital gains. In 2018 the capital
    gains tax rates are either 0%, 15% or 20% for assets held for more than a
    year. Capital gains tax rates on assets held for less than a year correspond
    to ordinary income tax brackets (10%, 12%, 22%, 24%, 32%, 35% or 37%).
  </p>
  <p>
    <strong>For single filers you will pay:</strong>
  </p>
  <ul>
    <li>0% in long-term capital gains if your income is $0-$39,375</li>
    <li>15% if your income is $39,376-$434,550</li>
    <li>20% if your income is $434,551 or more</li>
  </ul>
  <p>
    <strong>For married filers filing jointly you will pay:</strong>
  </p>
  <ul>
    <li>0% if your income $0-$78,750</li>
    <li>15% if your income is $78,751-$488,850</li>
    <li>20% if your income is $488,851 or more.</li>
  </ul>
  <div className="colorDivider"></div>
  <h2>Capital Loss Deduction/Carry Forward</h2>
  <p>
    The difference between your capital gains and losses is called your “net
    capital gain.”{" "}
    <a
      target="_blank"
      href="https://taxbit.com/blog/2019-10-09-how-to-report-crypto-losses/"
    >
      if your losses exceed your gains, you can deduct the difference on your
      tax return, up to $3,000 in losses per year. If you have net capital
      losses for the year that exceed the deductible amount then the IRS allows
      you to carry the excess into the next year, allowing you to deduct it on
      that year’s return.
    </a>
  </p>

  <div className="colorDivider"></div>
  <h2>Other Cryptocurrency Events</h2>
  <Accordion>
    <Card>
      <Card.Header>
        <Accordion.Toggle
          as={Button}
          className="accordionHead"
          variant="link"
          eventKey="0"
        >
          <h3>Mining/Staking</h3>
          <h4 className="icon-plus float-right pt-2"></h4>
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey="0">
        <Card.Body>
          <h4>A) Mining Income</h4>
          <p>
            <a
              target="_blank"
              href="https://taxbit.com/blog/2019-10-21-irs-guidance-on-cryptocurrency-mining-taxes/"
            >
              Mining cryptocurrency has a unique problem of creating multiple
              tax implications that must be reported on separate forms. Fear
              not, TaxBit’s cryptocurrency tax software clears up this confusing
              paradox and ensures proper capital gain/loss and ordinary income
              tax reporting.
            </a>
          </p>
          <p>
            Pursuant to{" "}
            <a
              target="_blank"
              href="https://www.irs.gov/pub/irs-drop/n-14-21.pdf"
            >
              IRS Notice 2014-21
            </a>
            , when a taxpayer successfully “mines” virtual currency, the fair
            market value of the virtual currency as of the date of{" "}
            <a
              target="_blank"
              href="https://www.irs.gov/forms-pubs/about-publication-525"
            >
              receipt is includible in gross income
            </a>
            . This means that successfully mining cryptocurrency creates a
            taxable event and the value of the mined coins must be included in
            the taxpayer’s gross income at the time it is received.
          </p>
          <p>
            Selling mined cryptocurrency also creates a second taxable event.
            The value of the cryptocurrency at the time it is mined (the amount
            included as ordinary income) becomes a taxpayers cost basis in the
            capital asset. When a taxpayer sells mined crypto then the amount
            received will be reported as proceeds and will be offset against the
            taxpayer’s cost basis in the asset. If the value of the crypto is
            higher at the time of the sale, then the taxpayer has a capital
            gain. If the value is lower then the taxpayer will have a capital
            loss. Every sale or trade of mined crypto must be reported on an IRS
            8949 cryptocurrency tax form.
          </p>
          <h4>B) Mining Deductions</h4>
          <p>
            If you mine cryptocurrency as a trade or business, then you may be
            eligible for certain deductions to lessen your tax liability.{" "}
            <a
              target="_blank"
              href="https://www.law.cornell.edu/uscode/text/26/162"
            >
              § 162 of the Internal Revenue Code
            </a>{" "}
            states:
          </p>
          <blockquote class="blockquote">
            “[t]here shall be allowed as a deduction all the ordinary and
            necessary expenses paid or incurred during the taxable year in
            carrying on any trade or business.”
          </blockquote>
          <p>Miners may deduct certain expenses from their mining income.</p>
          <p>
            <a
              target="_blank"
              href="https://digiconomist.net/bitcoin-energy-consumption"
            >
              Some estimates place the annualized global mining revenues at
              ~$5.6 billion and global mining expenses at $3.6 billion.
            </a>{" "}
            These statistics show that expenses may account for greater than 50%
            of the income received from mining.
          </p>
          <p>
            Some frequent expenses that may be eligible for the trade or
            business expense deduction include:
          </p>
          <ul>
            <li>Mining equipment</li>
            <li>Electricity costs</li>
            <li>Repairs</li>
            <li>Rented space used to operate the equipment</li>
          </ul>
          <p>
            <em>(i) Equipment</em>
          </p>
          <p>
            Miners may deduct the cost of their mining equipment from their
            ordinary mining income. If the mining equipment exceeds $1 million
            in costs the taxpayer may need to use the{" "}
            <a
              target="_blank"
              href="https://www.investopedia.com/terms/m/macrs.asp"
            >
              modified accelerated cost recovery system (MACRS)
            </a>{" "}
            to determine how to depreciate the equipment for tax purposes.
          </p>
          <p>
            <em>(ii) Electricity Costs</em>
          </p>
          <p>
            A large cost to mining cryptocurrency is the price of electricity.
            The energy used worldwide to mine cryptocurrency is{" "}
            <a
              target="_blank"
              href="https://digiconomist.net/bitcoin-energy-consumption"
            >
              equivalent to the energy consumption of the country of Australia
            </a>
            . Electricity costs are an expense that if properly documented may
            be eligible for the trade or business deduction. To properly
            document your electricity costs you should track the amount of
            electricity that is used solely for mining. If you are mining from
            your residence then you will need to track and allocate the amount
            that is attributable to mining. Therefore, if you mine from your
            residence then you should use a seperate meter to ensure you can
            properly allocate the energy consumption from mining. It is
            important to track the electricity costs from mining because you may
            only deduct business expenses are not eligible to deduct the
            electricity costs that you used for your residence.
          </p>
          <p>
            <em>(iii) Repairs</em>
          </p>
          <p>
            If your mining equipment required repairs during the year then the
            repair expense may be eligible for the trade or business deduction.
            You should save receipts to validate the expenses in the event of an
            audit.
          </p>
          <p>
            <em>(iv) Rented Space</em>
          </p>
          <p>
            If you rent a space to hold and run your mining equipment then you
            may be eligible to deduct the rental costs as an expense. If your
            mining equipment is located at your residence then this will be
            treated similar to a home office and may be more difficult to deduct
            the expenses.{" "}
            <a
              target="_blank"
              href="https://www.irs.gov/businesses/small-businesses-self-employed/home-office-deduction"
            >
              See the rules applicable to the home office deduction to see if
              you are eligible to deduct costs for the business use of your
              home.
            </a>
          </p>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  </Accordion>
  <Accordion>
    <Card>
      <Card.Header>
        <Accordion.Toggle
          as={Button}
          className="accordionHead"
          variant="link"
          eventKey="0"
        >
          <h3>Forks/Airdrops</h3>
          <h4 className="icon-plus float-right pt-2"></h4>
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey="0">
        <Card.Body>
          <p>
            The IRS takes the position that hard forks that result in an airdrop
            of a new currency are akin to a dividend for tax purposes. Put
            simply, a hard fork occurs when a distributed ledger undergoes a
            protocol change resulting in a permanent diversion of the continuing
            historical ledger through a new airdropped token.
          </p>
          <p>
            <a
              target="_blank"
              href="https://taxbit.com/blog/2019-12-09-phantom-tax-consequences-on-receipt-of-digital-assets-by-airdrop/"
            >
              The IRS takes the position that you are taxed on the fair market
              value of the airdrops when you have “dominion and control” of
              airdropped tokens.
            </a>{" "}
            A taxpayer has dominion and control when an exchange issues the
            airdropped token into the taxpayer’s account.
          </p>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  </Accordion>

  <div className="colorDivider"></div>
  <h2>IRS Enforcement of Cryptocurrency</h2>
  <p>
    <a
      target="_blank"
      href="https://taxbit.com/blog/2019-12-06-irs-releases-new-tax-form-asking-taxpayers-about-cryptocurrency-activity/"
    >
      All taxpayers are required to attest
    </a>{" "}
    to whether,
  </p>
  <blockquote class="blockquote">
    “[a]t any time during 2020, did you receive, sell, send, exchange, or
    otherwise acquire any financial interest in any virtual currency?”
  </blockquote>
  <p>
    Additionally, exchanges are required to issue their users 1099 tax forms
    that show that crypto activity occurred on the platform.
  </p>
  <p>
    If a taxpayer checks “yes” to the cryptocurrency question then the IRS will
    look to see if the taxpayer filed an IRS 8949 tax form representing their
    cryptocurrency taxable events. If a taxpayer answers “no” dishonestly to the
    question and then is subsequently issued a 1099 tax form from an exchange,
    then the IRS can now prove “intentional tax evasion.” It is recommended to
    answer honestly.
  </p>
  <p>
    TaxBit is experienced in resolving cryptocurrency audits.{" "}
    <a
      target="_blank"
      href="https://taxbit.com/blog/2020-01-13-responding-to-a-cryptocurrency-irs-cp2000-letter/"
    >
      The IRS is aggressive in sending taxpayers CP2000 notices if the taxpayer
      was issued a 1099, but failed to file their cryptocurrency taxes.
    </a>
  </p>
  <br />

  <div class="alert alert-info" role="alert">
    <h4 class="alert-heading">How We Can Help</h4>
    <p>
      TaxBit’s tax professionals stand ready to help users respond to CP2000
      (and other IRS letters) based on the taxpayers cryptocurrency activity.
    </p>
  </div>

  <div className="colorDivider"></div>
  <h2>CPA Designed Audit Trail</h2>

  <div className="row">
    <div className="col-md-5">
      <p>
        Many cryptocurrency tax softwares provide a taxpayer with tax forms with
        no information regarding how the users’ gains/losses were calculated.
        Because of the lack of an audit trail, it can be difficult to withstand an IRS audit without a trusted provider.
      </p>
    </div>
    <div className="col-md-7">
      <video
        width="100%"
        src="/assets/auditTrailLoop.mp4"
        muted
        loop
        playsInline
        preload="auto"
        autoPlay
      ></video>
    </div>
  </div>
  <br />
  <div class="alert alert-info" role="alert">
    <h4 class="alert-heading">How We Can Help</h4>
    <p>
      TaxBit was founded by tax attorneys and CPA’s and therefore knows the
      importance of proving calculations in the event of an audit. TaxBit
      provides a CPA designed immutable audit trail that allows a CPA (or IRS
      investigator in the event of audit) to drill down into any gain or loss
      and see exactly how the taxes were calculated. Taxpayers can feel
      comfortable knowing that they have visibility into how their taxes were
      calculated and can prove their calculations in the event of an audit.
    </p>
    <p>
      TaxBit prides itself on being the most accurate cryptocurrency tax
      software. TaxBit strongly believes that tax accuracy and auditability is
      of the most important factor in choosing a cryptocurrency tax solution.
    </p>
  </div>
  <div className="colorDivider"></div>
  <h2>Foreign Reporting Requirements</h2>
  <p>
    There has been much debate whether assets held on a foreign virtual currency
    exchange are required to be reported on FinCEN Form 114, Report of Foreign
    Bank and Financial Accounts (FBAR).&nbsp;
  </p>
  <p>
    The AICPA Virtual Currency Task Force{" "}
    <a
      target="_blank"
      href="https://www.journalofaccountancy.com/news/2019/jun/virtual-currency-not-fbar-reportable-201921479.html"
    >
      reached out to Treasury’s Financial Crime Enforcement Network (FinCEN)
    </a>{" "}
    to answer whether cryptocurrency on offshore exchanges requires FBAR
    reporting. FinCEN responded that regulations (31 C.F.R. §1010.350(c)) do not
    define virtual currency held in an offshore account as a type of reportable
    account. Therefore, cryptocurrency does not need to be reporting on an FBAR
    as of now. That being said, FinCEN has indicated that in the future it may expand FBAR reporting to foreign cryptocurrency accounts.
  </p>
  <div className="colorDivider"></div>
  <h2>Tax Forms from Exchanges (1099-K/1099-B)</h2>
  <h3>1099-K</h3>
  <p>
    A few cryptocurrency exchanges have issued 1099-K’s, which is an
    informational return that sums up the total value a user has received
    throughout the year. This form leads to reporting of income when no income
    was actually generated on an exchange.
  </p>
  <p>
    <a
      target="_blank"
      href="https://taxbit.com/blog/2020-01-13-responding-to-a-cryptocurrency-irs-cp2000-letter/"
    >
      If you received a 1099-K from a cryptocurrency exchange then you also
      likely received (or will receive) an IRS CP2000 letter for unreported
      income two years later.
    </a>
  </p>
  <p>
    1099-K’s issued by some exchanges report only the total value exchanged and
    fail to include proper adjustments for cost basis.
  </p>
  <p>
    For example, if a user purchases $100,000 of cryptocurrency and then sells
    it a month later for $90,000, then both the user and the IRS will receive a
    1099-K form showing income received of $90,000. Form 1099-K is intended for
    users who generate income on a platform, such as Ebay and Etsy
    sellers.&nbsp;
  </p>
  <p>
    Most taxpayers correctly don’t report the grossly inflated 1099-K amount as
    income on their tax return. As a result, the IRS cross checks the 1099-K
    against the taxpayers income and then issues a CP2000 audit letter for
    failing to report the income.
  </p>
  <p>
    Worse yet,{" "}
    <a href="https://taxbit.com" target="_blank">
      TaxBit
    </a>{" "}
    has helped many taxpayers whose accountants weren’t aware that their
    client’s 1099-K was inaccurate and actually reported the amount listed on a
    taxpayer's 1099-K as income. It should be noted, most exchanges have ceased issuing 1099-K's for trading activity, as it is improper to report crypto trading proceeds as income and therefore leads to inaccurate IRS matching audits.&nbsp;
  </p>
  <h3>1099-B</h3>
  <p>
    1099-B’s on the other hand report cost basis when available and are designed
    to be transposed onto an IRS 8949. Gains reported on an IRS 8949 are taxed
    pursuant to capital gains treatment instead of ordinary income. Many
    exchanges have already made the switch to 1099-B reporting, as it is the accurate tax form and provides a better user experience. This is leading to more accurate tax reporting and will
    eliminate the automatic IRS audits sent out to 1099-K recipients related to
    unreported income.&nbsp;
    <br />
    <br />
  </p>

  <div className="colorDivider"></div>
  <h2>More About TaxBit for Cryptocurrency Taxes</h2>
  <h3>How to File (Forms) With TaxBit</h3>
  <div className="row">
    <div className="col-md-5">
      <p>
        TaxBit automates the process of producing the necessary tax forms for
        cryptocurrency traders. After a taxpayer downloads their IRS 8949 tax
        form from within their TaxBit account, they can incorporate the
        completed form into their full tax return.
      </p>
      <p>
        If a taxpayer is filing their own taxes then they can easily upload
        their IRS 8949 tax forms into a popular tax filing software such as
        TurboTax, TaxAct, or TaxSlayer. Alternatively, if the taxpayer uses an
        accountant to file their tax return then they can provide their
        accountant with the completed IRS 8949 tax forms to have them
        incorporated into their tax return.
      </p>
    </div>
    <div className="col-md-7">
      <video
        width="100%"
        src="/assets/myTaxesLoop.mp4"
        muted
        loop
        playsInline
        preload="auto"
        autoPlay
      ></video>
    </div>
  </div>
  <h3>All previous tax years included</h3>
  <p>
    As a cryptocurrency tax software founded by CPA’s and tax attorneys, we
    believe in helping taxpayers comply with their tax obligations. To this end,
    TaxBit’s Plus and Pro plans include all prior year tax forms.
  </p>
  <p>
    We have found many cryptocurrency traders are just now filing their crypto
    taxes based on the new cryptocurrency question on IRS Form 1040. Some users
    wish to amend prior year tax returns to account for their cryptocurrency
    activity. TaxBit includes prior year tax forms to lessen the burden of
    taxpayer’s backfiling to be retroactively tax compliant.
  </p>

        <div className="colorDivider"></div>
        <h2>Security</h2>
        <p>Cryptocurrency traders by nature are security and privacy oriented.</p>
        <p>TaxBit uses “Read Only” API keys that do not grant access to custody or trading and we never sell or share our users’ information. TaxBit uses database servers hosted by AWS RDS. All data is encrypted using AES 256 in transit and at rest.</p> 
        <p>TaxBit is SOC 2 Type 2 certified and gone through in-depth security reviews with many of the most reputable cryptocurrency exchanges.</p>
        <div className="colorDivider"></div>
        <h2>Partnerships</h2>
        <p>TaxBit is backed by and is the preferred partner of many leading cryptocurrency exchanges.</p>
        
        <img width="100%" style={{maxWidth: '400px'}} src="../assets/investors.png" alt="" /><br/>
        <h2>Featured on:</h2>
        <div class="row"><div class="col-md-2 col-sm-4"><a href="https://finance.yahoo.com/video/crypto-tax-firms-surge-increasing-190433930.html?guccounter=1
        " target="_blank"><img width="100%" src="../assets/featuredOn/yahoo.png" alt=""/></a></div>
        <div class="col-md-2 col-sm-4"><a href="https://blog.cex.io/news/report-2018-taxes-18668
        " target="_blank"><img width="100%" src="../assets/featuredOn/cexFeat.png" alt=""/></a></div>
        <div class="col-md-2 col-sm-4"><a href="https://coincentral.com/what-is-taxbit/
        " target="_blank"><img width="100%" src="../assets/featuredOn/coincentral.png" alt=""/></a></div>
        <div class="col-md-2 col-sm-4"><a href="https://uphold.com/en/blog/easily-report-cryptocurrency-transactions-with-taxbit-and-uphold
        " target="_blank"><img width="100%" src="../assets/featuredOn/upholdFeat.png" alt=""/></a></div>
        <div class="col-md-2 col-sm-4"><a href="https://cointelegraph.com/news/tax-compliance-firm-taxbit-raises-5m-to-improve-crypto-tax-reporting
        " target="_blank"><img width="100%" src="../assets/featuredOn/cointelegraph.png" alt=""/></a></div>
        <div class="col-md-2 col-sm-4"><a href="https://www.theblockcrypto.com/post/52115/winklevoss-capital-joins-5m-seed-round-for-crypto-tax-reporting-platform-taxbit
        " target="_blank"><img width="100%" src="../assets/featuredOn/theBlock.png" alt=""/></a></div>
        </div>

        
      </Container>
      <br/><br/>
      <section className="section bg-gradient py-10">
          <div className="container">
            <div className="row text-center mb-5">
              
              <div className="col-12">

                <h2 className="text-white">
                 Get Started Today!
                </h2>

                <div className="lead text-white mb-6">
                  Generate your cryptocurrency tax forms now
                </div>
                <JoinModal variant="light" className="btn-lg">Start Free Trial</JoinModal>
              </div>
            </div>

          </div>
          
        </section>
  </div>
  )
}

TaxGuideTemplate.propTypes = {
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const TaxGuide = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <TaxGuideTemplate
        contentComponent={HTMLContent}
        content={post.html}
        lastEditDate={post.frontmatter.date}
      />
    </Layout>
  )
}

TaxGuide.propTypes = {
  data: PropTypes.object.isRequired,
}

export default TaxGuide

export const TaxGuideQuery = graphql`
  query TaxGuide($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
