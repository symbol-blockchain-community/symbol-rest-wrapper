import { JwtPayload } from 'jsonwebtoken';

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production';
      SERVER_SCHEMA: string | undefined;
      SERVER_DOMAIN: string | undefined;
      PORT: string | undefined;
      NODE_URL: string | undefined;
      NODE_LIST_PATH: string | undefined;
      NETWORK_TYPE: string | undefined;
      GENERATION_HASH: string | undefined;
    }
  }
}

declare global {
  namespace Express {
    interface Request {}
    interface Response {}
    interface Locals {
      user?: JwtPayload;
    }
    interface Application {}
  }
}

declare module 'express-async-errors';

export {};
