import { LOTTO_CONSTANTS } from '../Constant/lottoConstant.js';
import { ERROR_MESSAGE } from '../Constant/ErrorMessage.js';
class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = this.#sortNumber(numbers);
  }

  #validate(numbers) {
    this.#validateLength(numbers);
    this.#validateRange(numbers);
    this.#validateNoDuplicates(numbers);
  }

  #validateLength(numbers) {
    if (numbers.length !== LOTTO_CONSTANTS.NUMBER_COUNT) {
      throw new Error(ERROR_MESSAGE.INVALID_LOTTO_COUNT);
    }
  }
  #validateRange(numbers) {
    const isValid = (number) =>
      Number.isInteger(number) &&
      number >= LOTTO_CONSTANTS.MIN_NUMBER &&
      number <= LOTTO_CONSTANTS.MAX_NUMBER;

    if (numbers.some((number) => !isValid(number)))
      throw new Error(ERROR_MESSAGE.INVALID_LOTTO_RANGE);
  }

  #validateNoDuplicates(numbers) {
    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== numbers.length)
      throw new Error(ERROR_MESSAGE.DUPLICATE_LOTTO_NUMBERS);
  }
  #sortNumber(numbers) {
    return [...numbers].sort((a, b) => a - b);
  }
  getNumber() {
    return [...this.#numbers];
  }
}

export default Lotto;
