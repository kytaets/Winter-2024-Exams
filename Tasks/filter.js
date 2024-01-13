// Filter array by type name

'use strict';

const filter = (array, type) => {
  const result = array.filter((el) => typeof el === type);
  return result;
};

module.exports = filter;
