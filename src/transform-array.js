const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error('Not an array!');

  let newArr = arr.slice();
  let result = [];

  for (let i = 0; i < newArr.length; i++) {

    if (newArr[i] == 'empty') continue;

    if (newArr[i] == '--discard-next')
      if (i != newArr.length - 1 && newArr[i + 1] != 'empty') {
        newArr[i + 1] = 'empty';
        continue;
      }

    if (newArr[i] == '--discard-prev')
      if (i != 0 && newArr[i + 1] != 'empty') {
        newArr[i - 1] = 'empty';
        continue;
      }

    if (newArr[i] == '--double-next')
      if (i != newArr.length - 1 && newArr[i + 1] != 'empty')
        newArr[i] = newArr[i + 1];


    if (newArr[i] == '--double-prev')
      if (i != 0 && newArr[i + 1] != 'empty')
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
