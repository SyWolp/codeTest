function solution(brown, yellow) {
  let result = [];
  const num = brown + yellow;
  for(let i = 3; i <= brown; i++) {
    if((((brown - (i+i)) / 2) + 2) * i === num) {
      result = [i, (((brown - (i+i)) / 2) + 2)];
    }
  }
  return result;
}