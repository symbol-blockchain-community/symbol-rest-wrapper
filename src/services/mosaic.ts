import { MosaicItem } from '../@types/symbol.js';
import FetchNode from './fetch-node.js';

export class Mosaic {
  private constructor() {}

  static async convertToAbsolute(mosaics: MosaicItem[]): Promise<MosaicItem<number>[]> {
    const mosaicIds: string[] = await Promise.all(mosaics.map(async (m) => m.id));

    const mosaicInfo = await new FetchNode().post<{ [key: string]: any }[]>('/mosaics', { mosaicIds });
    if (mosaicInfo instanceof Error) {
      throw mosaicInfo;
    }

    const converted: MosaicItem<number>[] = [];
    for (const mosaic of mosaicInfo) {
      const { id, divisibility } = mosaic.mosaic;
      const inputMosaic: MosaicItem = mosaics.find((e) => e.id === id)!;
      const numericAmount: number = Number(inputMosaic.amount).toString() === 'NaN' ? 0 : Number(inputMosaic.amount);
      converted.push({
        id: id,
        divisivility: divisibility,
        amount: numericAmount / Math.pow(10, divisibility)
      });
    }
    return converted;
  }
}
