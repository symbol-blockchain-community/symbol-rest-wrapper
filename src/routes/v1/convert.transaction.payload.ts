import type { Request, Response } from 'express';
import {
  PostConvertPayloadToTransaction200Response,
  PostConvertPayloadToTransactionRequest
} from '../../@types/schema/v1/index.js';
import { Transaction } from '../../services/transaction.js';

/**
 * get plain address from UnresolvedAddress
 * @param req
 * @param res
 */
export async function getTransactionFromPayload(
  req: Request<null, null, PostConvertPayloadToTransactionRequest>,
  res: Response<PostConvertPayloadToTransaction200Response>
) {
  const { from } = req.body;

  const transaction = Transaction.generateFromPayload(from.payload);

  res.status(200).json({
    result: transaction.toJSON()
  });
}
