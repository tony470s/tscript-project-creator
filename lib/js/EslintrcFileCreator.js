"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FileCreator_1 = __importDefault(require("../FileCreator"));
class EslintrcFileCreator extends FileCreator_1.default {
    getPathParts() {
        return [".eslintrc.json"];
    }
    getContent() {
        return `{
    "env": {
        "browser": true,
        "node": true,
        "es6": true,
        "jest/globals": true
    },
    "extends": [
        "eslint:recommended",
        "eslint-config-prettier"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2020,
        "sourceType": "module"
    },
    "plugins": [
        "prettier",
        "jest"
    ],
    "rules": {
        "prettier/prettier": "warn"
    }
}
`;
    }
}
exports.default = EslintrcFileCreator;
//# sourceMappingURL=EslintrcFileCreator.js.map