function solution(str) {
    let strArray = [];
    let b = "";
    let i = 0;
    while(i < str.length) {
        strArray.push(str[i]);
        i++;
    }
    if(strArray.length%2 != 0 ) {
      let k = Math.floor(strArray.length/2);
      let c = strArray[k];
      return c;
    }
    if(strArray.length%2 == 0 ) {
      let k = Math.floor(strArray.length/2)-1;
      let a = strArray.splice(k,2);
      for(let j=0; j<2; j++) {
        b += a[j];
      }
      return b;
    }
}