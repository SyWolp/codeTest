function solution(s) {
    let arr = [];
    let num = /[0-9]/;
    let a = /^z..o$/g;
    let b = /^o.e$/g;
    let c = /^t.o$/g;
    let d = /^t...e$/g;
    let e = /^f..r$/g;
    let f = /^f..e$/g;
    let g = /^s.x$/g;
    let h = /^s...n$/g;
    let i = /^e...t$/g;
    let j = /^n..e$/g;
    let k = 0;
    let ab = "";
    let cd = "";
    while(k < s.length){
      arr.push(s[k]);
      ab += arr;
      arr = [];
      if(a.test(ab)){
        ab = 0;
        cd += ab;
        ab = "";
      }
      if(b.test(ab)){
        ab = 1;
        cd += ab;
        ab = "";
      }
      if(c.test(ab)){
        ab = 2;
        cd += ab;
        ab = "";
      }
      if(d.test(ab)){
        ab = 3;
        cd += ab;
        ab = "";
      }
      if(e.test(ab)){
        ab = 4;
        cd += ab;
        ab = "";
      }
      if(f.test(ab)){
        ab = 5;
        cd += ab;
        ab = "";
      }
      if(g.test(ab)){
        ab = 6;
        cd += ab;
        ab = "";
      }
      if(h.test(ab)){
        ab = 7;
        cd += ab;
        ab = "";
      }
      if(i.test(ab)){
        ab = 8;
        cd += ab;
        ab = "";
      }
      if(j.test(ab)){
        ab = 9;
        cd += ab;
        ab = "";
      }
      if(num.test(ab)){
        cd += ab;
        ab = "";
      }
      k++;
    }
    let kk = parseInt(cd);
    return kk;
}