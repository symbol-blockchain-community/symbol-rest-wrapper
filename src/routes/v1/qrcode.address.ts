import type { Request, Response } from 'express';
import type { QrcodeApiGetQrCodeForAddressRequest } from '../../@types/schema/v1/index.js';
import { AddressQR, QRCodeGenerator } from 'symbol-qr-library';
import { getIntNetworkType } from '../../util/Network.js';
import { GENERATION_HASH, NETWORK_TYPE } from '../../services/config.js';

/**
 * get address qr code
 * @param req
 * @param res
 */
export async function getAddressQRCode(
  req: Request<null, null, null, QrcodeApiGetQrCodeForAddressRequest>,
  res: Response
) {
  const { address, name } = req.query;

  // create QR Code base64
  const qrCode: AddressQR = QRCodeGenerator.createExportAddress(
    name || 'my address',
    address,
    getIntNetworkType(NETWORK_TYPE),
    GENERATION_HASH
  );

  // get base64 notation for <img> HTML attribute
  const base64 = await new Promise<string>((ok) => {
    qrCode.toBase64().subscribe((e) => ok(e));
  });

  const bin = Buffer.from(base64.replace('data:image/png;base64,', ''), 'base64');

  res.writeHead(200, { 'Content-Type': 'image/jpeg' }).end(bin, 'binary');
}
