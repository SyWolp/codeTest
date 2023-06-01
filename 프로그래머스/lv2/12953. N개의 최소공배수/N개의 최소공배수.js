function solution(arr) {
  const arrs = arr.sort((a,b) => b-a);
  let i = 1;
  let k = 0;
  let abc = 0;
  let result = 0;
  while(true) {
    abc = arrs[0] * i;
    for(let j = 0; j < arrs.length; j++) {
      if(abc % arrs[j] === 0) {
        k++;
      }
    }
    if(k === arr.length) break;
    k = 0;
    i++;
  }
  return abc;
}