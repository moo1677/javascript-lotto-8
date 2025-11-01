import { Parser } from '../../src/utils/Parser.js';
describe('Parser 유틸리티 테스트', () => {
  // --- 1. parsePurchaseAmount ---
  test('공백이 포함된 문자열을 숫자로 잘 변환한다.', () => {
    const input = ' 8000 ';
    expect(Parser.parsePurchaseAmount(input)).toBe(8000);
  });
  test('문자열이 들어오면 NaN을 반환한다.', () => {
    const input = 'abc';
    expect(Parser.parsePurchaseAmount(input)).toBe(NaN);
  });
  // --- 2. parserWinningNumbers ---
  test('공백이 포함된 문자열을 숫자 배열로 변환한다.', () => {
    const input = ' 1, 2 , 3 ,4  ,5 , 6';
    expect(Parser.parseWinningNumbers(input)).toEqual([1, 2, 3, 4, 5, 6]);
  });
  test('문자열이 섞인 배열은 NaN을 포함한 배열로 변환한다,', () => {
    const input = ' 1, 2 , 문자 ,4  ,5 , 6';
    expect(Parser.parseWinningNumbers(input)).toEqual([1, 2, NaN, 4, 5, 6]);
  });
  // --- 3. parseBonusNumber ---
  test('공백이 포함된 문자열을 숫자로 잘 변환한다.', () => {
    const input = ' 3  ';
    expect(Parser.parseBonusNumber(input)).toBe(3);
  });
  test('문자열이 들어오면 NaN을 반환한다.', () => {
    const input = 'abc';
    expect(Parser.parseBonusNumber(input)).toBe(NaN);
  });
});
