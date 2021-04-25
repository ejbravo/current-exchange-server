import axios from 'axios';
import XLSX from 'xlsx';

type Currency = 'eur' | 'usd' | 'jpy' | 'gbp';

interface IMetadata {
  currency: Currency;
  label: string;
  date: number;
}

interface ICurrentExchange {
  [key: string]: number;
  date: number;
  eur: number;
  usd: number;
  jpy: number;
  gbp: number;
}

export interface IXlsxResponse {
  metadata: IMetadata[];
  currentExchange: ICurrentExchange[];
}

/**
 * Parse xlsx file
 * @param {string} url xlsx file url
 * @return {IXlsxResponse} Parsed data
 */
export async function parseXlsxFile(url: string): Promise<IXlsxResponse> {
  try {
    const app: string = 'vnd.openxmlformats-officedocument.spreadsheetml.sheet';
    const { data } = await axios.get(url, {
      responseType: 'arraybuffer',
      headers: { Accept: `application/${app}` },
    });

    const xlsxData = Array.from(data);
    const workbook = XLSX.read(xlsxData, { type: 'array' });
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const json = XLSX.utils.sheet_to_json(sheet, { raw: false });

    // metadata
    const metadataJson = json.filter((item, key: number) => key < 4);
    const metadata: IMetadata[] = metadataJson.map((item: any) => {
      const keys = Object.keys(item);
      const currency = item[keys[0]];
      const label = item[keys[2]];
      const date = parseDate(keys[5]);
      return {
        currency: currency.toLowerCase() as Currency,
        label,
        date,
      };
    });

    // info
    const currentExchangeJson = json.filter((item, key: number) => key > 4);
    const currentExchange = currentExchangeJson.map((item: any) => {
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
  } catch (error) {
    return Promise.reject(error);
  }
}

/**
 * Parse date from string to timestamp
 * @param {string} date from xlsx format
 * @return {number} timestamp
 */
function parseDate(date: string): number {
  return Date.parse(date);
}
