import winston, { format } from 'winston';

type Color = 'blue' | 'red' | 'yellow' | 'green';

interface Levels {
  [key: string]: number;
}

interface Colors {
  [key: string]: Color;
}

const { combine, printf } = format;

const levels: Levels = {
  info: 0,
  error: 1,
  warn: 2,
  debug: 3,
};

const colors: Colors = {
  info: 'blue',
  error: 'red',
  warn: 'yellow',
  debug: 'green',
};

const myCustomLevels = { levels, colors };

winston.addColors(myCustomLevels.colors);

const logFormat = printf(({ level, message }) => {
  return `[${level}] ${message}`;
});

const log = winston.createLogger({
  format: combine(winston.format.colorize(), winston.format.json(), logFormat),
  levels: myCustomLevels.levels,
  transports: [new winston.transports.Console({ level: 'debug' })],
});

export default log;
