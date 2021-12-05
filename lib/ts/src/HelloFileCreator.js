"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FileCreator_1 = __importDefault(require("../../FileCreator"));
class HelloFileCreator extends FileCreator_1.default {
    getPathParts() {
        return ["src", "hello.ts"];
    }
    getContent() {
        return `export function hello(): string {
  return "hello";
}
`;
    }
}
exports.default = HelloFileCreator;
//# sourceMappingURL=HelloFileCreator.js.map