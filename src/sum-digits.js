const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(arr) {
  function reducer(resulty){
    resulty=arr.toString().split('')
    for (let i=0;i<resulty.length;i++){
      resulty[i] = +resulty[i]
    }
    return resulty.reduce((sum,e)=>{return sum+e});
  }
  
  if(reducer(arr)<10){
    return reducer(arr);
  }
  else{
    return arr=getSumOfDigits(reducer(arr));
  }
  // remove line with error and write your code here
}

module.exports = {
  getSumOfDigits
};
