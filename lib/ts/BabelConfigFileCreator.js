"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FileCreator_1 = __importDefault(require("../FileCreator"));
class BabelConfigFileCreator extends FileCreator_1.default {
    getPathParts() {
        return ["babel.config.js"];
    }
    getContent() {
        return `module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    "@babel/preset-typescript",
  ],
};
`;
    }
}
exports.default = BabelConfigFileCreator;
//# sourceMappingURL=BabelConfigFileCreator.js.map