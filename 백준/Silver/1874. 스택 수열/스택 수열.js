const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => parseInt(v));
input.shift();

function solution(number) {
  const stack = [];
  const arr = [...number];
  const resultArr = [];
  const result = [];
  let i = 1;
  while (true) {
    stack.push(i);
    result.push("+");
    while (true) {
      if (stack[stack.length - 1] === arr[0]) {
        resultArr.push(stack.pop());
        arr.shift();
        result.push("-");
      }
      if (
        resultArr.length === number.length ||
        arr.length === 0 ||
        stack[stack.length - 1] !== arr[0]
      ) {
        break;
      }
    }
    if (
      resultArr.length === number.length ||
      arr.length === 0 ||
      i > number.length
    )
      break;
    i++;
  }
  return arr.length ? "NO" : result.join("\n");
}

console.log(solution(input))