const CustomError = require("../extensions/custom-error");

const chainMaker = {

  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (value == null) this.chain.push('( null )'); else
      if (value != undefined) this.chain.push('( ' + value + ' )');
      else this.chain.push('( )');
    return this;
  },
  removeLink(position) {
    if (this.chain[position - 1]) {
      this.chain.splice(position - 1, 1);
      return this;
    }
    else {
      this.chain = [];
      throw new Error();
    }
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    let result = this.chain.join('~~');
    this.chain = [];
    return result;
  }
};

module.exports = chainMaker;
