// Copy all values from dict except listed

'use strict';

const except = (dictionary, ...exceptionKeys) => {
  const newDictionary = {...dictionary};
  for (const key of [...exceptionKeys]) {
    delete newDictionary[key];
  }
  return newDictionary;
};

module.exports = except;
