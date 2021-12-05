"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HelloTestFileCreator_1 = __importDefault(require("./HelloTestFileCreator"));
function createTestDir(projectConfig) {
    new HelloTestFileCreator_1.default(projectConfig).create();
}
exports.default = createTestDir;
//# sourceMappingURL=index.js.map