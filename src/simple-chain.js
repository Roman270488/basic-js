const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {

  arrChain: [],

  getLength() {
    this.arrChain.push(`( ${this.chain.length} )`)
    return this
  },
  
  addLink(value) {
    this.arrChain.push(`( ${value} )`)
    return this
  },

  removeLink(position) {
    if (typeof position !== 'number' || position < 1 || position > this.arrChain.length) {
      this.arrChain.length = 0
      throw new Error("You can't remove incorrect link!")
    }

    this.arrChain.splice(position - 1, 1)
    return this
  },

  reverseChain() {
    this.arrChain.reverse()
    return this
  },

  finishChain() {
    let finishChain = this.arrChain.join('~~')
    this.arrChain.length = 0
    return finishChain
  },

};

module.exports = {
  chainMaker
};
