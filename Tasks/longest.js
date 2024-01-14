// Find longest string

'use strict';

const longest = (object) => {
  let result = '';
  for (const string of object) {
    if (string.length > result.length) {
      result = string;
    }
  }
  return result;
};

module.exports = longest;
