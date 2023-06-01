function solution(food) {
  const a = food.map(v => Math.floor(v / 2));
  const b = [];
  for(let i = 0; i < a.length; i++) {
    for(let j = 0; j < a[i]; j++) {
      b.push(i)
    }
  }
  return [...b, 0 ,...b.reverse()].join('');
}