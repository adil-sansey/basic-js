const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let cats = 0;
  for (let value of matrix) {
    for (let item of value) {
      if (item == '^^') cats++;
    }
  }
  return cats;
};
