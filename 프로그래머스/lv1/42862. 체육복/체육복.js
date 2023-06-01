function solution(n, lost, reserve) {
  const arr = [...new Set([...lost, ...reserve].sort((a,b) => a-b))];
  const a = arr.filter(v => !reserve.includes(v));
  const b = arr.filter(v => !lost.includes(v));
  let result = reserve.length;
  for(let i = 0; i < a.length; i++) {
    for(let j = 0; j < b.length; j++) {
     if(a[i] === b[j] + 1 || b[j] - 1 === a[i]) {
        result += 1;
        b.splice(j, 1);
      }
    }
  }
  return result + (n - arr.length)
}