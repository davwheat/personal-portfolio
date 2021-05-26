/* eslint-disable */

const __IS_DEV__ = process.env.NODE_ENV !== 'production'

const Colors = require('./src/data/colors.json')

// These plugins will only be used in production builds
const prodPlugins = !__IS_DEV__
  ? [
      {
        resolve: 'gatsby-plugin-remove-console',
        options: {
          exclude: ['error', 'warn'],
        },
      },
      {
        resolve: `gatsby-plugin-sitemap`,
        options: {
          sitemapSize: 1000,
        },
      },
      // Fixed hot reload in dev
      `gatsby-plugin-preact`,
    ]
  : []

module.exports = {
  siteMetadata: {
    title: `David Wheatley`,
    description: `David Wheatley is an front-end web designer specialising in React, located in West Sussex, UK.`,
    author: `@davwheat`,
    siteUrl: `https://davwheat.dev`,
  },
  plugins: [
    ...prodPlugins,
    `gatsby-plugin-react-head`,
    `gatsby-plugin-less`,
    {
      resolve: '@slixites/gatsby-plugin-google-fonts',
      options: {
        fonts: [`jost\:400,400i,500,700,700i`],
        display: 'fallback',
        preconnect: true,
        attributes: {
          rel: 'stylesheet preload prefetch',
          as: 'style',
        },
      },
    },
    `gatsby-plugin-csp`,
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.(j|t)sx?$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop', 'build-javascript'],
        options: {
          emitWarning: true,
          failOnError: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `David Wheatley`,
        short_name: `davwheat`,
        start_url: `/`,
        background_color: Colors.primaryRed,
        theme_color: Colors.primaryBlue,
        display: `minimal-ui`,
        icon: `src/images/thinking_emoji.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-webpack-size`,
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-webpack-bundle-analyser-v2`,
    // {
    //   resolve: 'gatsby-plugin-react-svg',
    //   options: {
    //     rule: {
    //       include: /\.inline\.svg$/, // See below to configure properly
    //     },
    //   },
    // },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
  ],
}
