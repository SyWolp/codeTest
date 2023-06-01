function solution(n) {
  let a = n.toString(2).split('').filter(v => v === '1').length
  let k = n;
  while(true) {
    k++;
    if(k.toString(2).split('').filter(v => v === '1').length === a) {
      break;
    }
  }
  return k
}