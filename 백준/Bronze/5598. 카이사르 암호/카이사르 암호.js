const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("");
// const input = fs.readFileSync("test.txt").toString().trim().split("");
function solution(value) {
  const alphabetOne = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const alphabetTwo = "DEFGHIJKLMNOPQRSTUVWXYZABC".split("");
  console.log(value.map((v) => alphabetTwo.findIndex((vv) => vv === v)).map((v) => alphabetOne.filter((vv, i) => v === i)).join(""));
}
solution(input);