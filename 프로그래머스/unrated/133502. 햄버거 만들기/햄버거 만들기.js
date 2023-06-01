function solution(ingredient) {
  let a = 0;
  let str = '';
  let b = 0;
  let i = 0;
  while( i < ingredient.length ) {
    a = i;
    str = '';
    for(let j = i; j < i+4; j++) {
      str += ingredient[j];
      if(str === '1231') {
        b++;
        ingredient.splice(a, 4);
        i = a-3;
        break;
      }
    }
    i++
  }
  return b;
}