"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FileCreator_1 = __importDefault(require("../../FileCreator"));
class TscriptLoaderFileCreator extends FileCreator_1.default {
    getPathParts() {
        return ["webpack", "bundle-change-notifier-plugin.js"];
    }
    getContent() {
        return `const { Client } = require("localbridge");
const path = require("path");

class BundleChangeNotifierPlugin {
  constructor(option) {
    this.options = option;
  }

  apply(compiler) {
    compiler.hooks.assetEmitted.tap("assetEmitted", (file /*, info*/) => {
      if (file.endsWith("map")) {
        this._notify();
      }
    });
  }

  _notify() {
    const localbridge = new Client(this.options.sockPath);
    localbridge
      .request({
        type: "onBundleChanged",
        value: {
          bundle: path.resolve(__dirname, "..", "dist", "tscript.js"),
          sourceMap: path.resolve(__dirname, "..", "dist", "tscript.js.map"),
          tscriptId: this.options.tscriptId,
        },
      })
      .then((value) => {
        console.log(\`Notify successfully: \${value}\`);
      })
      .catch((reason) => {
        console.warn(\`Failed to notify: \${reason}\`);
      });
  }
}

module.exports = BundleChangeNotifierPlugin;
`;
    }
}
exports.default = TscriptLoaderFileCreator;
//# sourceMappingURL=BundleChangeNotifierPluginFileCreator.js.map