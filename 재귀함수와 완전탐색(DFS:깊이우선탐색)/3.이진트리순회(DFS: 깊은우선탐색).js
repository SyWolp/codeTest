function solution(number) {
  const DFS = (v) => {
    if (v > 7) return;
    else {
      console.log(v);
      DFS(v * 2);
      DFS(v * 2 + 1); // 전위순회

      // DFS(v * 2);
      // console.log(v);
      // DFS(v * 2 + 1); // 중위순회

      // DFS(v * 2);
      // DFS(v * 2 + 1);
      // console.log(v); // 후위순회
    }
  };
  DFS(number);
}
console.time();
console.log(solution(1));
console.timeEnd();
