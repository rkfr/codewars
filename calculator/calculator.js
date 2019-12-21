'use strict';

const operate = (num1, operator, num2) => {
    const n1 = Number(num1);
    const n2 = Number(num2);
  
    switch (operator) {
        case "/":
            return n1 / n2;
        case "+":
            return n1 + n2;
        case "*":
            return n1 * n2;
        case "-":
            return n1 - n2;
        default:
            return 0;
    }
};
  
const getNewArray = (array, indexFrom, indexTo, newValue) => {
    const newArray = [];
    const len = array.length;

    for (let i = 0; i < len; i++) {
        if (i === indexFrom) {
            newArray.push(newValue);
        }

        if (i >= indexFrom && i <= indexTo) {
            continue;
        }

        newArray.push(array[i]);
    }

    return newArray;
};
  
const isNumber = c => {
    return !!Number(c);
};
  
const calculator = prop => {
    if (typeof prop === "string") {
        if (isNumber(prop)) {
            return Number(prop);
        }
    }
  
    if (prop.length < 3) {
        return prop[0];
    }
  
    const data = typeof prop === "string" ? prop.split(" ") : prop;
  
    let swp = [];
  
    const dataLen = data.length;
    for (let i = 0; i < dataLen; i++) {
        if (i % 2 === 0) {
            const sign = data[i + 1];
    
            if (sign === "/" || sign === "*") {
                const n1 = data[i];
                const n2 = data[i + 2];
        
                swp = getNewArray(data, i, i + 2, operate(n1, sign, n2));
                break;
            }
        }
    }
  
    const [n1, sign, n2] = data;
  
    if (swp.length) {
        return calculator(swp);
    }
  
    swp = getNewArray(data, 0, 2, operate(n1, sign, n2));
  
    return calculator(swp);
};