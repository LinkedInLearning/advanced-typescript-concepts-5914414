const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');


module.exports = {
  mode: 'production',
  entry: {
    app: './src/index.ts',
    vendor: './src/vendor.ts'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  plugins: [
    new CompressionPlugin({
      algorithm: 'gzip'  // Specify the Gzip compression algorithm
    })
  ]
};
