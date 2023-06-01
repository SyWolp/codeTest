function solution(s) {
  let i = 0;
  let arr = [];
  let str = "";
  while( i < s.length) {
    arr.push(s.charCodeAt(i));
    i++;
  }
  arr.sort((a,b)=>{
    return b-a;
  })
  
  arr.forEach((v,i,a)=>{
   str += String.fromCharCode(a[i]);
  })
    return str;
}