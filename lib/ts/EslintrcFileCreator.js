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
        "plugin:@typescript-eslint/recommended",
        "eslint-config-prettier"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 2020,
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "prettier",
        "jest"
    ],
    "rules": {
        "prettier/prettier": "warn",
        "@typescript-eslint/no-var-requires": "off"
    }
}
`;
    }
}
exports.default = EslintrcFileCreator;
//# sourceMappingURL=EslintrcFileCreator.js.map