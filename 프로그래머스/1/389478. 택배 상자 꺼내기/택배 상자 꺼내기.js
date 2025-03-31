function solution(n, w, num) {
    const newN = Math.ceil(n / w) * w;
    const newArr = [];
    let setArr = [];
    for(let i = 1; i <= newN; i++) {
       if(i <= n) {
           if(newArr.length % 2 !== 0) {
           setArr.unshift(i);
           } else {
           setArr.push(i);
           }
       } else {
            if(newArr.length % 2 !== 0) {
           setArr.unshift(null);
           } else {
           setArr.push(null);
           }
       }
       if(setArr.length >= w) {
           newArr.unshift(setArr)
           setArr = [];
       }
    }
    const index = newArr.length - Math.ceil(num / w);
    const findIndex = newArr[index].findIndex((v) => v === num);
    return newArr[0][findIndex] ? index + 1 : index
}