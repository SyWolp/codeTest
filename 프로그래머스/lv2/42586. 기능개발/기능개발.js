function solution(progresses, speeds) {
  const k = Array.from({length:progresses.length},(_,x) => 0);
  let i = 0;
  const abc = [];
  while(true) {
    if(i === progresses.length) i = 0;
    if(!progresses.every(v => v >= 100)) {
      if(progresses[i] < 100) {
        progresses[i] += speeds[i];
        k[i]++;
      }
    }else {
      break;
    }
    i++;
  }
  let aaa = 1;
  for(let j = 0; j < k.length; j++) {
    if(k[0] >= k[j+1]) {
      aaa++;
    }else {
      abc.push(k.splice(0,aaa));
      j = -1;
    aaa = 1;
    }
  }
  return abc.map(v => v.length)
}