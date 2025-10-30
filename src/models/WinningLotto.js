import Lotto from './Lotto';
export default class WinningLotto {
  #winningNumbers;
  #bonusNumber;
  constructor(winningNumbers, bonusNumber) {
    this.#winningNumbers = new Lotto(winningNumbers);
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
      number >= LOTTO_CONSTANTS.MIN_LOTTO_NUMBER &&
      number <= LOTTO_CONSTANTS.MAX_LOTTO_NUMBER;
    if (!isValid(bonusNumber))
      throw new Error('[ERROR] 보너스 번호는 1에서 45사이의 숫자 입니다.');
  }
  #validateNoDuplicates(bonusNumber) {
    const winnerNumbers = this.#winningNumbers.getNumber();
    winnerNumbers.forEach((number) => {
      if (number === bonusNumber) throw new Error('[ERROR]');
    });
    throw new Error('[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.');
  }
}
