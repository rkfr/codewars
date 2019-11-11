'use strict';

const getNums = str => {
    const len = str.length - 1;
    let nums = [];
  
    for (let i = len; i >= 0; i--) {
      const el = Number(str[i]);
  
      if (!isNaN(el)) {
        nums.push(el);
      }
    }
  
    return nums.reverse();
  };
  
  const isAllNumsZeros = numbers => numbers.every(n => n === 0);
  
  const getStr = (str, nums) => str.slice(0, str.length - nums);
  
  const countZeros = nums =>
    nums.reduce((acc, el) => {
      if (!el) {
        acc++;
      }
      return acc;
    }, 0);
  
  const getNumberFromNums = nums => Number(nums.join(""));
  
  const countNumbers = num => String(num).split("").length;
  
  const mutation = ([zerosCount, number]) => {
    let arr = Array(zerosCount).fill(0);
    arr.push(number);
    return arr.join("");
  };
  
  function incrementString(strng) {
    const numbers = getNums(strng);
    const zerosCount = countZeros(numbers);
    const number = getNumberFromNums(numbers);
  
    if (!zerosCount && !number) {
      return `${strng}1`;
    }
  
    if (isAllNumsZeros(numbers)) {
      return `${strng.slice(0, strng.length - 1)}1`;
    }
  
    const incrementedNumber = number + 1;
    const numbersCount = countNumbers(number);
    const incrementedNumbersCount = countNumbers(incrementedNumber);
  
    const strWithoutNums = getStr(strng, numbers.length);
  
    const newZerosCount =
      numbersCount === incrementedNumbersCount
        ? zerosCount
        : zerosCount === 0
        ? 0
        : zerosCount - 1;
  
    const newNumbers = mutation([newZerosCount, incrementedNumber]);
    return `${strWithoutNums}${newNumbers}`;
  }