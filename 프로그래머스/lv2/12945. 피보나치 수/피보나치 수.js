function solution(n) {
    let zeroOne = [0,1];
    for(let i = 0; i < n-1; i++) {
    zeroOne.push((zeroOne[0] + zeroOne[1])%1234567);
    zeroOne.shift();
    }
    return zeroOne[1];
}