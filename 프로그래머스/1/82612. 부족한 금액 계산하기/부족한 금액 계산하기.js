function solution(price, money, count) {
    const result = Array.from({length: count}, (_,x) => x + 1).map((v) => v * price).reduce((a,b) => a + b) - money;
    return result > 0 ? result : 0;
}