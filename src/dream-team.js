const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let cleanArr = ''; 
  for (let i in members) {
    if (!Array.isArray(members)) return false;
    if (typeof members[i] === 'string') cleanArr += members[i].trim().substr(0, 1); 
  }
  return cleanArr.toLocaleLowerCase().split('').sort().join('').toUpperCase();
}

module.exports = {
  createDreamTeam
};
