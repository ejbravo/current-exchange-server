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
exports.parseXlsxFile = void 0;
const axios_1 = __importDefault(require("axios"));
const xlsx_1 = __importDefault(require("xlsx"));
/**
 * Parse xlsx file
 * @param {string} url xlsx file url
 * @return {IXlsxResponse} Parsed data
 */
function parseXlsxFile(url) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const app = 'vnd.openxmlformats-officedocument.spreadsheetml.sheet';
            const { data } = yield axios_1.default.get(url, {
                responseType: 'arraybuffer',
                headers: { Accept: `application/${app}` },
            });
            const xlsxData = Array.from(data);
            const workbook = xlsx_1.default.read(xlsxData, { type: 'array' });
            const sheet = workbook.Sheets[workbook.SheetNames[0]];
            const json = xlsx_1.default.utils.sheet_to_json(sheet, { raw: false });
            // metadata
            const metadataJson = json.filter((item, key) => key < 4);
            const metadata = metadataJson.map((item) => {
                const keys = Object.keys(item);
                const currency = item[keys[0]];
                const label = item[keys[2]];
                const date = parseDate(keys[5]);
                return {
                    currency: currency.toLowerCase(),
                    label,
                    date,
                };
            });
            // info
            const currentExchangeJson = json.filter((item, key) => key > 4);
            const currentExchange = currentExchangeJson.map((item) => {
                const items = Object.keys(item).map((index) => item[index]);
                const [date, eur, usd, jpy, gbp] = items;
                return {
                    date: parseDate(date),
                    eur: parseFloat(eur),
                    usd: parseFloat(usd),
                    jpy: parseFloat(jpy),
                    gbp: parseFloat(gbp),
                };
            });
            return {
                metadata,
                currentExchange,
            };
        }
        catch (error) {
            return Promise.reject(error);
        }
    });
}
exports.parseXlsxFile = parseXlsxFile;
/**
 * Parse date from string to timestamp
 * @param {string} date from xlsx format
 * @return {number} timestamp
 */
function parseDate(date) {
    return Date.parse(date);
}
//# sourceMappingURL=parser.js.map