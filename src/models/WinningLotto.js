import Lotto from './Lotto';
export default class WinningLotto {
  #winningNumbers;
  #bonusNumber;
  constructor(winningNumbers, bonusNumber) {
    this.#winningNumbers = new Lotto(winningNumbers);
    this.#bonusNumber = bonusNumber;
  }
}
