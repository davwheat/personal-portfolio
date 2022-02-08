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
      `gatsby-plugin-sitemap`,
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

    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    `gatsby-plugin-react-head`,
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `David Wheatley`,
        short_name: `davwheat`,
        start_url: `/`,
        background_color: Colors.primaryRed,
        theme_color: Colors.primaryBlue,
        display: `minimal-ui`,
        icon: `src/images/thinking_emoji.png`,
      },
    },
    `gatsby-plugin-webpack-size`,
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    `gatsby-plugin-webpack-bundle-analyser-v2`,
    `gatsby-plugin-perf-budgets`,
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
    `gatsby-plugin-less`,

    // Blog plugins
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve('./src/templates/blog-article/BlogPageTemplate.tsx'),
        },
        remarkPlugins: [require(`remark-math`), [require(`remark-twemoji`), { isReact: true }]],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              className: `heading-link`,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 575,
              wrapperStyle: () => 'max-height: 80vh; overflow: hidden;',
              backgroundColor: 'transparent',
              linkImagesToOriginal: true,
              quality: 80,
              withWebp: true,
              withAvif: true,
            },
          },
          `gatsby-remark-static-images`,
          `gatsby-remark-copy-linked-files`,
        ],
      },
    },
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-meta-redirect`,
    {
      resolve: `@ssfbank/gatsby-plugin-search-fusejs`,
      options: {
        resolvers: {
          Mdx: {
            title: node => node.frontmatter.title,
            description: node => node.frontmatter.description,
            tags: node => (Array.isArray(node.frontmatter.tags) ? node.frontmatter.tags : [node.frontmatter.tags]),
            path: node => node.frontmatter.path,
          },
        },

        // pass on fuse specific constructor options: https://fusejs.io/api/options.html
        fuseOptions: {
          keys: [`title`, `tags`, `description`], // Mandatory
          ignoreLocation: true,
          treshold: 0.4,
          minMatchCharLength: 2,
        },

        // if you want a copy of the serialized data structure into the public folder for external or lazy-loaded clientside consumption
        // will be put in ./public folder and will end up as ./public/fuse-search-data.json
        copySerializationToFile: 'fuse-search-data',

        // Optional filter to limit indexed nodes
        filter: (node, getNode) => node.frontmatter.tags !== 'exempt',
      },
    },
  ],
}
