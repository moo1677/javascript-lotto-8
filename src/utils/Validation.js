import { LOTTO_CONSTANTS } from '../Constant/lottoConstant.js';

export const Validation = {
  //구입 금액을 검증합니다
  validateLottoCount(purchase) {
    const isValid =
      Number.isInteger(purchase) &&
      purchase > 0 &&
      purchase % LOTTO_CONSTANTS.PRICE === 0;
    if (!isValid)
      throw new Error('[ERROR] 1000원으로 나누어 떨어지는 정수를 입력해주세요');
  },
  //보너스 번호를 검증합니다
  validateBonusNumber(bonusNumber, winnerLotto) {
    this.validateRange(bonusNumber);
    this.validateNoDuplicates(bonusNumber, winnerLotto);
  },
  validateRange(bonusNumber) {
    const isValid = (number) =>
      Number.isInteger(number) &&
      number >= LOTTO_CONSTANTS.MIN_NUMBER &&
      number <= LOTTO_CONSTANTS.MAX_NUMBER;
    if (!isValid(bonusNumber))
      throw new Error('[ERROR] 보너스 번호는 1에서 45사이의 숫자 입니다.');
  },
  validateNoDuplicates(bonusNumber, winnerLotto) {
    if (winnerLotto.includes(bonusNumber))
      throw new Error('[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.');
  },
};
