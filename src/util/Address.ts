import { NetworkType } from '../@types/symbol.js';
import sdk from 'symbol-sdk';

export class Address {
  private constructor(private rawAddress: string) {}

  static createFromPublicKey(publicKey: string, networkType: NetworkType): Address {
    const facade = new sdk.facade.SymbolFacade(networkType);
    const rawAddress: string = facade.network.publicKeyToAddress(new sdk.PublicKey(publicKey)).toString();
    return new Address(rawAddress);
  }

  static createFromRawAddress(rawAddress: string): Address {
    return new Address(rawAddress);
  }

  static createFromUnresolved(unresolvedAddress: string): Address {
    const uint8 = sdk.utils.hexToUint8(unresolvedAddress);
    const rawAddress: string = new sdk.facade.SymbolFacade.Address(uint8).toString();
    return new Address(rawAddress);
  }

  public pretty(): string {
    return this.rawAddress.match(/.{1,6}/g)!.join('-');
  }

  public plain(): string {
    return this.rawAddress.replace(/-/g, '');
  }
}
