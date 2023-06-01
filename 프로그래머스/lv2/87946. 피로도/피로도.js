function solution(k, dungeons) {
  const Arr = Array.from({ length: dungeons.length }, () => false);
  const a = dungeons.map((v) => v[0]);
  const b = dungeons.map((v) => v[1]);
  let answer = 0;
  const DFS = (he, count) => {
    for (let i = 0; i < dungeons.length; i++) {
      if (he >= a[i] && Arr[i] === false) {
        Arr[i] = true;
        DFS(he - b[i], count + 1);
        Arr[i] = false;
      }
    }
    answer = Math.max(count, answer);
  };
  DFS(k, 0);
  return answer;
}

