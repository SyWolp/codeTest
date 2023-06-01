function solution(n, works) {
    
  let result = works.reduce((a,b) => a+b);
  if(result < n) return 0
  const t = works.sort((a,b) => a-b);
  for(let i = 0; i < n; i++) {
    const max = t[t.length-1];
    for(let j = 0; j < t.length; j++) {
      if(max <= t[j]) {
        t[j]--;
        break;
      }
    }
  }
  return t.map(v => v ** 2).reduce((a,b) => a+b)
}