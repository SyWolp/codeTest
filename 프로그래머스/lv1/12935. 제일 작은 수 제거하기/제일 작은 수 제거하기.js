function solution(arr) {
  let i = 0;
  let a = "";
  let result = [];
  while(i < arr.length) {
    a = Math.min(...arr);
    i++;
  }
  console.log(Math.min(a));
  let j = 0;
  while(j < arr.length) {
    if(arr[j] != a) {
      result.push(arr[j]);
    }
    j++;
  }
  if(result.length == 0) {
    return [-1];
  }else{
    return result;
  }
}