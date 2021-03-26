const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if (!Array.isArray(arr)) throw new Error('Not an array!');
  let newArr = arr.slice();
  let result = [];
  let controlSequences = ['empty', '--discard-next', '--discard-prev', '--double-next', '--double-prev'];
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] == '--discard-next')
      if (newArr[i + 1] && !controlSequences.includes(newArr[i + 1])) {
        newArr[i + 1] = 'empty';
        continue;
      }

    if (newArr[i] == '--discard-prev')
      if (newArr[i - 1] && !controlSequences.includes(newArr[i - 1])) {
        newArr[i - 1] = 'empty';
        continue;
      }

    if (newArr[i] == '--double-next')
      if (newArr[i + 1] && !controlSequences.includes(newArr[i + 1]))
        newArr[i] = newArr[i + 1];


    if (newArr[i] == '--double-prev')
      if (newArr[i - 1] && !controlSequences.includes(newArr[i - 1]))
        newArr[i] = newArr[i - 1];

  }

  for (let i = 0; i < newArr.length; i++) {
    switch (newArr[i]) {
      case '--discard-next':
      case '--discard-prev':
      case '--double-next':
      case '--double-prev':
      case 'empty': break;
      default:
        result.push(newArr[i]);
    }
  }

  return result;
};
