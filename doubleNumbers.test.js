import { doubleNumbers } from "./index";
describe('doubleNumbers', () => {
  it('should double each number in the array', () => {
    const input = [1, 2, 3, 4, 5];
    const expected = [2, 4, 6, 8, 10];
    const result = doubleNumbers(input);
    expect(result).toEqual(expected);
  });

  it('should return an empty array when input is empty', () => {
    const input = [];
    const expected = [];
    const result = doubleNumbers(input);
    expect(result).toEqual(expected);
  });

  it('should handle an array with non-numeric values', () => {
    const input = [1, 2, 'three', 4, null];
    const expected = [2, 4, NaN, 8, NaN];
    const result = doubleNumbers(input);
    expect(result).toEqual(expected);
  });
});