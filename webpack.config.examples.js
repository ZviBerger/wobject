const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  devtool: "cheap-module-source-map",
  //"./src/apps/home/index.ts",
  entry: {
    spaceship: "./src/apps/spaceship/index.js",
    snake: "./src/apps/snakegame/index.js",
    home: "./src/apps/home/index.ts",
  },
  output: {
    //  path: __dirname,
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].js",
  },
  optimization: {
    minimize: false,
  },
  devServer: {
    open: true,
    hot: true,
    host: "localhost",
    // static: path.join(__dirname, "dist"),
    port: 9000,
    //  historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(m|j|t)s$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
        },
      },

      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/,
        use: ["url-loader"],
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{ from: "src/apps/spaceship/assets", to: "assets" }],
    }),
    new HtmlWebpackPlugin({
      //  inject: false,
      chunks: ["spaceship"],
      filename: "spaceship.html",
    }),
    new HtmlWebpackPlugin({
      //  inject: false,
      chunks: ["home"],
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      //  inject: false,
      chunks: ["snake"],
      filename: "snake.html",
    }),
    // new HtmlWebpackPlugin({
    //   inject: false,
    //   chunks: ["home"],
    //   filename: "src/apps/home/index.html",
    // }),
  ],
  resolve: {
    extensions: [".ts", ".js", ".json"],
  },
};
