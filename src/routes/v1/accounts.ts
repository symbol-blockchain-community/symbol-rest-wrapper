import { type Request, type Response } from 'express';
import FetchNode from '../../services/fetch-node.js';
import { Account } from '../../services/account.js';
import { Address } from '../../util/Address.js';
import { AccountApiGetAccountRequest } from '../../@types/schema/v1/apis/AccountApi.js';
import { GetAccount200Response } from '../../@types/schema/v1/models/GetAccount200Response.js';
import { PostAccount200Response } from '../../@types/schema/v1/models/PostAccount200Response.js';
import { NETWORK_TYPE } from '../../services/config.js';
import { PublicAccount } from '../../services/public-account.js';
import { Mosaic } from '../../services/mosaic.js';
import { MosaicItem } from '../../@types/symbol.js';

/** アカウント情報を返却する */
export async function getAccountInfo(
  req: Request<AccountApiGetAccountRequest, null, null>,
  res: Response<GetAccount200Response>
) {
  const { accountId } = req.params;
  const response = await new FetchNode().get<GetAccount200Response>(`/accounts/${accountId}`);

  if (response instanceof Error) {
    throw response;
  }

  const account = PublicAccount.createFromPublicKey(response.account.publicKey, NETWORK_TYPE);
  response.account.address = account.address.plain();

  // mosaics を絶対値と divisivility 付与
  const convertedMosaics: MosaicItem<number>[] = await Mosaic.convertToAbsolute(response.account.mosaics);
  response.account.mosaics = convertedMosaics;
  response.account.addressHeight = Number(response.account.addressHeight);
  response.account.publicKeyHeight = Number(response.account.publicKeyHeight);
  response.account.importanceHeight = Number(response.account.importanceHeight);
  response.account.importance = Number(response.account.importance);

  if (response instanceof Error) {
    throw response;
  } else {
    res.status(200).json(response);
  }
}

/** 新規アカウントを作成する */
export async function createAccount(req: Request<null, null, null>, res: Response<PostAccount200Response>) {
  const account = Account.generateNewAccount();
  const address = Address.createFromPublicKey(account.publicKey.toString(), NETWORK_TYPE);

  res.status(200).json({
    account: {
      address: address.plain(),
      privateKey: account.privateKey.toString(),
      publicKey: account.publicKey.toString()
    }
  });
}
