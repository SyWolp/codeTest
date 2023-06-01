function solution(s) {
  const a = [];
  const result = (st) => {
    a.push(st.split('').map((v,i) => i % 2 === 0 ? v.toUpperCase() : v.toLowerCase()).join(''));
  }
  s.split(' ').map((v) => result(v));
  
  return a.join(' ');
}