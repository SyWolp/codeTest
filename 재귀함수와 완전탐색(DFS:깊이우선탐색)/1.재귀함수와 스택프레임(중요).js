const solution = (number) => {
  const DFS = (n) => {
    if (n === 1) return;
    else {
      DFS(n - 1);
      console.log(n);
    }
  };
  DFS(number);
};

console.log(solution(5));
