"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.intToString = exports.doubleNumbers = void 0;
//El doble de un número en un array
var doubleNumbers = exports.doubleNumbers = function doubleNumbers(arr) {
  if (!arr || arr.length === 0) return [];
  var doubles = arr.map(function (num) {
    return parseInt(num) * 2;
  });
  return doubles;
};

//Enteros a Strings
var intToString = exports.intToString = function intToString(arr) {
  var strings = arr.map(function (num) {
    return String(num);
  });
  return strings;
};
//# sourceMappingURL=index.js.map