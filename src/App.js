import InputView from './View/InputView.js';
import OutputView from './View/OutputView.js';
import LottoManager from './models/LottoManager.js';
import Lotto from './models/Lotto.js';
import WinningLotto from './models/WinningLotto.js';
import { Validation } from './utils/Validation.js';
import { Parser } from './utils/Parser.js';
import { Console } from '@woowacourse/mission-utils';
class App {
  async run() {
    const purchaseAmount = await this.#getValidPurchaseAmount();
    const manager = new LottoManager(purchaseAmount);

    const randomLotto = manager.getRandomLotto();
    this.#printLotto(randomLotto);

    const mainLotto = await this.#getValidWinningLotto();
    const bonusNumber = await this.#getValidBonusNumber(mainLotto);

    const winnerLotto = new WinningLotto(mainLotto, bonusNumber);
    const lottoResult = manager.runLottoMachine(winnerLotto);
    this.#printResult(lottoResult);
  }
  async #getValidPurchaseAmount() {
    while (true) {
      try {
        const purchaseAmountString = await InputView.inputCache();
        const purchaseAmountNumber =
          Parser.parsePurchaseAmount(purchaseAmountString);
        Validation.validateLottoCount(purchaseAmountNumber);
        return purchaseAmountNumber;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }
  async #getValidWinningLotto() {
    while (true) {
      try {
        const winningNumbersString = await InputView.inputWinningLottoNumber();
        const winningNumber = Parser.parseWinningNumbers(winningNumbersString);
        const winningLotto = new Lotto(winningNumber);
        return winningLotto;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }
  async #getValidBonusNumber(mainLotto) {
    while (true) {
      try {
        const bonusNumberString = await InputView.inputBonusNumber();
        const bonusNumberAsNumber = Parser.parseBonusNumber(bonusNumberString);
        Validation.validateBonusNumber(
          bonusNumberAsNumber,
          mainLotto.getNumber(),
        );
        return bonusNumberAsNumber;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }
  #printResult(lottoResult) {
    OutputView.outPutLottoResult(
      lottoResult.resultArray,
      lottoResult.returnRate,
    );
  }
  #printLotto(randomLottos) {
    OutputView.outputLottoCount(randomLottos.count);
    randomLottos.lottos.forEach((lotto) => {
      OutputView.outPutLottoNumber(lotto.getNumber());
    });
  }
}

export default App;
