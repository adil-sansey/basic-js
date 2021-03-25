const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sample) {

  if (typeof (sample) != 'string') return false;
  if (isNaN(+sample) || +sample <= 0 || +sample > 15) return false;
  let result = Math.ceil((Math.log(MODERN_ACTIVITY / +sample)) / (0.693 / HALF_LIFE_PERIOD));

  return result;
}
