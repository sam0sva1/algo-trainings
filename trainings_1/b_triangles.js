function run() {
  const readline = require('readline').createInterface(
    process.stdin,
    process.stdout,
  );

  const input = [];

  readline
    .on('line', (line) => {
      input.push(line);
    })
    .on('close', () => {
      const result = solution(parseInput(input));
      console.log(result);
      process.exit(0);
    });
}

function parseInput(input) {
  return input.map(Number);
}

// input: int[]
function solution(input) {
  const [a, b, c] = input;

  if (
    !(a + b > c) ||
    !(a + c > b) ||
    !(c + b > a)) {
    return 'NO';
  }

  return 'YES';
}

module.exports = {
  parseInput,
  solution,
};