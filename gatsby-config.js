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
    ]
  : []

module.exports = {
  flags: {
    FAST_DEV: true,
    FAST_REFRESH: true,
  },
  siteMetadata: {
    title: `David Wheatley`,
    description: `David Wheatley is an front-end web designed specialising in React, located in West Sussex, UK.`,
    author: `@davwheat`,
  },
  plugins: [
    ...prodPlugins,
    `gatsby-plugin-preact`,
    `gatsby-plugin-react-head`,
    `gatsby-plugin-less`,
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
        theme_color: Colors.primaryRed,
        display: `minimal-ui`,
        icon: `src/images/thinking_emoji.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-webpack-size`,
    `gatsby-plugin-material-ui`,
    // {
    //   resolve: 'gatsby-plugin-react-svg',
    //   options: {
    //     rule: {
    //       include: /\.inline\.svg$/, // See below to configure properly
    //     },
    //   },
    // },
  ],
}
