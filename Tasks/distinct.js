// Return an array without duplicates

'use strict';

const distinct = (data) => {
  const A = new Set(data);
  return Array.from(A);
};

module.exports = distinct;
