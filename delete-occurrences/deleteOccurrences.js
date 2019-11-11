'use strict';

const getNumEntries = arr => n =>
  arr.reduce((count, el) => (el === n && count++, count), 0);

const deleteNth = (arr, n) => 
  arr.reduce(
    (newArray, el) => (
      getNumEntries(newArray)(el) < n && newArray.push(el), newArray
    ), []
);