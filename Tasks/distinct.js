// Return an array without duplicates

'use strict';

const distinct = (data) => {
  const A = new Set(data);
  let w = 0;
  data.forEach((a) => {
    if (A.has(a)) {
      delete data[w];
    } else {
      A.add(a);
    }
    w++;
  });
  return data;
};

module.exports = distinct;
