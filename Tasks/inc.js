// Increment all numbers in dictionary

'use strict';

const incNumbers = (object) => {
  for (let i of object) {
    if ((typeof object[i]).charAt(0).toUpperCase() === 'N') {
      object[i] = object[i] + 1;
    }
  }
  return object;
};

module.exports = incNumbers;
