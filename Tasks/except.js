// Copy all values from dict except listed

'use strict';

const except = (dictionary, ...no) => {
  for (const key of [...no]) {
    delete dictionary[key];
  }
  return incomingvaluesarray;
};

module.exports = except;
