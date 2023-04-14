const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {

  let brokArr = []
  let domStat = {}
  
	domains.forEach(domain => brokArr.push(domain.split('.')))
   
	brokArr.forEach(elemOut => {
	  elemOut.reverse().map((elemIn, i, arr) => {
      let domen = `.${elemIn}`
      if (domStat[domen]) domStat[domen]++
      if (!domStat[domen]) domStat[domen] = 1
      arr.splice(i+1, 1, `${elemIn}.${arr[i+1]}`)
	  })
	})
 
	return domStat
}

module.exports = {
  getDNSStats
};
