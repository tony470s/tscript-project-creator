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
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleChangeNotifierPlugin = require("./bundle-change-notifier-plugin.js");
const BundleAdjustmentPlugin = require("./bundle-adjustment-plugin.js");

module.exports = {
  mode: "production",
  entry: {
    tscript: path.resolve(__dirname, "..", "src", "index.ts"),
  },
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".ts", ".json"],
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
        test: /\\.(ts|js)$/,
        use: [
          {
            loader: path.resolve(__dirname, "tscript-loader.js"),
          },
          {
            loader: "ts-loader",
            options: {
              configFile: path.resolve(__dirname, "..", "tsconfig.json"),
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({ verbose: true, dry: false }),
    new ESLintPlugin({
      context: path.resolve(__dirname, "..", "src"),
      extensions: ["js", "ts"],
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