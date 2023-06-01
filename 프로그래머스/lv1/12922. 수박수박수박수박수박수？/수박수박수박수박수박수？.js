function solution(n) {
    let answer = '';
    let i = 0;
    let a = "";
    while(i < Math.ceil(n/2)){
      answer += "수박";
    i++;
  }
  if(n % 2 != 0){
   a += answer.substr(0,n);
  }else{
    a+= answer;
  }
    return a;
}