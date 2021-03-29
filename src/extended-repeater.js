const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  const repeatTimes = options.repeatTimes;
  const separator = options.separator || '+';
  let addition = options.addition;
  const additionRepeatTimes = options.additionRepeatTimes;
  const additionSeparator = options.additionSeparator || '|';

  switch (addition) {
    case true: addition = 'true';
      break;
    case false: addition = 'false';
      break;
    case null: addition = 'null';
      break;
  };

  let mainArr = [];
  let additionArr = [];

  let i = 0;
  let j = 0;

  do {
    additionArr.push(addition);
    i++;
  }
  while (i < additionRepeatTimes);

  let additionStr = additionArr.join(additionSeparator);
  let mainStr = str + additionStr;

  do {
    mainArr.push(mainStr);
    j++;
  }
  while (j < repeatTimes);

  return mainArr.join(separator);
};
