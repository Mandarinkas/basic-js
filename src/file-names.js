const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(files) {
  let result = {}, temp = (elem, n) => elem + "(" + n + ")";
  
  return files.map(function(e) {
    let cur = result[e] || 0;
    result[e] = cur+1;
    if(!cur)
      return e;
    while(result[temp(e, cur)])
      cur++;
    
    result[temp(e, cur)] = 1;
    return temp(e, cur);
  });

};


module.exports = {
  renameFiles
};
