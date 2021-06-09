import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Content, { HTMLContent } from '../components/Content'
import {Container, Button, Jumbotron} from 'react-bootstrap'

export const KuCoinTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <div>
    <Jumbotron className="pageHead text-white mb-4">
      <Container>
        <h1>KuCoin Full History Import</h1>
      </Container>
    </Jumbotron>
          <Container>
            <div class="grid-x grid-margin-y grid-margin-x grid-padding-y grid-padding-x">
              
              <div class="cell auto hover-line accounts">
                <div class="grid-x grid-padding-x grid-padding-y grid-margin-y grid-margin-x">
                
                  <div class="cell small-12 medium-8 block">
                    <h5>KuCoin to TaxBit Data Transformer</h5>
                    <p>
                      As of February 18, 2019, KuCoin released a new API and deactivated their old API. The new API only allows access to transactions that took place after February 18, 2019.  In order to import your KuCoin transactions that took place on or before February 18, 2019, you will need to manually export your transaction data from KuCoin before importing it into TaxBit.
                    </p>
                  </div>
                  <div class="cell small-12 medium-8 block">
                    <h5>Download KuCoin History</h5>
                    <p>First log into your KuCoin account and click on the <a href="https://www.kucoin.com/records-v1" target="_blank">V1 Transaction History</a> page.
                    </p>
                    <p>Select the <strong>Trade History</strong> tab and select the date range going back to your earliest transaction that you executed on KuCoin, and going through February 18, 2019.</p>
                    <div class="callout warning alert alert-warning">
                      <h6>Important Note:</h6>
                      <p>Please note that KuCoin does not let you export transaction histories that exceed 31 days in duration. As such, you will need to download a separate file for each 1-month increment that you transacted on KuCoin, going through February 18, 2019.</p>
                    </div>
                    <p>Click “Export to CSV” for each 1-month increment time period that you need to generate. Then click the download link on the right and download all the files for your historical transactions.
                    </p>
                  </div>
                  <div class="cell small-12 medium-8 block">
                    <h5>CSV Upload</h5>
                    <p>Next, go to the TaxBit <a href="https://app.taxbit.com/app/csv-import" target="_blank">CSV import page</a>, then select and upload each of your exported CSV files! <br/><br/>You will receive an email notification after uploading that will tell you if your upload was successful. If it wasn't successful, the email will contain the error that the file had so you can correct it and try uploading the file again.</p>

                    <p>All past KuCoin transactions will now be displayed in your account, and your future transactions will come in via KuCoin’s API, if the API is connected.</p>

                    <div class="callout warning alert alert-warning">
                      <h6>Important Note:</h6>
                      <p>Depending on the size of your CSV file processing time could take up to 1 hour. Please do not attempt to upload your CSV file again during this time or you risk creating duplicates. If it’s been over an hour and you have still not yet received an email confirmation please contact us.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>      
       </div>      
  )
}

KuCoinTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const KuCoin = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <KuCoinTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

KuCoin.propTypes = {
  data: PropTypes.object.isRequired,
}

export default KuCoin

export const KuCoinQuery = graphql`
  query KuCoin($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
