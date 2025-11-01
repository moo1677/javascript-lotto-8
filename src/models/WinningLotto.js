import { LOTTO_CONSTANTS } from '../Constant/lottoConstant.js';

export default class WinningLotto {
  #lotto;
  #bonusNumber;
  constructor(winningLotto, bonusNumber) {
    this.#lotto = winningLotto;
    this.#bonusNumber = bonusNumber;
  }
}
