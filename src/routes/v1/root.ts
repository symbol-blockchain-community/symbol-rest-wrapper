import type { Request, Response } from 'express';
import { GetApiStatus200Response, NetworkType } from '../../@types/schema/v1/index.js';
import FetchNode from '../../services/fetch-node.js';

export async function getApiStatus(_: Request<null, null, null>, res: Response<GetApiStatus200Response>) {
  const response = await new FetchNode().get<{ name: string }>('/network');

  if (response instanceof Error) {
    throw response;
  }

  res.status(200).json({
    name: 'symbol-rest-wrapper',
    status: 'ok',
    networkType: response.name as NetworkType
  });
}
