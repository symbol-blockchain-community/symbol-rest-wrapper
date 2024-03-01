import { NetworkType } from '../@types/schema/v1/index.js';

export const SERVER_SCHEMA: string = process.env.SERVER_SCHEMA || 'http';
export const SERVER_DOMAIN: string = process.env.SERVER_DOMAIN || '127.0.0.1';
export const PORT: number = Number(process.env.PORT).toString() === 'NaN' ? 3000 : Number(process.env.PORT);

export const NODE_URL: string = process.env.NODE_URL || 'http://127.0.0.1:3000';
export const NETWORK_TYPE: NetworkType = (process.env.NETWORK_TYPE as NetworkType) || 'mainnet';
export const NODE_LIST_PATH: string = process.env.NODE_LIST_PATH || 'data/node-list.json';
export const GENERATION_HASH: string =
  process.env.GENERATION_HASH || '57F7DA205008026C776CB6AED843393F04CD458E0AA2D9F1D5F31A402072B2D6';
