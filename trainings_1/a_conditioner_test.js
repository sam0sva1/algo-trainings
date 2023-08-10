const { tableAssert } = require('../helpers/assertTable');
const { solution } = require('./a_conditioner');

tableAssert(solution, [
  [['10 20', 'heat'], 20],
  [['10 20', 'freeze'], 10],
]);