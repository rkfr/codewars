'use strict';

function validParentheses(parens) {
    const OPEN = "(";
    const CLOSE = ")";
    const PARENS_LEN = parens.length;
  
    if (parens[0] === CLOSE || parens[PARENS_LEN - 1] === OPEN) {
      return false;
    }
  
    let openedParens = 0;
  
    for(let i = 0; i < PARENS_LEN; i++) {
      (parens[i] === OPEN) ? openedParens++ : openedParens--;
  
      if (openedParens < 0) {
        return false;
      }
    }
  
    return !openedParens;
  }