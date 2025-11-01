import Lotto from './Lotto.js';
import randomNumbers from '../utils/randomNumbers.js';
import { LOTTO_CONSTANTS } from '../Constant/lottoConstant.js';
import OutputView from '../View/OutputView.js';

export default class LottoManager {
  #lottoCount;
  #lottos;
  #winnerLotto;
  constructor(purchaseAmount, winnerLotto) {
    this.#lottoCount = purchaseAmount / LOTTO_CONSTANTS.PRICE;
    this.#lottos = [];
    this.#winnerLotto = winnerLotto;
    this.runLottoMachine();
  }

  #createLotto() {
    for (let i = 0; i < this.#lottoCount; i += 1) {
      const numbers = randomNumbers();
      const lotto = new Lotto(numbers);
      this.#lottos.push(lotto);
    }
  }
  #printLotto() {
    OutputView.outputLottoCount(this.#lottoCount);
    this.#lottos.forEach((lotto) => {
      OutputView.outPutLottoNumber(lotto.getNumber());
    });
  }
  runLottoMachine() {
    this.#createLotto();
    this.#printLotto();
  }
}
