import WinningLotto from '../../src/models/WinningLotto.js';
import Lotto from '../../src/models/Lotto.js';
describe('정답 로또 클래스 테스트', () => {
  const winningLottoNumber = new Lotto([14, 22, 32, 41, 3, 2]);
  const winningBonusNumber = 44;
  const winningLotto = new WinningLotto(winningLottoNumber, winningBonusNumber);
  test('오름차순으로 정렬된 정답 로또 번호를 반환한다.', () => {
    expect(winningLotto.getLottoNumber()).toEqual([2, 3, 14, 22, 32, 41]);
  });
  test('보너스 번호를 반환한다.', () => {
    expect(winningLotto.getBonusNumber()).toBe(winningBonusNumber);
  });
});
