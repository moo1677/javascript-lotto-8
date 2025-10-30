import { Console } from '@woowacourse/mission-utils';

export default class OutputView {
  outputLottoCount(purchaseAmount) {
    Console.print(`${purchaseAmount / 1000}개를 구매했습니다.`);
  }
  outPutLottoNumber(lottoArray) {
    lottoArray.forEach((lottos) => {
      Console.print(`[${lottos.number.join(', ')}]`);
    });
  }
}
