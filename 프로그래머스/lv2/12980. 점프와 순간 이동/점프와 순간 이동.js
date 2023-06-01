function solution(n) {
    let result = 0;
    while(n > 0) {
        if(n % 2 != 0) {
            n = (n - 1) / 2;
            result++;
        }else{
            n = n / 2
        }
    }
    return result;
}