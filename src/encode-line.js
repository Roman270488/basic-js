const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let num = 1
	let codeArr = []
	let arr = str.split('')

	for(let i = 0; i < arr.length; i++){
		let letter = arr[i]
		if(arr[i] == arr[i+1]) num++
		else{
			if(num < 2) num = ''
			codeArr.push(`${num}${letter}`)
			num = 1
		}
	}
	return codeArr.join('')
}

module.exports = {
  encodeLine
};
