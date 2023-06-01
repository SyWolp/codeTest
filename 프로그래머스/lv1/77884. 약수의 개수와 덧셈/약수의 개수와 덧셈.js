function solution(left, right) {
  let i = 0;
  let j = 0;
  let l = 0;
  let array = [];
  let zero = [];
  let zeroTwo = [];
  let result = 0;
  while(left+i <= right){
    array.push(left+i);
    i++;
  }
  while(j < array.length){
    let k = 0;
    while(k <= array[j]){
    if(array[j] % k == 0){
      zero.push(k);
      if(k == array[j]){
        zeroTwo.push(zero.length);
        zero = [];
      }
    }
    k++;
  }
  j++;
}
  while(l < zeroTwo.length){
    if(zeroTwo[l] % 2 == 0){
      result += array[l];
    }else{
      result -= array[l];
    }
    l++;
  }
    return result;
}