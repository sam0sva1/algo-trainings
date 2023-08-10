const assert = require('assert');

function tableAssert(funcToTest, listOfVariants) {
  listOfVariants.forEach(([input, result]) => {
    assert(funcToTest(input) === result, `Variant with input ${JSON.stringify(input)} doesn't equal to ${result}`);
  });
}

module.exports = {
  tableAssert,
};