import 'dotenv/config';
import express, { type Request, type Response } from 'express';
import 'express-async-errors';
import * as OpenApiValidator from 'express-openapi-validator';
import { HttpError } from 'express-openapi-validator/dist/framework/types.js';
import helmet from 'helmet';
import path from 'node:path';
import cors from 'cors';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { logger, pino } from './services/logger.js';
import { ErrorResponse } from './@types/response.js';
import router from './routes/v1/index.js';
import { PORT, SERVER_DOMAIN, SERVER_SCHEMA } from './services/config.js';
import swaggerUI from 'swagger-ui-express';
import yaml from 'yaml';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const swaggerPath = path.resolve(__dirname, '..', 'schema', 'v1.yaml');
const swagger = yaml.parse(fs.readFileSync(swaggerPath, { encoding: 'utf8' }));

if (process.env.NODE_ENV === 'production') {
  swagger.servers = [{ description: 'default', url: `${SERVER_SCHEMA}://${SERVER_DOMAIN}:${PORT}` }];
}

const app = express();
app.use(pino);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/web', express.static(path.join(__dirname, 'views')));
// require load before helmet middleware
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swagger));
app.use(cors());
app.use(helmet());
app.use(
  OpenApiValidator.middleware({
    apiSpec: swaggerPath,
    validateRequests: true,
    validateResponses: true,
    ignorePaths: /\/docs.*/
  })
);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: HttpError, req: Request, res: Response<ErrorResponse>, next: unknown) => {
  return res.status(err.status).json({
    status: err.status,
    message: err.name
  });
});

app.use(router);
app.use('/v1', router);

app.listen(PORT, () => {
  logger.info(`Server started: ${SERVER_SCHEMA}://${SERVER_DOMAIN}:${PORT}`);
});
