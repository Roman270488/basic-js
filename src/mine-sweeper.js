const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {

  const outResult = []
  let num

  for (let i = 0; i < matrix.length; i++) {

    outResult.push(new Array())

    for (let k = 0; k < matrix[i].length; k++) {

      num = 0

      if(typeof matrix[k] != 'undefined') {
        if(matrix[i][k - 1] == true) num++
      }
      if(typeof matrix[i + 1] != 'undefined') {
        if(matrix[i + 1][k - 1] == true) num++
        if(matrix[i + 1][k] == true) num++
        if(matrix[i + 1][k + 1] == true) num++        
      }
      if(typeof matrix[i - 1] != 'undefined') {
        if(matrix[i - 1][k] == true) num++
        if(matrix[i - 1][k - 1] == true) num++
        if(matrix[i - 1][k + 1] == true) num++
      }
      if(matrix[i][k + 1] == true) num++

      outResult[i].push(num)
      
    }
  }

  return outResult
}

module.exports = {
  minesweeper
};
