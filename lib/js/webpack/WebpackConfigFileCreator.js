"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FileCreator_1 = __importDefault(require("../../FileCreator"));
class WebpackConfigFileCreator extends FileCreator_1.default {
    getPathParts() {
        return ["webpack", "webpack.config.js"];
    }
    getContent() {
        const pattern = /\\/g;
        const formatedPath = this.projectConfig.sockPath.replace(pattern, "\\\\");
        return `const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const BundleChangeNotifierPlugin = require("./bundle-change-notifier-plugin.js");
const BundleAdjustmentPlugin = require("./bundle-adjustment-plugin.js");

module.exports = {
  mode: "production",
  entry: {
    tscript: path.resolve(__dirname, "..", "src", "index.js"),
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "..", "dist"),
    publicPath: "/",
    library: "__tscript_${this.projectConfig.id}__",
    libraryTarget: "var",
  },
  module: {
    rules: [
      {
        test: /\\.js$/,
        use: [
          {
            loader: path.resolve(__dirname, "tscript-loader.js"),
          },
          {
            loader: "babel-loader",
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        extractComments: false,
        terserOptions: {
          ecma: "2015",
          sourceMap: true,
          output: {
            comments: false,
          },
        },
      }),
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.SourceMapDevToolPlugin({
      filename: "[name].js.map",
    }),
    new ESLintPlugin({
      context: path.resolve(__dirname, "..", "src"),
      extensions: ["js"],
    }),
    new HtmlWebpackPlugin({
      title: "tscript-${this.projectConfig.id}",
    }),
    new BundleChangeNotifierPlugin({
      tscriptId: "${this.projectConfig.id}",
      sockPath: "${formatedPath}"
    }),
    new BundleAdjustmentPlugin("${this.projectConfig.id}"),
  ],
  devtool: "source-map",
  externals: [
    function ({ request }, callback) {
      if (/^tscript-std$/.test(request)){
        // Externalize to a commonjs module using the request path
        return callback(null, "root std");
      }
      // Continue without externalizing the import
      callback();
    }
  ]
};
`;
    }
}
exports.default = WebpackConfigFileCreator;
//# sourceMappingURL=WebpackConfigFileCreator.js.map