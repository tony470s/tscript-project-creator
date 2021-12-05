"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createJavaScriptProject = void 0;
const shelljs = __importStar(require("shelljs"));
const webpack_1 = __importDefault(require("./webpack"));
const src_1 = __importDefault(require("./src"));
const test_1 = __importDefault(require("./test"));
const BabelConfigFileCreator_1 = __importDefault(require("./BabelConfigFileCreator"));
const EslintrcFileCreator_1 = __importDefault(require("./EslintrcFileCreator"));
const GitignoreFileCreator_1 = __importDefault(require("./GitignoreFileCreator"));
const JestConfigFileCreator_1 = __importDefault(require("./JestConfigFileCreator"));
const PackageFileCreator_1 = __importDefault(require("./PackageFileCreator"));
const PrettierrcFileCreator_1 = __importDefault(require("./PrettierrcFileCreator"));
function createJavaScriptProject(projectConfig) {
    cleanDir(projectConfig);
    webpack_1.default(projectConfig);
    src_1.default(projectConfig);
    test_1.default(projectConfig);
    new BabelConfigFileCreator_1.default(projectConfig).create();
    new EslintrcFileCreator_1.default(projectConfig).create();
    new GitignoreFileCreator_1.default(projectConfig).create();
    new JestConfigFileCreator_1.default(projectConfig).create();
    new PackageFileCreator_1.default(projectConfig).create();
    new PrettierrcFileCreator_1.default(projectConfig).create();
}
exports.createJavaScriptProject = createJavaScriptProject;
function cleanDir(projectConfig) {
    if (projectConfig.id &&
        projectConfig.dir.endsWith(projectConfig.id) &&
        shelljs.test("-d", projectConfig.dir)) {
        shelljs.rm("-rf", projectConfig.dir);
    }
}
//# sourceMappingURL=index.js.map