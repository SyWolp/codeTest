function solution(priorities, location) {
  const lo = `${priorities[location]}`;
  const abc = [...priorities];
  let a = '';
  abc[location] = lo;
  let j = 0;
  while(true) {
    // console.log(abc, a, j)
    if(a === lo || abc.length === 0) {
      break;
    }else if(abc[0] == Math.max(...abc)) {
      a = abc.shift();
      j++;
    }else {
      abc.push(abc.shift());
    }

  }
  return j;
}