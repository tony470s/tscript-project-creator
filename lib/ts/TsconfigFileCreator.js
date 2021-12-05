"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FileCreator_1 = __importDefault(require("../FileCreator"));
class PrettierrcFileCreator extends FileCreator_1.default {
    getPathParts() {
        return ["tsconfig.json"];
    }
    getContent() {
        return `{
    "compilerOptions": {
        "module": "es2020",
        "target": "es2020",
        "moduleResolution": "node",
        "strict": true,
        "removeComments": true,
        "sourceMap": true,
        "declaration": false,
        "allowJs": true,
        "esModuleInterop": true,
        "outDir": "lib",
    },
    "include": ["src/**/*"],
    "exclude": ["node_modules"]
}
`;
    }
}
exports.default = PrettierrcFileCreator;
//# sourceMappingURL=TsconfigFileCreator.js.map