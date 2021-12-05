"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FileCreator_1 = __importDefault(require("../../FileCreator"));
class WebpackDevServerFileCreator extends FileCreator_1.default {
    getPathParts() {
        return ["webpack", "webpack-dev-server.js"];
    }
    getContent() {
        return `const express = require("express");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");

const app = express();
const config = require("./webpack.config.js");
const compiler = webpack(config);

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    writeToDisk: true,
  })
);

app.listen(12345, function () {
  console.log("Project is running at http://localhost:12345/\\n");
});
`;
    }
}
exports.default = WebpackDevServerFileCreator;
//# sourceMappingURL=WebpackDevServerFileCreator.js.map