import sdk from 'symbol-sdk';

export class Account {
  private constructor() {}

  static generateNewAccount() {
    const privateKey = sdk.PrivateKey.random();
    const keyPair = new sdk.symbol.KeyPair(privateKey);
    return keyPair;
  }
}
