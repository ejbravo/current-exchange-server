"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const routes_1 = require("./routes/routes");
// Boot express
exports.app = express_1.default();
const rootPath = path_1.default.join(`${__dirname}/../`);
// CORS-enabled
exports.app.use(cors_1.default());
exports.app.use(morgan_1.default(`[:method] Route ":url" Status :status (:response-time ms)`));
exports.app.use(express_1.default.static(path_1.default.join(rootPath, 'build')));
console.log(rootPath);
// Application routing
routes_1.routes(exports.app);
exports.app.get('/*', (req, res) => {
    res.sendFile(path_1.default.join(rootPath, 'build', 'index.html'));
});
//# sourceMappingURL=server.js.map