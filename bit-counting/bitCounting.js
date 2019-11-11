'use strict';

const countBits = n => n.toString(2).split('').reduce((count, n) => +count + +n, 0);