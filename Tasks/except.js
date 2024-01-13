// Copy all values from dict except listed

'use strict';

const except = (dictionary, ...exceptionKeys) => {
  for (const key of [...exceptionKeys]) {
    delete dictionary[key];
  }
  return dictionary;
};

module.exports = except;
