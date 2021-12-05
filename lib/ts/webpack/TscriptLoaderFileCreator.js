"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FileCreator_1 = __importDefault(require("../../FileCreator"));
class TscriptLoaderFileCreator extends FileCreator_1.default {
    getPathParts() {
        return ["webpack", "tscript-loader.js"];
    }
    getContent() {
        return `const path = require("path");
const { Compiler } = require("tscript-compiler");

module.exports = function (source, map, meta) {
  let moduleConfig = { isMain: false };
  const paths = this.request.split("!");
  if (paths[paths.length - 1].endsWith(path.join("src", "index.ts"))) {
    moduleConfig.isMain = true;
  }

  const result = new Compiler().compile(source, moduleConfig);
  if (result.errors.length > 0) {
    throw result.errors;
  }
  const icode = result.icode;
  this.callback(null, icode, map, meta);
  return;
};
`;
    }
}
exports.default = TscriptLoaderFileCreator;
//# sourceMappingURL=TscriptLoaderFileCreator.js.map