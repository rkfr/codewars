'use strict';

const getPow = (n, nPow) => Math.pow(n, nPow);

const getPowSum = (nums, nPow) => {
  let sum = 0;

  for (let i = 0; i < nPow; i++) {
    sum += getPow(Number(nums[i]), nPow);
  }

  return sum;
};

function narcissistic(value) {
  const mapValues = String(value);
  const currentPow = mapValues.length;

  return (getPowSum(mapValues, currentPow) === value) ? true: false;
}