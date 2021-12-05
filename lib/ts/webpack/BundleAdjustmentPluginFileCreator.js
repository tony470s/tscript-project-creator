"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FileCreator_1 = __importDefault(require("../../FileCreator"));
class TscriptLoaderFileCreator extends FileCreator_1.default {
    getPathParts() {
        return ["webpack", "bundle-adjustment-plugin.js"];
    }
    getContent() {
        return `const pluginName = "BundleAdjustmentPlugin";
const { Compilation } = require("webpack");
const { ConcatSource } = require("webpack-sources");

class BundleAdjustmentPlugin {
  constructor(tscriptId) {
    this.tscriptId = tscriptId;
  }

  apply(compiler) {
    compiler.hooks.make.tap(pluginName, (compilation) => {
      compilation.hooks.processAssets.tap(
        {
          name: pluginName,
          stage: Compilation.PROCESS_ASSETS_STAGE_ADDITIONS,
        },
        (/*assets*/) => {
          compilation.updateAsset("tscript.js", (oldSource) => {
            const newSource = \`globalThis.__tscript_\${
              this.tscriptId
            }_initializer__=(std)=>{const __tscript_input__=typeof __tscript_input_m__!=="undefined"?__tscript_input_m__:std.input;let __tscript_ctx__;let __tscript_draw_specs__=[];\${oldSource.source()};return __tscript_\${
                this.tscriptId
              }__.__tscript_main__;}\`;
            return new ConcatSource(newSource);
          });
        }
      );

      compilation.hooks.processAssets.tap(
        {
          name: pluginName,
          stage: Compilation.PROCESS_ASSETS_STAGE_ADDITIONAL,
        },
        (assets) => {
          compilation.emitAsset(
            "tscript.js.map",
            new ConcatSource(JSON.stringify(assets["tscript.js"].map()))
          );
        }
      );

      compilation.hooks.afterProcessAssets.tap(pluginName, (/*assets*/) => {
        compilation.updateAsset("tscript.js", (oldSource) => {
          return new ConcatSource(
            \`\${oldSource.source()}\\n//# sourceMappingURL=tscript.js.map\`
          );
        });
      });
    });
  }
}

module.exports = BundleAdjustmentPlugin;
`;
    }
}
exports.default = TscriptLoaderFileCreator;
//# sourceMappingURL=BundleAdjustmentPluginFileCreator.js.map