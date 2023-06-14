const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
input.shift();
function solution(age) {
  return age.map((v) => v.split(" ")).sort((a, b) => parseInt(a[0]) - parseInt(b[0])).map((vv) => vv.join(" ")).join("\n");
}

console.log(solution(input));
