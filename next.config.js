// next.config.js
const withImages = require('next-images')
const debug = process.env.NODE_ENV !== 'production'

module.exports = withImages({
  assetPrefix: !debug ? '/alpha' : '',
  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.md$/,
        use: 'frontmatter-markdown-loader'
      }
    )

    return config
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/i,
        use: [
          {
              loader: 'file-loader',
          },
        ],
      }
    ],
  },
})