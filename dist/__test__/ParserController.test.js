"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const server_1 = require("../server");
describe('Test ParserController', () => {
    it('Request /api/current-exchange should return parsed data', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield supertest_1.default(server_1.app).get('/api/current-exchange').send();
        if (result && result.body && result.body.data) {
            const expected = Object.keys(result.body.data);
            const keys = ['metadata', 'currentExchange'];
            expect(result.status).toBe(200);
            expect(expected).toEqual(expect.arrayContaining(keys));
        }
    }));
});
//# sourceMappingURL=ParserController.test.js.map