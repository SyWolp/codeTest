function solution(answers) {
  const a = answers.map(v => v[1]).sort();
  let b = [];
  const t = [];
  for(let i = 0; i < a.length; i++) {
    b.push(a[i]);
    if(a[i] !== a[i+1]) {
      t.push(b.length+1);
      b = [];
    }
  }
  return  t.reduce((a,b) => a * b) === answers.length ? answers.length : t.reduce((a,b) => a * b) - 1
}