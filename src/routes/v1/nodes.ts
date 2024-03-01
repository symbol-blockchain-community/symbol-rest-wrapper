import { type Request, type Response } from 'express';
import { GetNodes200Response } from '../../@types/schema/v1/models/GetNodes200Response.js';
import { readFileSync } from 'fs';
import { resolve } from 'path';
import { NODE_LIST_PATH } from '../../services/config.js';
import { NodeListItem } from '../../@types/symbol.js';
import FetchNode from '../../services/fetch-node.js';
import { NodeApiGetNodesRequest } from '../../@types/schema/v1/apis/NodeApi.js';
import { NetworkType } from '../../@types/schema/v1/index.js';

/** response with list of live nodes */
export async function getActiveNodeList(
  req: Request<null, null, null, NodeApiGetNodesRequest>,
  res: Response<GetNodes200Response>
) {
  const { networkType } = req.query;
  const json: NodeListItem[] = JSON.parse(readFileSync(resolve(NODE_LIST_PATH)).toString());

  const pipe = await Promise.all(
    json
      .filter((e) => e.enable)
      .filter((e) => e.networkType === (networkType ? networkType : ('mainnet' as NetworkType)))
      .map(async (n) => {
        return (await new FetchNode(`${n.domain}:${n.port}`).get('node/health')) instanceof Error ? null : n;
      })
  );

  const result: GetNodes200Response['nodes'] = [];
  for (const node of pipe) {
    if (node === null) continue;
    result.push({
      domain: node.domain,
      isSsl: node.isSsl,
      networkType: node.networkType,
      port: node.port
    });
  }

  res.status(200).json({ nodes: result });
}
