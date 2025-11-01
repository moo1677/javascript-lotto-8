import { Console } from '@woowacourse/mission-utils';

export default class OutputView {
  static outputLottoCount(purchaseAmount) {
    Console.print(`${purchaseAmount}개를 구매했습니다.`);
  }
  static outPutLottoNumber(lottos) {
    Console.print(`[${lottos.join(', ')}]`);
  }
}
