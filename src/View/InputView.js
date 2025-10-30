import { Console } from '@woowacourse/mission-utils';

export default class InputView {
  async inputCache() {
    const cache = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
    return cache;
  }
  async inputWinningLottoNumber() {
    const winningLottoNumber =
      await Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
    return winningLottoNumber;
  }
  async inputBonusNumber() {
    const bonusNumber =
      await Console.readLineAsync('보너스 번호를 입력해 주세요.\n');
    return bonusNumber;
  }
}
