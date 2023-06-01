function solution(numbers) {
    let answer = [];
    let c = 0;
    let i = 0;
    let nL = numbers.length;
    let kk = [];
    while(i < nL){
      let j = 1;
      while(j < numbers.length){
        c = numbers[0] + numbers[j];
          answer.push(c);
        j++;
        }
        numbers.shift();
      i++;
    }
    answer.sort((a,b)=>{
      return a-b;
    })
    let k = 0;
    while(k < answer.length){
      let l = 0;
      while(l < answer.length){
        if(k == l) {
        l += 1;
        }
        if(answer[k] == answer[l]) {
          answer[l] = "a";
        }
        l++;
      }
      k++;
    }
    let p = 0;
    while(p < answer.length){
    if(answer[p] != "a"){
        kk.push(answer[p]);
        }
        p++;
      }
    return kk;
}