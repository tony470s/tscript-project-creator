"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FileCreator_1 = __importDefault(require("../../FileCreator"));
class IndexFileCreator extends FileCreator_1.default {
    getPathParts() {
        return ["src", "index.ts"];
    }
    getContent() {
        return `import { IContext } from "tscript-std";
import { hello } from "./hello";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function main(ctx: IContext): void {
  console.log(hello());
}
`;
    }
}
exports.default = IndexFileCreator;
//# sourceMappingURL=IndexFileCreator.js.map