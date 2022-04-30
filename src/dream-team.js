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

  // throw new NotImplementedError('Not implemented');
  function createDreamTeam(arr) {
    if(!Array.isArray(arr)){
      return false;
    }
    else{
    let result = '';
    arr.forEach(elem => {
      if (typeof elem =='string'){
        elem = elem.split(' ').join('');
          result+=elem[0];
      }
    });
    return result.toUpperCase().split('').sort().join('');
  }}


module.exports = {
  createDreamTeam
};
