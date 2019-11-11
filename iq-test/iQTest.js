'use strict';

const getArrayOfNums = str => str.split(' ').map(s => Number(s));

const isEven = n => (n % 2 === 0) ? true : false;

const countEvens = nums => nums.reduce((acc, n) => ((isEven(n) && acc++), acc), 0);

const getTypeToFind = (oddsCount, evensCount) => (oddsCount > evensCount) ? 'EVEN' : 'ODD';

const getSearchedIndex = (nums, type) => (
  nums.indexOf(
    ...nums.filter(n => (type === 'EVEN') ? isEven(n) : !isEven(n))
  )
);

function iqTest(numbers){
  const numsMap = getArrayOfNums(numbers);
  const evensCount = countEvens(numsMap)
  const oddsCount = numsMap.length - evensCount;
  const searchType = getTypeToFind(oddsCount, evensCount);

  return getSearchedIndex(numsMap, searchType) + 1;
}