const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("./package.json").dependencies;

module.exports = {
  mode: "development",
  devServer: {
    port: 8082,
  },
  module: {
    rules: [
      {
        /* The following line to ask babel 
             to compile any file with extension
             .js */
        test: /\.js?$/,

        /* exclude node_modules directory from babel. 
            Babel will not compile any files in this directory*/
        exclude: /node_modules/,

        // To Use babel Loader
        loader: "babel-loader",
        options: {
          presets: [
            "@babel/preset-env" /* to transfer any advansed ES to ES5 */,
            "@babel/preset-react",
          ], // to compile react to ES5
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "APP",
      filename: "remoteEntry.js",
      remotes: {
        HEADER: "LOGIN@http://localhost:8087/remoteEntry.js",
        LOGIN: "LOGIN@http://localhost:8083/remoteEntry.js",
        SIGNUP: "SIGNUP@http://localhost:8085/remoteEntry.js",
        DASHBOARD: "DASHBOARD@http://localhost:8084/remoteEntry.js",
        STORE: "STORE@http://localhost:8086/remoteEntry.js",
      },
      exposes: {},
      shared: [],
    }),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
