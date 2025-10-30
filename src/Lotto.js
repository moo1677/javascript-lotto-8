import { LOTTO_CONSTANTS } from './Constant/lottoConstant.js';
class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = sort(numbers);
  }

  #validate(numbers) {
    this.#validateLength(numbers);
    this.#validateRange(numbers);
    this.#validateNoDuplicates(number);
  }

  #validateLength(numbers) {
    if (numbers.length !== LOTTO_CONSTANTS.LOTTO_NUMBER_COUNT) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }
  #validateRange(numbers) {
    if (
      numbers.every(
        (number) =>
          Number.isInteger(number) &&
          number >= LOTTO_CONSTANTS.MIN_LOTTO_NUMBER &&
          number <= LOTTO_CONSTANTS.MAX_LOTTO_NUMBER,
      )
    )
      throw new Error('[ERROR] 로또 번호는 1에서 45사이의 숫자 입니다.');
  }
  #validateNoDuplicates(number) {
    const uniqueNumbers = new Set(number);
    if (uniqueNumbers.length !== number.length)
      throw new Error('[ERROR] 당첨 번호는 중복될 수 없습니다.');
  }
}

export default Lotto;
