// Return an array without duplicates

'use strict';

const duplicate = (value, number) => {
  const res = [];
  while (res.length < number) {
    res.push(value);
  }
  return res;
};

module.exports = duplicate;
