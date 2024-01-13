// Filter array by type name

'use strict';

const filter = (array, type) => {
  return array.filter((el) => typeof el === type);
};

module.exports = filter;
