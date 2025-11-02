import LottoResultCalculator from '../../src/utils/LottoResultCalculator.js';
import Lotto from '../../src/models/Lotto.js';
import WinningLotto from '../../src/models/WinningLotto.js';
describe('LottoResultCalculator 유틸리티 테스트', () => {
  const winnerLottoArray = [1, 2, 3, 4, 5, 6];
  const winnerLottoNumber = new Lotto(winnerLottoArray);
  const winnerLotto = new WinningLotto(winnerLottoNumber, 7);
  test('정답 로또와 6개 일치할 경우 1을 반환한다', () => {
    const lottoNumber = [1, 2, 3, 4, 5, 6];
    const lotto = new Lotto(lottoNumber);
    expect(LottoResultCalculator.getRank(lotto, winnerLotto)).toBe(1);
  });
  test('정답 로또와 5개와 보너스 번호가 일치할 경우 2를 반환한다', () => {
    const lottoNumber = [1, 2, 3, 4, 5, 7];
    const lotto = new Lotto(lottoNumber);
    expect(LottoResultCalculator.getRank(lotto, winnerLotto)).toBe(2);
  });
  test('정답 로또와 5개 일치할 경우 3을 반환한다', () => {
    const lottoNumber = [1, 2, 3, 4, 5, 8];
    const lotto = new Lotto(lottoNumber);
    expect(LottoResultCalculator.getRank(lotto, winnerLotto)).toBe(3);
  });
  test('정답 로또와 4개 일치할 경우 4를 반환한다', () => {
    const lottoNumber = [1, 2, 3, 4, 8, 9];
    const lotto = new Lotto(lottoNumber);
    expect(LottoResultCalculator.getRank(lotto, winnerLotto)).toBe(4);
  });
  test('정답 로또와 3개 일치할 경우 5을 반환한다', () => {
    const lottoNumber = [1, 2, 3, 10, 11, 12];
    const lotto = new Lotto(lottoNumber);
    expect(LottoResultCalculator.getRank(lotto, winnerLotto)).toBe(5);
  });
  test('정답 로또와 2개 이하 일치할 경우 0을 반환한다', () => {
    const lottoNumber = [1, 2, 9, 10, 11, 12];
    const lotto = new Lotto(lottoNumber);
    expect(LottoResultCalculator.getRank(lotto, winnerLotto)).toBe(0);
  });
});
