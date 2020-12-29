const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = [createConfig({ port: 8001, folder: "01-vanilla-app" })];

function createConfig({ port, folder }) {
  return {
    entry: path.resolve(__dirname, `${folder}/index.js`),
    mode: "development",
    module: {
      rules: [
        {
          test: /\.vue$/,
          use: ["vue-loader"],
        },
      ],
    },
    devtool: "source-map",
    plugins: [
      new VueLoaderPlugin(),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, folder, "index.html"),
      }),
    ],
    devServer: {
      port,
      historyApiFallback: true,
    },
  };
}
