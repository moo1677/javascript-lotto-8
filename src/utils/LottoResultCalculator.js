export default class LottoResultCalculator {
  getRank(myLotto, winningLotto) {
    const myNumber = myLotto.getNumber();
    const winningNumber = winningLotto.getNumber();
    const bonusNumber = winningLotto.getBonusNumber();

    const matchCount = this.#getMatchCount(myNumber, winningNumber);
    const hasBonus = this.#getHasBonus(myNumber, bonusNumber);
    return this.#getTotalRank(matchCount, hasBonus);
  }
  #getMatchCount(myNumber, winningNumber) {
    return myNumber.filter((number) => winningNumber.includes(number)).length;
  }
  #getHasBonus(myNumber, bonusNumber) {
    return myNumber.includes(bonusNumber);
  }
  #getTotalRank(matchCount, hasBonus) {
    if (matchCount === 6) return 1;
    if (matchCount === 5 && hasBonus) return 2;
    if (matchCount === 5) return 3;
    if (matchCount === 4) return 4;
    if (matchCount === 3) return 5;
    return 0;
  }
}
