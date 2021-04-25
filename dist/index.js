"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
const logger_1 = __importDefault(require("./traces/logger"));
const port = 5000;
// Start server
server_1.app.listen(port, () => logger_1.default.info(`Server is listening on port ${port}`));
//# sourceMappingURL=index.js.map