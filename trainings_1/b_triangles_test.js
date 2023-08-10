const { tableAssert } = require('../helpers/assertTable');
const { solution, parseInput } = require('./b_triangles')

const funcToTest = (...args) => solution(parseInput(...args));

tableAssert(funcToTest, [
  [['1', '2', '3'], 'NO']
]);
