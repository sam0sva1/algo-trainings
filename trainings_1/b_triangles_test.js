const { tableAssert } = require('../helpers/assertTable');
const { solution, parseInput } = require('./b_triangles')

const funcToTest = (...args) => solution(parseInput(...args));

tableAssert(funcToTest, [
  [['3', '4', '5'], 'YES'],
  [['4', '3', '5'], 'YES'],
  [['5', '4', '3'], 'YES'],
  [['5', '3', '4'], 'YES'],
  [['1', '2', '3'], 'NO'],
  [['1', '2', '7'], 'NO'],
]);
