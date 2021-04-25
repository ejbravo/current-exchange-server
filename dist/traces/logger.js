"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = __importStar(require("winston"));
const { combine, printf } = winston_1.format;
const levels = {
    info: 0,
    error: 1,
    warn: 2,
    debug: 3,
};
const colors = {
    info: 'blue',
    error: 'red',
    warn: 'yellow',
    debug: 'green',
};
const myCustomLevels = { levels, colors };
winston_1.default.addColors(myCustomLevels.colors);
const logFormat = printf(({ level, message }) => {
    return `[${level}] ${message}`;
});
const log = winston_1.default.createLogger({
    format: combine(winston_1.default.format.colorize(), winston_1.default.format.json(), logFormat),
    levels: myCustomLevels.levels,
    transports: [new winston_1.default.transports.Console({ level: 'debug' })],
});
exports.default = log;
//# sourceMappingURL=logger.js.map