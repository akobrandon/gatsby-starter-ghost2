/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const netlifyCmsPaths = {
  resolve: `gatsby-plugin-netlify-cms-paths`,
  options: {
    cmsConfig: `/static/admin/config.yml`,
  },
}

const settings = require("./src/util/site.json")

const font = [
{ name: "79847239847238", url: "https://i.icomoon.io/public/2993ee0ed2/TaxBit/style.css" },
]

let ghostConfig

try {
    ghostConfig = require(`./.ghost`)
} catch (e) {
    ghostConfig = {
        production: {
            apiUrl: process.env.GHOST_API_URL,
            contentApiKey: process.env.GHOST_CONTENT_API_KEY,
        },
    }
} finally {
    const { apiUrl, contentApiKey } = process.env.NODE_ENV === `development` ? ghostConfig.development : ghostConfig.production

    if (!apiUrl || !contentApiKey || contentApiKey.match(/<key>/)) {
        throw new Error(`GHOST_API_URL and GHOST_CONTENT_API_KEY are required to build. Check the README.`) // eslint-disable-line
    }
}

module.exports = {
  siteMetadata: settings.meta,
  plugins: [
    'gatsby-plugin-robots-txt',
    //"gatsby-plugin-webpack-bundle-analyser-v2",

    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "UA-118601838-2",
        includeInDevelopment: false,
        defaultDataLayer: { platform: "gatsby" },
        routeChangeEventName: "gatsby-route-change",
      }
    },
    {
    resolve: 'gatsby-source-greenhouse-job-board',
    options: {
      boardToken: 'taxbit'
    },
  },
  {
        resolve: `gatsby-source-ghost`,
        options:
            process.env.NODE_ENV === `development`
                ? ghostConfig.development
                : ghostConfig.production,
    },
    {
      resolve: "gatsby-source-apiserver",
      options: {
        typePrefix: "internal__",
        method: "get",
        headers: {
          "Content-Type": "application/json",
          "FileType": "json"
        },
        data: {},
        params: {
          apikey: "6hZbvuXWXQKaArVPclG6oLIImabwMWn1",
          tagValue: "tag"
        },
        allowCache: false,
        maxCacheDurationSeconds: 60 * 60 * 24,
        payloadKey: `body`,
        localSave: true,
        path: `${__dirname}/static/assets/`,
        verboseOutput: true,
        skipCreateNode: true,
  
        entitiesArray: [
          {
            url: `https://api.trustpilot.com/v1/business-units/5e5d8f30d4941700016227e1/reviews`,
            name: `reviews`,
          },
          {
            url: `https://api.trustpilot.com/v1/business-units/5e5d8f30d4941700016227e1`,
            name: `trustpilot`,
          },
        ]
      }
    },
    /*{
      resolve: "gatsby-source-apiserver",
      options: {
        typePrefix: "internal__",
        url: `https://i.icomoon.io/public/2993ee0ed2/TaxBit/style.css`,
        method: "get",
        headers: {
          "Content-Type": "text/plain",
          "FileType": "css"
        },
        data: {},
        name: `font`,
        localSave: true,
        path: `${__dirname}/static/assets/`,
        skipCreateNode: true,
      }
    },*/
    /*{
      resolve: 'gatsby-source-remote-file',
      options: {
        // The source url of the remote file
        url: 'https://jsonplaceholder.typicode.com/todos',

        // OPTIONAL
        // Provide a name for the created node (default: "remote")
        name: 'todos',

        // OPTIONAL
        // The id of the parent node (i.e. the node to which the new remote File node will be linked to.
        parentNodeId: 'assets',
        
        path: `${__dirname}/static/assets/`,

        // OPTIONAL
        // Adds htaccess authentication to the download request if passed in.
        auth: { htaccess_user: `USER`, htaccess_pass: `PASSWORD` },

        // OPTIONAL
        // Adds extra http headers to download request if passed in.
        httpHeaders: { Authorization: `Bearer someAccessToken` },

        // OPTIONAL
        // Sets the file extension
        ext: '.json',
      },
    },
  {
    resolve: "gatsby-source-remote",
    opt        files: font,
    }
  },
  {
      resolve: `gatsby-transformer-remote-filesystem`,
      options: {
        // If true, fingerprint the directory instead of the filename
        // (as `gatsby-transformer-sharp` does).
        // For example, /static/my_file-1234asdf.pdf will become
        // /static/1324asdf/my_file.pdf.
        // Consider the SEO implications if your site is already published.
        fingerprintDirectory : false,

      }
    },*/
   {
    resolve: 'gatsby-plugin-segment-js',
    options: {
      prodKey: '0ZppNXkx9L1ufP09oxft2NdLYStZrUO5',
      devKey: 'ZEdlifKesq5XeAM6RhDqYe24OCYW9u4x',
      trackPage: false,
      delayLoad: true
    }
  },
     /*{
      resolve: 'gatsby-plugin-zendesk-chat',
      options: {
        zendeskKey: 'a2f1dead-39ef-4bd8-84ba-0b5fdef3a5cf',
        enableDuringDevelop: true,
      },
    },*/
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/assets/`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/exchanges/`,
        name: `exchanges`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/`,
        name: `content`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
        resolve: 'gatsby-plugin-feed-generator',
        options: {
        generator: `GatsbyJS`,
        rss: true,
        json: false,
        siteQuery: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            name: 'rss', // This determines the name of your feed file => feed.json & feed.xml
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                  filter: { frontmatter: { template: { eq: "blog-post" } } }
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            normalize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return {
                  title: edge.node.frontmatter.title,
                  date: edge.node.frontmatter.date,
                  url: "https://taxbit.com" + edge.node.fields.slug,
                  html: edge.node.html,
                }
              })
            },
          },
        ],
      }
    },
    {
        resolve: 'gatsby-plugin-feed-generator',
        options: {
        generator: `GatsbyJS`,
        rss: false,
        json: true,
        siteQuery: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            name: 'exchanges', // This determines the name of your feed file => feed.json & feed.xml
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                  filter: { frontmatter: { template: { eq: "exchange-page" } } }
                ) {
                  edges {
                    node {
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                        APIinstructions
                        CSVinstructions
                        exchangeLogo {
                          childImageSharp {
                            fluid(maxWidth: 300) {
                              src
                            }
                          }
                        }

                      }
                    }
                  }
                }
              }
            `,
            normalize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return {
                  title: edge.node.frontmatter.title,
                  date: edge.node.frontmatter.date,
                  url: "https://taxbit.com" + edge.node.fields.slug,
                  description: [{APIinstructions: edge.node.frontmatter.APIinstructions},{CSVinstructions: edge.node.frontmatter.CSVinstructions}],
                  image: edge.node.frontmatter.exchangeLogo.childImageSharp.fluid.src,
                }
              })
            },
          },
        ],
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
        "gatsby-remark-embed-video",
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              // [Optional] The root of "media_folder" in your config.yml
              // Defaults to "static"
              staticFolderName: 'assets',
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {},
          },
        ],
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms`,
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `TaxBit`,
        short_name: `TaxBit`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `static/assets/favicon.png`,
      },
    },
    /*{ 
      resolve: `gatsby-plugin-purgecss`,
      options: {
        develop: true, 
        //purgeOnly : ['node_modules/bootstrap'], 
      }
    },*/
    'gatsby-plugin-offline',
    `gatsby-plugin-netlify`,
  ],
}
