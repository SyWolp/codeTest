function solution(s) {
  const a = [];
  for(let i = 0; i < s.length; i++) {
    let result = -1;
    for(let j = i-1; j >= 0; j--) {
      if(s[i] === s[j]) {
        result = i - j;
        break;
      }
    }
    a.push(result);
  }
  return a;
}