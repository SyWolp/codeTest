function solution(babbling) {
  const list = ["aya", "ye", "woo", "ma"];
  let result = 0;
  for (let word of babbling) {
    let i = 0;
    let w = word;
    let contI = null;
    while (true) {
      if (i >= 5) {
        if (w === "") result++;
        break;
      }
      if (w.indexOf(list[i]) === 0 && contI !== i) {
        w = w.replace(list[i], "");
        contI = i;
        i = 0;
      } else {
        i++;
      }
    }
  }
  return result;
}