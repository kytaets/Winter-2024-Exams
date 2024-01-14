// Increment all numbers in dictionary

'use strict';

const incNumbers = (object) => {
  for (const key of Object.keys(object)) {
    if (typeof object[key] === 'number') {
      object[key] += 1;
    }
  }
  return object;
};

module.exports = incNumbers;
