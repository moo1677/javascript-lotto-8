import LottoManager from '../../src/models/LottoManager.js';
import Lotto from '../../src/models/Lotto.js';
import WinningLotto from '../../src/models/WinningLotto.js';
import randomNumbers from '../../src/utils/randomNumbers.js';
import LottoResultCalculator from '../../src/utils/LottoResultCalculator.js';

jest.mock('../../src/utils/randomNumbers.js');
jest.mock('../../src/utils/LottoResultCalculator.js');

describe('로또 관리 클래스 테스트', () => {
  const winningLottoNumber = new Lotto([14, 22, 32, 41, 3, 2]);
  const winningBonusNumber = 44;
  const winningLotto = new WinningLotto(winningLottoNumber, winningBonusNumber);
  beforeEach(() => {
    jest.clearAllMocks();
  });
  test('구입한 금액만큼 로또를 생성하고 출력한다.', () => {
    const purchaseAmount = 3000;
    const lottoCount = 3;
    const mockLottoArray = [1, 2, 3, 4, 5, 6];
    randomNumbers.mockReturnValue(mockLottoArray);

    const manager = new LottoManager(purchaseAmount);

    const result = manager.getRandomLotto();

    expect(randomNumbers).toHaveBeenCalledTimes(lottoCount);

    expect(result.count).toBe(lottoCount);
    expect(result.lottos).toHaveLength(lottoCount);

    expect(result.lottos[0]).toBeInstanceOf(Lotto);
  });
  test('당첨 통계와 수익률을 계산하여 객체로 반환한다.', () => {
    const purchaseAmount = 4000;
    const manager = new LottoManager(purchaseAmount);

    randomNumbers.mockReturnValue([39, 40, 41, 42, 43, 44]);
    manager.getRandomLotto();

    LottoResultCalculator.getRank
      .mockReturnValueOnce(1)
      .mockReturnValueOnce(3)
      .mockReturnValueOnce(5)
      .mockReturnValueOnce(0);

    const result = manager.runLottoMachine(winningLotto);
    expect(LottoResultCalculator.getRank).toHaveBeenCalledTimes(4);

    const lottoResult = [1, 1, 0, 1, 0, 1];
    expect(result.resultArray).toEqual(lottoResult);

    const profitRate = 50037625;
    expect(result.returnRate).toBe(profitRate);
  });
});
