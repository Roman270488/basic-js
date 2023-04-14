const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {

  let arrStr = email.split('').reverse()
	let sortArr = []
  
	for(let i of arrStr){
		if(i == '@') break
		else sortArr.push(i)
	}

	return sortArr.reverse().join('')
}

module.exports = {
  getEmailDomain
};
