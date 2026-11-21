const CompressionPlugin = require("compression-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "production",
  entry: { app: "./src/main.ts", vendor: "./src/vendor.ts" },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: { extensions: [".ts", ".js"] },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  plugins: [
    new CompressionPlugin({
      algorithm: "gzip", // Specify the Gzip compression algorithm
    }),
  ],
};
