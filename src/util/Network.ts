import { NetworkType } from '../@types/schema/v1/index.js';
import { InvalidValueError } from '../services/errors.js';

export function getIntNetworkType(type: NetworkType): number {
  if (type === 'mainnet') {
    return 104;
  } else if (type === 'testnet') {
    return 152;
  } else {
    throw new InvalidValueError(`Invalid network type: ${type}`);
  }
}

export function getStrNetworkType(type: number): string {
  if (type === 104) {
    return 'mainnet';
  } else if (type === 152) {
    return 'testnet';
  } else {
    throw new InvalidValueError(`Invalid network type: ${type}`);
  }
}
