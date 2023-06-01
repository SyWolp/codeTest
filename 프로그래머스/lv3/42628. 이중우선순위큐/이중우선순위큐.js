function solution(operations) {
  const abc = operations.map(v => v.split(' '));
  let result = [0, 0];
  const a = [];
  for(let i = 0; i < abc.length; i++) {
    if(abc[i][0] === "I") {
      a.push(parseInt(abc[i][1]))
    }else if(abc[i][1] === '-1') {
      a.splice(a.findIndex(v => v === Math.min(...a)), 1)
    }else if(abc[i][1] === '1') {
      a.splice(a.findIndex(v => v === Math.max(...a)), 1)
    }
    if(a.length === 1) {
        result = [Math.max(...a), 0];
    }else if(a.length === 0) {
        result = [0, 0];
    }else {
      result = [Math.max(...a), Math.min(...a)];
    }
  }
  return result
}