function solution(genres, plays) {
  const a = new Map();
  const result = [];
  for (let i = 0; i < genres.length; i++) {
    if (a.has(genres[i])) {
      const b = a.get(genres[i]);
      a.set(genres[i], [...b, [plays[i], i]]);
    } else a.set(genres[i], [[plays[i], i]]);
  }
  const ob = [];
  for ([key, value] of a) {
    let sum = 0;
    for (let abc of value) {
      sum += abc[0];
    }
    ob.push([key, value.sort((a, b) => b[0] - a[0]), sum]);
  }
  const zz = ob.sort((a, b) => b[2] - a[2]);
  for (let j = 0; j < zz.length; j++) {
    for (let k = 0; k < 2; k++) {
      if (zz[j][1][k]) {
        result.push(zz[j][1][k][1]);
      }
    }
  }
  return result;
}

console.log(
  solution(["a", "b", "c", "d", "e", "e"], [500, 600, 150, 800, 2500, 100]),
);
console.log(
  solution(["pop", "pop", "pop", "rap", "rap"], [45, 50, 40, 60, 70]),
);
