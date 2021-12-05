"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FileCreator_1 = __importDefault(require("../FileCreator"));
class GitignoreFileCreator extends FileCreator_1.default {
    getPathParts() {
        return [".gitignore"];
    }
    getContent() {
        return `.git
CVS
.svn
.hg
.lock-wscript
.wafpickle-N
.*.swp
.DS_Store
._*
npm-debug.log
.npmrc
node_modules
config.gypi
*.orig
yarn-error.log
.idea
.vscode
index.html
coverage
dist
`;
    }
}
exports.default = GitignoreFileCreator;
//# sourceMappingURL=GitignoreFileCreator.js.map