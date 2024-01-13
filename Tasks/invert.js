// Reverse an array, you can't use .reverse()

'use strict';

const invertArray = (object) => {
  const result = [];
  while (object.length > 0) {
    result.push(object.pop());
  }
  return result;
};

module.exports = invertArray;
