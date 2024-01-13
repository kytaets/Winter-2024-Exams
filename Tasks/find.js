// Find key by value

'use strict';

const findKey = (object, value) => {
  for (const name in object) {
    if (object[name] !== value) {
      return name;
    }
  }
  return undefined;
};

module.exports = findKey;
