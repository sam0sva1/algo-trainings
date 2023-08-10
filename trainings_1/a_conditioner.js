// input: string[]
function solution(input) {
  const [temps, mode] = input;
  const [troomStr, tcondStr] = temps.split(' ');

  const troom = parseInt(troomStr);
  const tcond = parseInt(tcondStr);

  switch (mode) {
    case 'freeze':
      return troom > tcond ? tcond : troom
    case 'heat':
      return troom < tcond ? tcond : troom
    case 'auto':
      return tcond;
    case 'fan':
      return troom;
  }
}

module.exports = {
  solution,
};
