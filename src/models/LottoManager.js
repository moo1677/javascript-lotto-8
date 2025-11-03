import Lotto from './Lotto.js';
import randomNumbers from '../utils/randomNumbers.js';
import { LOTTO_CONSTANTS, PRICE_INFO } from '../Constant/lottoConstant.js';
import OutputView from '../View/OutputView.js';
import LottoResultCalculator from '../utils/LottoResultCalculator.js';
export default class LottoManager {
  #purchaseAmount;
  #lottoCount;
  #lottos;
  #winnerLotto;
  #lottoResultArray;
  #lottoResult;
  #rateOfReturn;
  constructor(purchaseAmount) {
    this.#purchaseAmount = purchaseAmount;
    this.#lottoCount = purchaseAmount / LOTTO_CONSTANTS.PRICE;
    this.#lottos = [];
    this.#lottoResultArray = [];
    this.#lottoResult = [0, 0, 0, 0, 0, 0];
    this.#rateOfReturn = 0;
  }
  runLottoMachine(winnerLotto) {
    this.#winnerLotto = winnerLotto;
    this.#calculatorLotto();
    this.#calculatorProfitRate();
    const result = {
      resultArray: [...this.#lottoResult],
      returnRate: this.#rateOfReturn,
    };
    return result;
  }
  #createLotto() {
    for (let i = 0; i < this.#lottoCount; i += 1) {
      const numbers = randomNumbers();
      const lotto = new Lotto(numbers);
      this.#lottos.push(lotto);
    }
  }
  getRandomLotto() {
    this.#createLotto();
    const randomLotto = { count: this.#lottoCount, lottos: this.#lottos };
    return randomLotto;
  }
  #calculatorLotto() {
    this.#lottos.forEach((lotto) => {
      this.#lottoResultArray.push(
        LottoResultCalculator.getRank(lotto, this.#winnerLotto),
      );
    });
    this.#statisticsLotto();
  }
  #statisticsLotto() {
    this.#lottoResultArray.forEach((rank) => {
      this.#lottoResult[rank] += 1;
    });
  }
  #calculatorProfitRate() {
    let totalPrize = 0;
    Object.keys(PRICE_INFO).forEach((rank) => {
      const prize = PRICE_INFO[rank].prize;
      const count = this.#lottoResult[PRICE_INFO[rank].key];
      totalPrize += prize * count;
    });
    const profitRate = (totalPrize / this.#purchaseAmount) * 100;
    this.#rateOfReturn = Math.round(profitRate * 10) / 10;
  }
}
