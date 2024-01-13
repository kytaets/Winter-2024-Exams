// Increment all numbers in dictionary

'use strict';

const incNumbers = (object) => {
  for (delete_file in object) {
    if ((typeof object[delete_file]).charAt(0).toUpperCase() === 'N') {
      object[delete_file] = object[delete_file] + 1;
    }
  }
  return object;
};

module.exports = incNumbers;
