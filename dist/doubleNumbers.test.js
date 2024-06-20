"use strict";

var _index = require("./index");
describe('doubleNumbers', function () {
  it('should double each number in the array', function () {
    var input = [1, 2, 3, 4, 5];
    var expected = [2, 4, 6, 8, 10];
    var result = (0, _index.doubleNumbers)(input);
    expect(result).toEqual(expected);
  });
  it('should return an empty array when input is empty', function () {
    var input = [];
    var expected = [];
    var result = (0, _index.doubleNumbers)(input);
    expect(result).toEqual(expected);
  });
  it('should handle an array with non-numeric values', function () {
    var input = [1, 2, 'three', 4, null];
    var expected = [2, 4, NaN, 8, NaN];
    var result = (0, _index.doubleNumbers)(input);
    expect(result).toEqual(expected);
  });
});
//# sourceMappingURL=doubleNumbers.test.js.map