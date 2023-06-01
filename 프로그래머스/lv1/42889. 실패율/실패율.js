function solution(N, stages) {
  let a = [];
  const c = [];
  let zz = stages.length;

  for(let i = 1; i <= N; i++) {
    for(let j = 0; j < stages.length; j++) {
      if(i === stages[j]) a.push(i);
    }
    c.push([(a.length / zz) , i]);
    zz = zz - a.length;
    a = []
  }
  return c.sort((a,b) => b[0] - a[0]).map(v => v[1])
}