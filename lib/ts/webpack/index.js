"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TscriptLoaderFileCreator_1 = __importDefault(require("./TscriptLoaderFileCreator"));
const WebpackDevServerFileCreator_1 = __importDefault(require("./WebpackDevServerFileCreator"));
const WebpackConfigFileCreator_1 = __importDefault(require("./WebpackConfigFileCreator"));
const BundleChangeNotifierPluginFileCreator_1 = __importDefault(require("./BundleChangeNotifierPluginFileCreator"));
const BundleAdjustmentPluginFileCreator_1 = __importDefault(require("./BundleAdjustmentPluginFileCreator"));
function createWebpackDir(projectConfig) {
    new TscriptLoaderFileCreator_1.default(projectConfig).create();
    new WebpackDevServerFileCreator_1.default(projectConfig).create();
    new WebpackConfigFileCreator_1.default(projectConfig).create();
    new BundleChangeNotifierPluginFileCreator_1.default(projectConfig).create();
    new BundleAdjustmentPluginFileCreator_1.default(projectConfig).create();
}
exports.default = createWebpackDir;
//# sourceMappingURL=index.js.map