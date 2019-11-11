'use strict';

function findOdd(A) {
    return findTimesNumber(countNums(A));
  }
  
  function countNums(arr) {
    return arr.reduce((accum, el) =>{
      return accum[el] = (accum[el] || 0) + 1, accum;
    }, {});
  }
  
  function findTimesNumber(obj) {
    for (let key in obj) {
      if (obj[key] % 2 !== 0) {
        return +key;
      }
    }
  }