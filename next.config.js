// next.config.js
const withImages = require('next-images')
module.exports = withImages({
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