const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(numbers) {
  let numArr = Array.from(String(numbers))
	let totalNum = 0
	numArr.map((elem, outIn)=>{
		let comNum = +(numArr.filter((elem, inIn) => inIn != outIn)).join('')
		if (comNum > totalNum) totalNum = comNum
	})
	return totalNum;
}

module.exports = {
  deleteDigit
};
