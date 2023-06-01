function solution(k, score) {
  const arr = [];
  const result = [];
  for(let i = 0; i < score.length; i++) {
    arr.push(score[i]);
    if(arr.length < k) {
    result.push(Math.min(...arr));
    }else{
      result.push(arr.sort((a,b) => b-a)[k-1]);
    }
  }
  return result;
}