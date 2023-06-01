function solution(s, n) {
    let answer = '';
    let result = "";
    let sm = /[a-z]/;
    let bi = /[A-Z]/;
    for(key in s) {
      console.log(s[key].charCodeAt(0));
      if(s[key].charCodeAt(0) == 32) {
        result += " ";
      }else if(s[key].charCodeAt(0) + n > 122 && sm.test(s[key])){
        answer = ((s[key].charCodeAt(0) + n) - 122 + 97) - 1 ;
        result += String.fromCharCode(answer);
      }else if(s[key].charCodeAt(0) + n > 90 && bi.test(s[key])) {
        answer = ((s[key].charCodeAt(0) + n) - 90 + 65) - 1 ;
        result += String.fromCharCode(answer);
      }else{
      answer = s[key].charCodeAt(0) + n;
      result += String.fromCharCode(answer);
      }
    }
    return result;
}