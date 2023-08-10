function run(funcToRun) {
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
      const result = funcToRun(input);
      console.log(result);
      process.exit(0);
    });
}

module.exports = {
  run,
};