const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("./package.json").dependencies;

module.exports = {
  mode: "development",
  devServer: {
    port: 8085,
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
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "SIGNUP",
      filename: "remoteEntry.js",
      remotes: {
        HEADER: "HEADER@http://localhost:8087/remoteEntry.js",
        STORE: "STORE@http://localhost:8086/remoteEntry.js",
      },
      exposes: {
        "./SignUp": "./src/App",
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
        "single-spa-react": {
          singleton: true,
          requiredVersion: deps["single-spa-react"],
        },
        "single-spa": {
          singleton: true,
          requiredVersion: deps["single-spa"],
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
