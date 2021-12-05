"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FileCreator_1 = __importDefault(require("../FileCreator"));
class PrettierrcFileCreator extends FileCreator_1.default {
    getPathParts() {
        return [".prettierrc"];
    }
    getContent() {
        return `{
    "printWidth": 80,
    "trailingComma": "es5",
    "tabWidth": 2,
    "useTabs": false,
    "semi": true,
    "singleQuote": false
}
`;
    }
}
exports.default = PrettierrcFileCreator;
//# sourceMappingURL=PrettierrcFileCreator.js.map