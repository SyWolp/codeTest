function solution(totalTime, score, time) {
  let result = 0;
  let answer = 0;
  const Arr = Array.from({ length: score.length }, () => false);
  const DFS = (v, re) => {
    for (let i = 0; i < score.length; i++) {
      if (v >= time[i] && Arr[i] === false) {
        Arr[i] = true;
        DFS(v - time[i], re + score[i]);
        Arr[i] = false;
      }
      answer = Math.max(answer, re);
    }
  };
  DFS(totalTime, 0);
  return answer;
}
// console.log(solution(20, [10, 25, 15, 6, 7], [5, 12, 8, 3, 4]));
console.log(solution(10, [10, 5, 15, 25, 100], [5, 5, 5, 5, 10]));
