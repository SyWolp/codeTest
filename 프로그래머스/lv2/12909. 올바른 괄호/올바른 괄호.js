function solution(s){
  const sArr = s.split('');
  let j = 0;
  for(let i = 0; i < sArr.length; i++) {
    if(j === -1) {
      break;
    }else if( sArr[i] === '(') {
      j++;
    }else {
      j--;
    }
  }
  return j === 0 ? true : false;
}