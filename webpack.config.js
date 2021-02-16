const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const fs = require("fs");
const spawn = require("cross-spawn");
const StandaloneSingleSpaPlugin = require("standalone-single-spa-webpack-plugin");

const serveIndex = process.argv.findIndex((arg) => arg === "serve");
if (serveIndex < 0 || serveIndex === process.argv.length - 1) {
  console.error(
    `
Must run start script with directory name:

npm start -- 01-vanilla-app
yarn start 01-vanilla-app
pnpm start -- 01-vanilla-app
`.trim()
  );
  process.exit(1);
}

let dir = process.argv[serveIndex + 1];

if (dir.endsWith("/")) {
  dir = dir.slice(0, dir.length - 1);
}

if (!fs.existsSync(path.resolve(__dirname, dir))) {
  console.error(
    `
Directory ${dir} doesn't exist.

Must run start script with directory name:

npm start -- 01-vanilla-app
yarn start 01-vanilla-app
pnpm start -- 01-vanilla-app
`.trim()
  );

  process.exit(1);
}

const directoryOptions = {
  "03-react-app": {
    standalone: "disabled",
    port: 8301,
  },
  "03-vue-app": {
    standalone: "disabled",
    port: 8302,
  },
  "04-react-navbar": {
    standalone: "disabled",
    port: 8301,
  },
  "04-react-app": {
    standalone: "disabled",
    port: 8302,
  },
  "04-vue-app": {
    standalone: "disabled",
    port: 8303,
  },
  "04-angular-app": {
    standalone: "disabled",
    port: 8304,
  },
  "05-react-app": {
    standalone: "disabled",
    port: 8301,
  },
  "05-vue-app": {
    standalone: "disabled",
    port: 8302,
  },
  "05-angular-app": {
    standalone: "disabled",
    port: 8303,
  },
};

const defaultOptions = {
  standalone: "index.html",
  port: null,
};

module.exports = createConfig({ folder: dir });

function createConfig({ folder }) {
  const isAngular = folder.includes("angular");

  if (isAngular) {
    spawn("ngc", ["--watch"], {
      stdio: "inherit",
      cwd: path.resolve(__dirname, folder),
    });
  }

  const options = directoryOptions[folder] || defaultOptions;

  const useStandalonePlugin = options.standalone !== "index.html";

  const htmlWebpackOptions = {
    inject: 'body'
  };

  if (!useStandalonePlugin) {
    htmlWebpackOptions.template = path.resolve(__dirname, folder, "index.html");
  }

  const config = {
    entry: path.resolve(__dirname, `${folder}/index.js`),
    mode: "development",
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          use: ["babel-loader"],
          exclude: /node_modules/,
        },
        {
          test: /\.vue$/,
          use: ["vue-loader"],
        },
        {
          test: /.css$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: folder
                },
              }
            }
          ],
          include: /\.module\.css$/
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ],
          exclude: /\.module.css$/
        }
      ],
    },
    output: {
      publicPath: "/"
    },
    devtool: "source-map",
    plugins: [
      new VueLoaderPlugin(),
      new HtmlWebpackPlugin(htmlWebpackOptions),
      useStandalonePlugin &&
        new StandaloneSingleSpaPlugin({
          appOrParcelName: folder,
          disabled: options.standalone === "disabled",
        }),
    ].filter(Boolean),
    resolve: {
      extensions: [".jsx", ".js", ".ts", ".tsx"],
      preferRelative: true
    },
    devServer: {
      historyApiFallback: true,
      port: options.port,
    },
  };

  return config;
}
