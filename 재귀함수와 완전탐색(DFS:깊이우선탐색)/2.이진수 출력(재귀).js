function solution(number) {
  let result = "";
  const DFS = (n) => {
    if (n === 0) return;
    else {
      DFS(parseInt(n / 2));
      result += JSON.stringify(n % 2);
    }
  };
  DFS(number);
  return result;
}
console.time();
console.log(solution(100));
console.timeEnd();
