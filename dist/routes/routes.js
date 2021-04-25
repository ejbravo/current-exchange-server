"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const logger_1 = __importDefault(require("../traces/logger"));
const HealthcheckController_1 = require("../controllers/HealthcheckController");
const ParserController_1 = require("../controllers/ParserController");
const _routes = [
    ['/healthcheck', HealthcheckController_1.HealthcheckController],
    ['/api/current-exchange', ParserController_1.ParserController],
];
const routes = (app) => {
    logger_1.default.debug('Available routes:');
    _routes.map((route) => {
        const [url, controller] = route;
        logger_1.default.debug(`Route: "${url}"`);
        app.use(url, controller);
    });
};
exports.routes = routes;
//# sourceMappingURL=routes.js.map