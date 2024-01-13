// Increment all numbers in dictionary

'use strict';

const incNumbers = (object) => {
  for (let i of Object.keys(object)) {
    if (typeof object[i] === 'number') {
      object[i] += 1;
    }
  }
  return object;
};

module.exports = incNumbers;
