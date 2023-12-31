const {
    NODE_ENV,
    URL: NETLIFY_SITE_URL = 'https://snailbit.es/',
    DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
    CONTEXT: NETLIFY_ENV = NODE_ENV
} = process.env;
const isNetlifyProduction = NETLIFY_ENV === 'production';
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;
  
module.exports = {
    siteMetadata: {
        title: `Snailbites - the digital home of Vincent Nalupta`,
        lead1: `VINCENT NALUPTA`,
        lead2: `IS A UX ENGINEER`,
        author: `Vincent Nalupta`,
        description: `Snailbites is the digital home of Vincent Nalupta, a UX Engineer in NYC.`,
        siteUrl: `https://snailbit.es/`,
        social: {
            twitter: `snailbites`,
        },
    },
    plugins: [
        `gatsby-plugin-netlify-cms`,
        `gatsby-plugin-styled-components`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-feed`,
        `gatsby-plugin-remove-serviceworker`,
        `gatsby-plugin-react-helmet`,        
        `gatsby-plugin-transition-link`,
        `gatsby-plugin-sitemap`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/blog`,
                name: `blog`,
            },
        }, 
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/images`,
                name: `images`,
            },
        },              
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 590,
                            backgroundColor: "#D8D8D8",
                            disableBgImageOnAlpha: true,
                        },
                    },
                    {
                        resolve: `gatsby-remark-responsive-iframe`,
                        options: {
                            wrapperStyle: `margin-bottom: 1.0725rem`,
                        },
                    },
                    `gatsby-remark-vscode`,
                    `gatsby-remark-copy-linked-files`,
                    `gatsby-remark-smartypants`,
                ],
            },
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {                
                trackingId: `UA-174566260-1`,
                head: false,
                pageTransitionDelay: 10,
                defer: true
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Snailbites`,
                short_name: `Snailbites`,
                start_url: `/`,
                background_color: `#ffffff`,
                theme_color: `#4F1C48`,
                display: `minimal-ui`,                
                icon: `images/crown.png`,
            },
        },
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
              resolveEnv: () => NETLIFY_ENV,
              env: {
                production: {
                  policy: [{ userAgent: '*' }]
                },
                'branch-deploy': {
                  policy: [{ userAgent: '*', disallow: ['/'] }],
                  sitemap: null,
                  host: null
                },
                'deploy-preview': {
                  policy: [{ userAgent: '*', disallow: ['/'] }],
                  sitemap: null,
                  host: null
                }
              }
            }
          }        
    ],
}
