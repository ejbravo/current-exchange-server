import { Router } from 'express';
import { IXlsxResponse, parseXlsxFile } from '../parser/parser';

export const ParserController: Router = Router();

ParserController.get('/', async (req, res, next) => {
  try {
    const url = 'https://www.snb.ch/en/aux/xlsx/current_exchange_rates.xlsx';
    const data: IXlsxResponse = await parseXlsxFile(url);
    res.status(200).send(data);
  } catch (error) {
    next(error);
  }
});
