"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FileCreator_1 = __importDefault(require("../../FileCreator"));
class HelloTestFileCreator extends FileCreator_1.default {
    getPathParts() {
        return ["test", "hello.test.js"];
    }
    getContent() {
        return `import { hello } from "../src/hello";

test("hello", () => {
  expect(hello()).toStrictEqual("hello");
});
`;
    }
}
exports.default = HelloTestFileCreator;
//# sourceMappingURL=HelloTestFileCreator.js.map