// Used by jest, not by Next.js
const path = require('path');

const rootFolder = path.resolve('./');

module.exports = {
  rules: [{
    test: /.scss$/,
    use: [{
      loader: 'style-loader',
    }, {
      loader: 'css-loader',
      query: {
        modules: true,
        importLoaders: 1,
        localIdentName: '[name]__[local]___[hash:base64:5]',
      },
      options: {
        includePaths: [rootFolder],
      },
    }],
  }],
  resolve: {
    modules: [rootFolder, 'node_modules'],
    extensions: ['.js', '.jsx'],
  },
};
