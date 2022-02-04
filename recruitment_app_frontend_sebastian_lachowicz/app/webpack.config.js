const path = require('path');

module.exports = (env) => {
  return {
    entry: [
      __dirname + '/scss/style.scss'
    ],
    watch: env.watch,
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: "[name].js"
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'file-loader',
              options: { outputPath: '../css/', name: '[name].css'}
            },
            'sass-loader'
          ]
        }
      ]
    }
  }
};