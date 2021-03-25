const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {

  if (!Array.isArray(members)) return false;
  let arr = [];
  for (let value of members) {
    if (typeof (value) == 'string') arr.push(value.trim());
  }

  return arr
    .map(e => {
      return e[0]
        .toUpperCase()
    })
    .sort()
    .join('');
};
