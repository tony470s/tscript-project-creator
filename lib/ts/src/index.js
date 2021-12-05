"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HelloFileCreator_1 = __importDefault(require("./HelloFileCreator"));
const IndexFileCreator_1 = __importDefault(require("./IndexFileCreator"));
function createSrcDir(projectConfig) {
    new HelloFileCreator_1.default(projectConfig).create();
    new IndexFileCreator_1.default(projectConfig).create();
}
exports.default = createSrcDir;
//# sourceMappingURL=index.js.map