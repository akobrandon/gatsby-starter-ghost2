import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Content, { HTMLContent } from '../components/Content'
import {Container, Button, Jumbotron} from 'react-bootstrap'

export const CSVpageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <div>
    <Jumbotron className="pageHead text-white mb-4">
      <Container>
        <h1>CSV Import Walkthrough</h1>
      </Container>
    </Jumbotron>
          <Container>
            <div className="grid-x grid-padding-x grid-padding-y grid-margin-y grid-margin-x">
                    <h2 className="cell small-11 no-margin">CSV Import Tutorial</h2>
                    <div className="cell small-12 medium-8 block">
                      <h5>CSV Template</h5>
                      <p>
                        To get started, you will want to <a href="/assets/csv/CSVuploadExample.xlsx" target="_blank">download</a> TaxBit’s template file so you can see exactly how your data needs to be formatted. The template file contains highlighted rows of example data that is properly formatted. In this tutorial, we will add our data in the rows beneath the example data, and then delete the example data rows once we are finished entering our data. 
                      </p>
                      <div className="text-center">
                        <a href="/assets/csv/CSVuploadExample.xlsx" className="button">Download Template File</a></div>
                      <div className="callout warning alert alert-warning">
                        <h6>Important Note:</h6>
                        <p>We will go through each of the columns in the template. Make sure that you don't edit any of the column headers names or position, as they need to be left exactly as they are in order for your file to properly upload.</p>
                      </div>
                    </div>
                    <div className="cell small-12 medium-8 block">
                      <h5><span style={{fontSize: '1.05rem'}}>Column 1:</span> <br /><strong>Date and Time</strong></h5>
                      <p>The first column represents the date and time of your transactions. Data in this column must be formatted in the <a href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601</a> standard date time format. The template file included will auto format to the ISO 8601 standard simply from typing out the date and time like so:
                      </p>
                      <img src="/assets/csv/datetime.png" />
                      <p>Or alternatively just copy and paste from your exported exchange transaction data.</p>
                    </div>
                    <div className="cell small-12 medium-8 block">
                      <h5><span style={{fontSize: '1.05rem'}}>Column 2:</span> <br /><strong>Transaction Type</strong></h5>
                      <p>TaxBit supports the following transaction types:</p>
                      <p><strong>Buy</strong><span style={{fontWeight: 400}}><br /></span><span style={{fontWeight: 400}}>Purchase of crypto with fiat (i.e; Paid $5,000 for 1 BTC)</span><br />
                        <strong>Sale</strong><span style={{fontWeight: 400}}><br /></span><span style={{fontWeight: 400}}>Sale of crypto for fiat (i.e; Sold 1 BTC for $5,000)</span><br />
                        <strong>Trade</strong><span style={{fontWeight: 400}}><br /></span><span style={{fontWeight: 400}}>Trading one crypto for another crypto (i.e; Trade 1 BTC for 10 ETH)</span><br />
                        <strong>Transfer In</strong><span style={{fontWeight: 400}}><br /></span><span style={{fontWeight: 400}}>Transfer crypto in of your possession</span><br />
                        <strong>Transfer Out</strong><span style={{fontWeight: 400}}><br /></span><span style={{fontWeight: 400}}>Transfer crypto out of your possession</span><br />
                        <strong>Income</strong><span style={{fontWeight: 400}}><br /></span><span style={{fontWeight: 400}}>Received crypto in return for goods or services (i.e; Received 1 BTC in return for mining)</span><br />
                        <strong>Expense</strong><span style={{fontWeight: 400}}><br /></span><span style={{fontWeight: 400}}>Sent crypto in return for goods or services (i.e; Sent 1 BTC as payment for a car)</span></p>
                      <div className="callout warning alert alert-warning">
                        <h6>Important Note:</h6>
                        <p>If you exported your data from an exchange, some exchanges label everything as buy or sale, including crypto to crypto trades. You need to make sure to change the transaction type to trade if your transaction consisted of trading one cryptocurrency for another. </p>
                      </div>
                    </div>
                    <div className="cell small-12 medium-8 block">
                      <h5><span style={{fontSize: '1.05rem'}}>Column 3:</span> <br /><strong>Sent Quantity</strong></h5>
                      <p>This columns represents the quantity of currency that you gave up, which should be a fiat value in the case of the transaction type buy, and a cryptocurrency value in the cases of the transaction types trade or sale. </p>
                    </div>
                    <div className="cell small-12 medium-8 block">
                      <h5><span style={{fontSize: '1.05rem'}}>Column 4:</span> <br /><strong>Sent Currency</strong></h5>
                      <p>This needs to be the 3-4 character currency symbol of what you gave up, which should be a fiat currency symbol in the case of the transaction type buy, and a cryptocurrency symbol in the cases of the transaction types trade or sale.</p>
                    </div>
                    <div className="cell small-12 medium-8 block">
                      <h5><span style={{fontSize: '1.05rem'}}>Column 5:</span> <br /><strong>Sending Source</strong></h5>
                      <p>This column is optional, but is good to include if you want to be able to sort and filter your transactions by source in your TaxBit account. You can enter the name of the exchange or wallet the currency was sent from.</p>
                    </div>
                    <div className="cell small-12 medium-8 block">
                      <h5><span style={{fontSize: '1.05rem'}}>Columns 6-8:</span> <br /><strong>Receiving Columns</strong></h5>
                      <p>The next three columns are the same as the previous three, only we are now dealing with the receiving side of the transaction instead of the sending side. Go ahead and fill in your received quantity, received currency, and optionally receiving destination now.</p>
                    </div>
                    <div className="cell small-12 medium-8 block">
                      <h5><span style={{fontSize: '1.05rem'}}>Columns 9:</span> <br /><strong>Fee</strong></h5>
                      <p>Most exchanges charge fees to transact. If you bought cryptocurrency then it is allowable to add fees into your cost basis and if you "Sell" or "Trade" you can deduct fees from your proceeds. This is beneficial because it will lower your resulting gains or increase your losses. Enter your transaction fees in this column and we will handle the rest!</p>
                    </div>
                    <div className="cell small-12 medium-8 block">
                      <h5><span style={{fontSize: '1.05rem'}}>Columns 10:</span> <br /><strong>Fee Currency</strong></h5>
                      <p>This needs to be the 3-4 character currency symbol of the fee you paid.</p>
                    </div>
                    <div className="cell small-12 medium-8 block">
                      <h5><span style={{fontSize: '1.05rem'}}>Columns 11-12:</span> <br /><strong>Transaction ID/Hash</strong></h5>
                      <p>Some exchanges include transaction IDs and block transaction hashes, which can be included in the last two columns if available. These columns are optional, and don't need to be included unless the information is readily available to you.</p>
                    </div>
                    <div className="cell small-12 medium-8 block">
                      <h5>File Preparation</h5>
                      <p>After you have entered in all of your information, you can now delete the example rows. Now you are ready to convert the excel template file to CSV format and upload it into TaxBit.</p>
                      <p>
                        <strong>Excel</strong><br />
                        In order to convert the Excel document to CSV, click File &gt; Save As &gt; then change the file format from Excel Workbook (.xlsx) to CSV Comma Delimited (.csv), and save it to a location that you can easily find.
                      </p>
                      <p>
                        <strong>Google Spreadsheets</strong><br />
                        In order to convert the Excel document to CSV, click File &gt; Download As &gt; Comma-seperated Values (.csv), and save it to a location that you can easily find.
                      </p>
                      <p>
                        <strong>Apple Numbers</strong><br />
                        In order to convert the Excel document to CSV, click File &gt; Export To &gt; CSV... and save it to a location that you can easily find.
                      </p>
                    </div>
                    <div className="cell small-12 medium-8 block">
                      <h5>CSV Upload</h5>
                      <p>Finally, go to the TaxBit <a href="https://app.taxbit.com/csv-import" target="_blank">CSV import page</a>, then select and upload your file! </p>
                      <div className="callout warning alert alert-warning">
                        <h6>Important Note:</h6>
                        <p>Depending on the size of your CSV file processing time could take up to 1 hour. Please do not attempt to upload your CSV file again during this time or you risk creating duplicates. If it’s been over an hour and you do not yet see your transactions in your account, please contact us.</p>
                      </div>
                    </div>
                  </div> 
          </Container>      
       </div>      
  )
}

CSVpageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const CSVpage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <CSVpageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

CSVpage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default CSVpage

export const CSVpageQuery = graphql`
  query CSVpage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
