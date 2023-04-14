const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) { 
	let additionSeparator = options.additionSeparator
	let repeatTimes = options.repeatTimes
	let addition = options.addition
	let separator = options.separator
	let additionRepeatTimes = options.additionRepeatTimes
	
	if (repeatTimes === undefined) repeatTimes = 1
	if (addition === null) addition = 'null'
	if (separator === undefined) separator = '+'
	if (additionRepeatTimes === undefined) additionRepeatTimes = 1
	if (additionSeparator === undefined) additionSeparator = '|'
	
	let addStr = Array(additionRepeatTimes).fill(addition).join(additionSeparator);
	return Array(repeatTimes).fill(str + addStr).join(separator);
}

module.exports = {
  repeater
};
