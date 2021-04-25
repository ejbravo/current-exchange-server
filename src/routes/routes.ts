import { Application, Router } from 'express';

import log from '../traces/logger';

import { HealthcheckController } from '../controllers/HealthcheckController';
import { ParserController } from '../controllers/ParserController';

const _routes: [string, Router][] = [
  ['/healthcheck', HealthcheckController],
  ['/api/current-exchange', ParserController],
];

export const routes = (app: Application) => {
  log.debug('Available routes:');
  _routes.map((route) => {
    const [url, controller] = route;
    log.debug(`Route: "${url}"`);
    app.use(url, controller);
  });
};
