module.exports = {
  module: {
    rules: [
      {
        test: /\/raw\/.*\.txt$/i,
        use: 'raw-loader',
      },
      {
        test: /\.js$/,
        exclude: /raw/,
        loader: 'eslint-loader',
        options: {
          // eslint options (if necessary)
        },
      }
    ],
  },
};