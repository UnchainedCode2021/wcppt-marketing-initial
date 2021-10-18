/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: "WCPPT",
    titleTemplate: "%s | Treating Your Pain",
    description: "Wisconsin Chronic Pain Physical Therapy, Inc. offers a unique approach to treating your chronic pain through hands-on techniques with proven results. We work on getting you back to daily activities that have been too difficult with your pain.",
    siteUrl: "https://www.chronicpainphysicaltherapy.com",
    author: "Unchained Code",
    authorSite: "https://www.unchainedcode.com",
    image: "/yellow-metal-design-decoration.jpg",
    twitterUsername: "@twitter",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: 'src/images/wcppt-icon-32x32.png'
      }
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
  ],
}
