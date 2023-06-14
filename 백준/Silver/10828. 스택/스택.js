const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
input.shift();
function solution(stack) {
  const stackArr = [];
  let result = [];
  for (let i = 0; i < stack.length; i++) {
    if (stack[i].includes(" ")) {
      const value = stack[i].split(" ")[1];
      stackArr.push(value);
    } else if (stack[i] === "top")
      result.push(stackArr.length ? stackArr[stackArr.length - 1] : -1);
    else if (stack[i] === "size") result.push(stackArr.length);
    else if (stack[i] === "empty") result.push(stackArr.length ? "0" : 1);
    else result.push(stackArr.length ? stackArr.pop() : -1);
  }
  return result.join("\n");
}

console.log(solution(input));
