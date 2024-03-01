import sdk from 'symbol-sdk';
import { getStrNetworkType } from '../util/Network.js';

export class Transaction {
  private constructor(
    private version: number,
    private type: number,
    private signerPublicKey: string,
    private network: number,
    private deadline: number,
    private mosaics: { [key: string]: any },
    private message?: string,
    private maxFee?: number,
    private signature?: string
  ) {}

  static generateFromPayload(hexPayload: string) {
    const uint8Payload: Uint8Array = sdk.utils.hexToUint8(hexPayload);
    const transaction = sdk.symbol.TransactionFactory.deserialize(uint8Payload);
    const version = transaction.version;
    const signerPublicKey = new sdk.PublicKey(transaction.signerPublicKey.bytes).toString();
    const network = transaction.network.value;
    const deadline = Number(transaction.deadline);
    const mosaics = transaction.mosaics;
    const message = transaction.message ? new TextDecoder('utf-8').decode(transaction.message) : undefined;
    const maxFee = transaction.fee?.value ? Number(transaction.fee.value / BigInt(Math.pow(10, 6))) : undefined;
    const type = transaction.type.value;
    const signature = transaction.signature?.bytes
      ? new sdk.symbol.Signature(transaction.signature.bytes).toString()
      : undefined;
    return new Transaction(version, type, signerPublicKey, network, deadline, mosaics, message, maxFee, signature);
  }

  public toJSON(): any {
    const json: any = {
      version: this.version,
      type: this.type,
      signerPublicKey: this.signerPublicKey,
      network: this.network,
      deadline: this.deadline,
      mosaics: this.mosaics,
      message: this.message,
      maxFee: this.maxFee,
      signature: this.signature
    };

    for (const key in Object.keys(json)) {
      if (json[key] === undefined) {
        delete json[key];
      }
    }
    return json;
  }

  public serialize() {
    const facade = new sdk.facade.NemFacade(getStrNetworkType(this.network));
    const tx = facade.transactionFactory.create({
      type: 'transfer_transaction_v1',
      signerPublicKey: '87DA603E7BE5656C45692D5FC7F6D0EF8F24BB7A5C10ED5FDA8C5CFBC49FCBC8',
      fee: 1000000n,
      deadline: 41998024783n,
      recipientAddress: 'TCHBDENCLKEBILBPWP3JPB2XNY64OE7PYHHE32I',
      mosaics: [{ mosaicId: 0x7cdf3b117a3c40ccn, amount: 1000000n }]
    });

    return tx.serialize();
  }
}
