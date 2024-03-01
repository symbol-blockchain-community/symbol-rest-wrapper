export type NetworkType = 'testnet' | 'mainnet';
export type NodeListItem = {
  domain: string;
  port: number;
  isSsl: boolean;
  networkType: NetworkType;
  enable: boolean;
  profile: string;
};

export interface MosaicItem<T = string | number> {
  id: string;
  amount: T;
  divisivility?: number;
}
