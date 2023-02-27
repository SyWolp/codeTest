const solution = (arr) => {
  const arrs = Array.from({ length: arr.length }, () => 0);
  let flag = 0;
  let result = 0;
  const split = arr.reduce((a, b) => a + b) / 2;
  let zz = "NO";
  const DFS = (v, sumsum) => {
    if (flag === 1) return;
    if (v === arr.length) {
      if (result === split) {
        zz = "YES";
        flag = 1;
      }
      return;
    } else {
      DFS(v + 1, (result += arr[v]));
      DFS(v + 1, (result -= arr[v]));
    }
  };
  DFS(0, result);
  return zz;
};
console.time();
console.log(solution([1, 3, 5, 6, 7, 10, 1, 1]));
console.timeEnd();
