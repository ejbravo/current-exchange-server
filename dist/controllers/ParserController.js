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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParserController = void 0;
const express_1 = require("express");
const parser_1 = require("../parser/parser");
exports.ParserController = express_1.Router();
exports.ParserController.get('/', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const url = 'https://www.snb.ch/en/aux/xlsx/current_exchange_rates.xlsx';
        const data = yield parser_1.parseXlsxFile(url);
        res.status(200).send(data);
    }
    catch (error) {
        next(error);
    }
}));
//# sourceMappingURL=ParserController.js.map