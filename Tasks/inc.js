// Increment all numbers in dictionary

'use strict';

const incNumbers = (object) => {
  for (let i of object) {
    if (typeof i === 'number') {
      i += 1;
    }
  }
  return object;
};

module.exports = incNumbers;
