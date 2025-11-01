import { LOTTO_CONSTANTS } from '../Constant/lottoConstant.js';

export default class WinningLotto {
  #lotto;
  #bonusNumber;
  constructor(winningLotto, bonusNumber) {
    this.#lotto = winningLotto;
    this.#bonusNumber = this.#validateBonusNumber(bonusNumber);
  }
  #validateBonusNumber(bonusNumber) {
    this.#validateRange(bonusNumber);
    this.#validateNoDuplicates(bonusNumber);
    return bonusNumber;
  }
  #validateRange(bonusNumber) {
    const isValid = (number) =>
      Number.isInteger(number) &&
      number >= LOTTO_CONSTANTS.MIN_NUMBER &&
      number <= LOTTO_CONSTANTS.MAX_NUMBER;
    if (!isValid(bonusNumber))
      throw new Error('[ERROR] 보너스 번호는 1에서 45사이의 숫자 입니다.');
  }
  #validateNoDuplicates(bonusNumber) {
    const winnerNumbers = this.#lotto.getNumber();
    winnerNumbers.forEach((number) => {
      if (number === bonusNumber)
        throw new Error(
          '[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.',
        );
    });
  }
}
