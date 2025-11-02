import { Console } from '@woowacourse/mission-utils';
import { PRICE_INFO } from '../Constant/lottoConstant.js';
export default class OutputView {
  static outputLottoCount(purchaseAmount) {
    Console.print(`\n${purchaseAmount}개를 구매했습니다.`);
  }
  static outPutLottoNumber(lottos) {
    Console.print(`[${lottos.join(', ')}]`);
  }
  static outPutLottoResult(resultArray, returnRatio) {
    Console.print('\n당첨 통계\n---');
    Object.keys(PRICE_INFO).forEach((rank) => {
      const { text, prize } = PRICE_INFO[rank];
      const countLotto = resultArray[PRICE_INFO[rank].key];
      Console.print(`${text} (${prize.toLocaleString()}원) - ${countLotto}개`);
    });
    Console.print(`총 수익률은 ${returnRatio}%입니다.`);
  }
}
