const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  
  calculateDepth(array) {
      let sumArr = 1
      
      array.forEach(elem => {
        let depth = 1
        if (Array.isArray(elem)) depth += this.calculateDepth(elem)
        if (depth > sumArr) sumArr = depth
      })

      return sumArr	
	 }
}

module.exports = {
  DepthCalculator
};
