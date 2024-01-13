// Find longest string

'use strict';

const longest = (object) => {
  let result = '';
  for (const i of object) {
    if (i.length > result.length) {
      result = i;
    }
  }
  return result;
};

module.exports = longest;
