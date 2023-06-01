function solution(price, money, count) {
    let mo = price;
    let answer = 0;
    let result = 0;
    let i = 0;
    while(i < count) {
      answer += mo;
      result += answer;
      i++;
    }
    if(result - money < 0) {
        return 0;
    }else{
    return result - money;
        }
}