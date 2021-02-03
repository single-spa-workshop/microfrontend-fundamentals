const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const fs = require('fs')
const spawn = require('cross-spawn')

const serveIndex = process.argv.findIndex(arg => arg === 'serve')
if (serveIndex < 0 || serveIndex === process.argv.length - 1) {
  console.error(`
Must run start script with directory name:

npm start -- 01-vanilla-app
yarn start 01-vanilla-app
pnpm start -- 01-vanilla-app
`.trim())
  process.exit(1)
}

const dir = process.argv[serveIndex + 1]

if (!fs.existsSync(path.resolve(__dirname, dir))) {
  console.error(`
Directory ${dir} doesn't exist.

Must run start script with directory name:

npm start -- 01-vanilla-app
yarn start 01-vanilla-app
pnpm start -- 01-vanilla-app
`.trim())

  process.exit(1)
}

module.exports = createConfig({ folder: dir });

function createConfig({ folder }) {
  const isAngular = folder.includes('angular')

  if (isAngular) {
    spawn('ngc', ['--watch'], { stdio: 'inherit', cwd: path.resolve(__dirname, folder)})
  }

  return {
    entry: path.resolve(__dirname, `${folder}/index.js`),
    mode: "development",
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          use: ['babel-loader'],
          exclude: /node_modules/
        },
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
    ].filter(Boolean),
    resolve: {
      extensions: ['.jsx', '.js', '.ts', '.tsx']
    },
    devServer: {
      historyApiFallback: true,
    }
  };
}