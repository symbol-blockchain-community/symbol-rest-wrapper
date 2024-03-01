import type { Request, Response } from 'express';
import {
  PostConvertPublicKeyToPlainAddress200Response,
  PostConvertPublicKeyToPlainAddressRequest
} from '../../@types/schema/v1/index.js';
import { PublicAccount } from '../../services/public-account.js';
import { NETWORK_TYPE } from '../../services/config.js';

/**
 * get plain address from publickey
 * @param req
 * @param res
 */
export async function getAddressFromPublicKey(
  req: Request<null, null, PostConvertPublicKeyToPlainAddressRequest>,
  res: Response<PostConvertPublicKeyToPlainAddress200Response>
) {
  const { from } = req.body;

  const account = PublicAccount.createFromPublicKey(from.publicKey, NETWORK_TYPE);

  res.status(200).json({
    result: {
      address: account.address.plain()
    }
  });
}
