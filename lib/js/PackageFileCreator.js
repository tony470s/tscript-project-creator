"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FileCreator_1 = __importDefault(require("../FileCreator"));
class PackageFileCreator extends FileCreator_1.default {
    getPathParts() {
        return ["package.json"];
    }
    getContent() {
        return `{
  "name": "tscript-${this.projectConfig.id}",
  "version": "0.5.0",
  "description": "A tscript project in JavaScript.",
  "main": "src/index.js",
  "scripts": {
    "pack": "npx webpack --config webpack/webpack.config.js --progress",
    "start": "node webpack/webpack-dev-server.js",
    "test": "npx jest --coverage",
    "format": "npx prettier --write \\"src/**/*.js\\"",
    "lint": "npx eslint src/"
  },
  "repository": {
    "type": "git",
    "url": "git@bitbros.com:tscript-project-templates"
  },
  "author": "Chaoqian Xu <chaoranxu@gmail.com>",
  "license": "MIT",
  "dependencies": {
    "tscript-std": "^0.8.8"
  },
  "devDependencies": {
    "@babel/core": "^7.12.3",
    "@babel/preset-env": "^7.12.1",
    "babel-jest": "^26.6.3",
    "babel-loader": "^8.1.0",
    "clean-webpack-plugin": "^3.0.0",
    "eslint": "^7.13.0",
    "eslint-config-prettier": "^6.15.0",
    "eslint-plugin-jest": "^24.1.0",
    "eslint-plugin-prettier": "^3.1.4",
    "eslint-webpack-plugin": "^2.2.0",
    "express": "^4.17.1",
    "html-webpack-plugin": "^5.0.0-alpha.14",
    "jest": "^26.6.3",
    "prettier": "^2.1.2",
    "terser-webpack-plugin": "^5.0.1",
    "webpack": "^5.1.3",
    "webpack-cli": "^4.1.0",
    "webpack-dev-middleware": "^4.0.0",
    "tscript-compiler": "^0.8.12",
    "localbridge": "^0.3.5"
  }
}
`;
    }
}
exports.default = PackageFileCreator;
//# sourceMappingURL=PackageFileCreator.js.map