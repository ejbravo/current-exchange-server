import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';

import { routes } from './routes/routes';

// Boot express
export const app: Application = express();
const rootPath: string = path.join(`${__dirname}/../`);

// CORS-enabled
app.use(cors());
app.use(morgan(`[:method] Route ":url" Status :status (:response-time ms)`));
app.use(express.static(path.join(rootPath, 'build')));
console.log(rootPath);

// Application routing
routes(app);

app.get('/*', (req, res) => {
  res.sendFile(path.join(rootPath, 'build', 'index.html'));
});
