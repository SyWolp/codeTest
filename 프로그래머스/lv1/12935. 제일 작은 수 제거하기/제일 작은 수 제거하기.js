function solution(arr) {
    const a = arr.filter((vv, i) => i !== arr.indexOf(Math.min(...arr)), 1);
    return a.length ? a : [-1]
}