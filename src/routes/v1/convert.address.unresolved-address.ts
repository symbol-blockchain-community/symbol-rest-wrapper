import type { Request, Response } from 'express';
import {
  PostConvertUnresolvedAddressToPlainAddress200Response,
  PostConvertUnresolvedAddressToPlainAddressRequest
} from '../../@types/schema/v1/index.js';
import { Address } from '../../util/Address.js';

/**
 * get plain address from UnresolvedAddress
 * @param req
 * @param res
 */
export async function getAddressFromUnresolbedAddress(
  req: Request<null, null, PostConvertUnresolvedAddressToPlainAddressRequest>,
  res: Response<PostConvertUnresolvedAddressToPlainAddress200Response>
) {
  const { from } = req.body;
  const address = Address.createFromUnresolved(from.unresolvedAddress);

  res.status(200).json({
    result: {
      address: address.plain()
    }
  });
}
