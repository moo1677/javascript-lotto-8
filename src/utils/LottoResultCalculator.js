export default class LottoResultCalculator {
  static getRank(myLotto, winningLotto) {
    const myNumber = myLotto.getNumber();
    const winningNumber = winningLotto.getLottoNumber();
    const bonusNumber = winningLotto.getBonusNumber();

    const matchCount = this.checkMatchCount(myNumber, winningNumber);
    const hasBonus = this.checkHasBonus(myNumber, bonusNumber);
    return this.getTotalRank(matchCount, hasBonus);
  }
  static checkMatchCount(myNumber, winningNumber) {
    return myNumber.filter((number) => winningNumber.includes(number)).length;
  }
  static checkHasBonus(myNumber, bonusNumber) {
    return myNumber.includes(bonusNumber);
  }
  static getTotalRank(matchCount, hasBonus) {
    if (matchCount === 6) return 1;
    if (matchCount === 5 && hasBonus) return 2;
    if (matchCount === 5) return 3;
    if (matchCount === 4) return 4;
    if (matchCount === 3) return 5;
    return 0;
  }
}
