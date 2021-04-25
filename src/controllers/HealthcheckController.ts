import { Router } from 'express';

export const HealthcheckController: Router = Router();

HealthcheckController.get('/', async (req, res, next) => {
  try {
    res.status(200).send({ data: 'Server is running' });
  } catch (error) {
    next(error);
  }
});
