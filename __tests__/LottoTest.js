import Lotto from '../src/models/Lotto';
import { ERROR_MESSAGE } from '../src/Constant/ErrorMessage';
describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow(ERROR_MESSAGE.INVALID_LOTTO_COUNT);
  });

  // TODO: 테스트가 통과하도록 프로덕션 코드 구현
  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow(ERROR_MESSAGE.DUPLICATE_LOTTO_NUMBERS);
  });

  test('로또 번호의 범위가 1~45를 벗어나면 에러를 던진다', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 100]);
    }).toThrow(ERROR_MESSAGE.INVALID_LOTTO_RANGE);
  });
});
