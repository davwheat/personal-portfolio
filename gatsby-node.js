/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')

/**
 * Customise webpack config.
 */
exports.onCreateWebpackConfig = ({ stage, rules, loaders, plugins, actions }) => {
  if (stage === 'develop' || stage === 'build-javascript') {
    actions.setWebpackConfig({
      plugins: [new CaseSensitivePathsPlugin()],
    })
  }

  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /.jsonc$/,
          use: [
            {
              loader: `jsonc-loader`,
            },
          ],
        },
      ],
    },
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@data': path.resolve(__dirname, 'src/data'),
        '@assets': path.resolve(__dirname, 'src/assets'),
        '@functions': path.resolve(__dirname, 'src/functions'),
        '@styles': path.resolve(__dirname, 'src/styles'),
        '@templates': path.resolve(__dirname, 'src/templates'),
        '@hooks': path.resolve(__dirname, 'src/hooks'),
      },
    },
  })
}

exports.createPages = async inp => {
  await createRedirects(inp)
}

/**
 * Create redirects.
 */
async function createRedirects({ actions: { createRedirect } }) {
  getMobileNetworkRedirects().forEach(r => createRedirect(r))
  getBlogRedirects().forEach(r => createRedirect(r))
}

function getMobileNetworkRedirects() {
  const pages = [
    '',
    '/uk',
    '/uk/arfcn-list',
    '/uk/spectrum',
    '/dk',
    '/dk/arfcn-list',
    '/dk/spectrum',
    '/de',
    '/de/arfcn-list',
    '/de/spectrum',
  ].map(p => `/mobile-networking${p}`)

  const newPages = pages.map(page => {
    let p = page

    p = p.replace(/\/uk($|\/)/, '/gb/')
    p = p.replace(/\/mobile-networking($|\/)/, '/')

    return 'https://mastdatabase.co.uk' + p
  })

  return pages.map((p, i) => ({
    fromPath: p,
    toPath: newPages[i],
    isPermanent: true,
    statusCode: 308,
  }))
}

function getBlogRedirects() {
  const articles = [
    '2021/07/18/welcome',
    '2021/07/20/introduction-to-4g-and-lte',
    '2021/07/24/lte-bands-and-duplex-modes',
    '2021/08/04/mast-sectorisation-radiation-and-deployment-patterns',
    '2021/08/21/ofdm-subcarriers-rb-in-4g-lte-and-5g',
    '2021/10/11/speed-differences-high-low-frequencies',
    '2021/12/22/lte-mimo',
    '2022/01/24/o2-beacon-3-orion',
    '2022/04/19/ee-nr-ca',
  ]

  return articles.map(a => ({
    fromPath: `/blog/${a}`,
    toPath: `https://mastdatabase.co.uk/blog/${a}`,
    isPermanent: true,
    statusCode: 308,
  }))
}
