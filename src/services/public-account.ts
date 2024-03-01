import { NetworkType } from '../@types/schema/v1/index.js';
import { Address } from '../util/Address.js';

export class PublicAccount {
  private constructor(private _publicKey: string, private _networkType: NetworkType) {}

  static createFromPublicKey(publicKey: string, networkType: NetworkType) {
    return new PublicAccount(publicKey, networkType);
  }

  public get address(): Address {
    return Address.createFromPublicKey(this._publicKey, this._networkType);
  }

  public get publicKey(): string {
    return this._publicKey;
  }
}
