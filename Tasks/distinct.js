// Return an array without duplicates

'use strict';

const distinct = (data) => {
  const dataSet = new Set(data);
  return Array.from(dataSet);
};

module.exports = distinct;
