const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
input = Number(input[0]);

function solution(num) {
  let result = 0;

  for (let i = 1; i <= num; i++) {
    result += i;
  }

  console.log(result);
}

solution(input);
