const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
    let indexes = [],i;
    while ((i = arr.indexOf(-1, i+1)) > -1) {
        indexes.push(i);
    }
    let index2 = indexes.slice();
    while(index2.length){
        arr.splice(index2.pop(), 1);
    } 

    arr.sort((a,b)=>a-b);
    while(indexes.length) {
        arr.splice(indexes.shift(), 0, -1);
    }
    return arr;
  // remove line with error and write your code here
}

module.exports = {
  sortByHeight
};
