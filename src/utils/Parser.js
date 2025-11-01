export const Parser = {
  parserPurchaseAmount(amountString) {
    return Number(amountString.trim());
  },
  parseWinningNumbers(numberString) {
    const winningNumberString = numberString.replace(/\s/g, '');
    return winningNumberString.split(',').map(Number);
  },
  parseBonusNumber(bonusNumber) {
    return Number(bonusNumber.trim());
  },
};
