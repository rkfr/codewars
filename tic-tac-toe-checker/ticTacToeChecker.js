'use strict';

const checkLine = row => {
  const value = row[0];
  if (value === 0) return false;

  for (let i = 0; i < 3; i++) {
    if (value !== row[i]) return false;
  }

  return true;
};

const checkLines = board => {
  for (let i = 0; i < board.length; i++) {
    if (checkLine(board[i])) {
      return board[i][0];
    }
  }

  return false;
};

const getColumn = (board, colNum) => {
  let column = [];

  for (let i = 0; i < board.length; i++) {
    column.push(board[i][colNum]);
  }

  return column;
};

const checkColumns = board => {
  for (let i = 0; i < board.length; i++) {
    const column = getColumn(board, i);
    if (checkLine(column)) {
      return column[0];
    }
  }

  return false;
};

const getVerticalColumns = board => {
  let leftToRight = [];
  let rightToLeft = [];

  for (let i = 0; i < board.length; i++) {
    leftToRight.push(board[i][i]);
    rightToLeft.push(board[i][2 - i]);
  }

  return [leftToRight, rightToLeft];
};

const checkVerticalColumns = board => {
  const verticalColumns = getVerticalColumns(board);

  return checkLines(verticalColumns);
};

const isCompleted = board => {
  for (let i = 0; i < 3; i++) {
    const row = board[i];

    for (let j = 0; j < 3; j++) {
      if (!row[j]) return false;
    }
  }

  return true;
};

function isSolved(board) {
  const checkedRows = checkLines(board);
  if (checkedRows) return checkedRows;

  const checkedColumns = checkColumns(board);
  if (checkedColumns) return checkedColumns;

  const checkedVerticalRows = checkVerticalColumns(board);
  if (checkedVerticalRows) return checkedVerticalRows;

  if (!isCompleted(board)) return -1;

  return 0;
}