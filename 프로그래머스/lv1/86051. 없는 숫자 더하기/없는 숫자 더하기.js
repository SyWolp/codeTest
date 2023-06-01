function solution(numbers) {
    let a = 45;
    let i = 0;
    let nn = 0;
    while(i < numbers.length){
        nn += numbers[i];
        i++;
    }
    let n = a - nn;
    return n;
}