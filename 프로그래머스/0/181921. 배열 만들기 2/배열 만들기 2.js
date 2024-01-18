function solution(l, r) {
    const result = [];
    for(let i = l; i <= r; i++) {
        if(`${i}`.split('').every((value) => value === '5' || value === '0')) {
             result.push(i);
        }
    }
    return result.length ? result : [-1]
}