const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("");
const input = fs.readFileSync("test.txt").toString().trim().split("");
function solution(value) {
  const alphabetTwo = "DEFGHIJKLMNOPQRSTUVWXYZABC".split("");
  console.log(
    value
      .map((v) =>
        alphabetTwo.findIndex((vv) => vv === v) - 3 < 0
          ? 26 + (alphabetTwo.findIndex((vv) => vv === v) - 3)
          : alphabetTwo.findIndex((vv) => vv === v) - 3,
      )
      .map((v) => alphabetTwo.filter((vv, i) => v === i))
      .join(""),
  );
}

console.log(solution(input));
("TEBEGEQS");
