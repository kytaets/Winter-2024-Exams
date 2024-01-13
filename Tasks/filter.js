// Filter array by type name

'use strict';

const filterArray = (array, type) => {
  return array.filter((el) => typeof el === type);
};

module.exports = filterArray;
