import { Console } from '@woowacourse/mission-utils';

export default class InputView {
  async inputCache() {
    const cache = await Console.readLineAsync('구입금액을 입력해 주세요.');
    return cache;
  }
}
