function solution(k, m, score) {
    let a = score.sort((a,b) => b-a);
    const arr = [];
    for(let i = 0; i < a.length; i++) {
        if(i !== 1 && i >= m && i % m === 0) {
            arr.push(' ');
        }
        arr.push(a[i]);
    } 
    return arr.join('').split(' ').map(v => v.split('')).map(vv => vv.sort()).map(vvv => vvv.map((vvvv,i,a) =>      a[0] * a.length)).map((vvvvv,ii,aa) => aa[ii].length === m ? vvvvv[0] : 0).reduce((a,b) => a+b)
}