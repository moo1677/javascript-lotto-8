import { Validation } from '../../src/utils/Validation.js';
import { ERROR_MESSAGE } from '../../src/Constant/ErrorMessage.js';

describe('Validation 유틸리티 테스트', () => {
  // --- 1. validateLottoCount ---
  test('1000원 단위가 아니면 에러를 던진다', () => {
    expect(() => {
      Validation.validateLottoCount(1500);
    }).toThrow(ERROR_MESSAGE.INVALID_PURCHASE_AMOUNT);
  });
  test('0또는 음수이면 에러를 던진다', () => {
    expect(() => {
      Validation.validateLottoCount(0);
    }).toThrow(ERROR_MESSAGE.INVALID_PURCHASE_AMOUNT);
  });
  test('숫자가 아니면 에러를 던진다', () => {
    expect(() => {
      Validation.validateLottoCount(NaN);
    }).toThrow(ERROR_MESSAGE.INVALID_PURCHASE_AMOUNT);
  });
  test('유효한 금액이면 에러를 던지지 않는다', () => {
    expect(() => {
      Validation.validateLottoCount(7000);
    }).not.toThrow();
  });
  // --- 2. validateBonusNumber ---
  const winnerNumber = [1, 2, 3, 4, 5, 6];
  test('범위가 1~45를 벗어나면 에러를 던진다', () => {
    expect(() => {
      Validation.validateBonusNumber(100, winnerNumber);
    }).toThrow(ERROR_MESSAGE.INVALID_BONUS_NUMBER_RANGE);
  });
  test('숫자가 아니면 에러를 던진다', () => {
    expect(() => {
      Validation.validateBonusNumber(NaN, winnerNumber);
    }).toThrow(ERROR_MESSAGE.INVALID_BONUS_NUMBER_RANGE);
  });
  test('당첨 번호와 중복되면 에러를 던진다', () => {
    expect(() => {
      Validation.validateBonusNumber(1, winnerNumber);
    }).toThrow(ERROR_MESSAGE.DUPLICATE_BONUS_NUMBER);
  });
});
