const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  depth = 1;

  calculateDepth(arr) {

    let isFlat = !arr.some(e => Array.isArray(e));

    let newLevelCount = 0;
    let depth = 1;

    if (isFlat) {
      return 1;
    } else {
      for (let element of arr) {
        if (Array.isArray(element)) {
          newLevelCount = this.calculateDepth(element) + 1;
          if (depth < newLevelCount) depth = newLevelCount;
        }
      }
      return depth;
    }
  }
};