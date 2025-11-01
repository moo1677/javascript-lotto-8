import InputView from './View/InputView.js';
import LottoManager from './models/LottoManager.js';
import Lotto from './models/Lotto.js';
import WinningLotto from './models/WinningLotto.js';
import { Validation } from './utils/Validation.js';
import { Parser } from './utils/Parser.js';
import { PRICE_INFO } from './Constant/lottoConstant.js';
import { Console } from '@woowacourse/mission-utils';
class App {
  async run() {
    let purchaseAmount;
    let mainLotto;
    let bonusNumber;
    while (true) {
      try {
        const purchaseAmountString = await InputView.inputCache();
        const purchaseAmountNumber =
          Parser.parsePurchaseAmount(purchaseAmountString);
        Validation.validateLottoCount(purchaseAmountNumber);
        purchaseAmount = purchaseAmountNumber;
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }
    while (true) {
      try {
        const winningNumbersString = await InputView.inputWinningLottoNumber();
        const winningNumber = Parser.parseWinningNumbers(winningNumbersString);
        const winningLotto = new Lotto(winningNumber);
        mainLotto = winningLotto;
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }
    while (true) {
      try {
        const bonusNumberString = await InputView.inputBonusNumber();
        const bonusNumberAsNumber = Parser.parseBonusNumber(bonusNumberString);
        Validation.validateBonusNumber(
          bonusNumberAsNumber,
          mainLotto.getNumber(),
        );
        bonusNumber = bonusNumberAsNumber;
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }
    const winnerLotto = new WinningLotto(mainLotto, bonusNumber);
    const manager = new LottoManager(purchaseAmount, winnerLotto);
    manager.runLottoMachine();
  }
}

export default App;
