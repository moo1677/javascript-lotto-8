import { Console } from '@woowacourse/mission-utils';

export default class InputView {
  static async inputCache() {
    const cache = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
    return cache;
  }
  static async inputWinningLottoNumber() {
    const winningLottoNumber =
      await Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
    return winningLottoNumber;
  }
  static async inputBonusNumber() {
    const bonusNumber = await Console.readLineAsync(
      '\n보너스 번호를 입력해 주세요.\n',
    );
    return bonusNumber;
  }
}
