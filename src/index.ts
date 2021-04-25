import { app } from './server';
import log from './traces/logger';

const port: number = 5000;

// Start server
app.listen(port, () => log.info(`Server is listening on port ${port}`));
