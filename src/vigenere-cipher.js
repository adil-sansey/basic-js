const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(machineType) {
    this.machineType = machineType;
  }

  encrypt(message, key) {
    let alphabet = [];
    for (let i = 65; i < 91; i++) {
      alphabet.push(String.fromCharCode(i));
    }

    let m = message.toUpperCase().split('');
    let k = key.toUpperCase().split('');

    let result = [];
    let j = 0;

    for (let i = 0; i < m.length; i++) {
      if (alphabet.indexOf(m[i]) === -1) {
        result.push(m[i]);
        continue;
      }

      let sum = alphabet.indexOf(m[i]) + alphabet.indexOf(k[j]);
      let finIndex = -1;

      if (alphabet.length - 1 - sum < 0) {
        finIndex = Math.abs(alphabet.length - 1 - sum) - 1;
      } else {
        finIndex = sum;
      }

      result.push(alphabet[finIndex]);

      j++;
      if (j === k.length) j = 0;
    }

    return this.machineType === false ? result.reverse().join('') : result.join('');
  }

  decrypt(message, key) {
    let alphabet = [];
    for (let i = 65; i < 91; i++) {
      alphabet.push(String.fromCharCode(i));
    }

    let m = message.toUpperCase().split('');
    let k = key.toUpperCase().split('');

    let result = [];
    let j = 0;

    for (let i = 0; i < m.length; i++) {
      if (alphabet.indexOf(m[i]) === -1) {
        result.push(m[i]);
        continue;
      }

      let mI = alphabet.indexOf(m[i]);
      let kI = alphabet.indexOf(k[j]);

      let finIndex = 1 + (mI > kI) ? mI - kI : kI - mI;
      if (finIndex < 0) {
        finIndex = alphabet.length + finIndex;
      }

      result.push(alphabet[finIndex]);

      j++;
      if (j === k.length) j = 0;
    }

    return this.machineType === false ? result.reverse().join('') : result.join('');
  }
}

module.exports = VigenereCipheringMachine;
