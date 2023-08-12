const { tableAssert } = require('../helpers/assertTable');
const { solution } = require('./с_phone_numbers')

tableAssert(solution, [
  [['8(495)430-23-97', '+7-4-9-5-43-023-97', '4-3-0-2-3-9-7', '8-495-430'], 'YES\nYES\nNO'],
  [['86406361642', '83341994118', '86406361642', '83341994118'], 'NO\nYES\nNO'],
  [['+78047952807', '+78047952807', '+76147514928', '88047952807'], 'YES\nNO\nYES'],
]);
