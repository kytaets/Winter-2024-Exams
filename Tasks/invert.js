// Reverse an array, you can't use .reverse()

'use strict';

const invertArray = (object) => {
  const result = [];
  for (let i = 0; i < object.length; i++) {
    result.push(object.pop());
  }
  return result;
};

module.exports = invertArray;
