// Return an array without duplicates

'use strict';

const duplicate = (value, number) => {
  const res = [];
  for (let i = 0; i < number; i++) {
    res[i] = value;
  }
  return res;
};

module.exports = duplicate;
