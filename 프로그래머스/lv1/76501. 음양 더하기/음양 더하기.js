function solution(absolutes, signs) {
    let i = 0;
    let b = 0;
    while(i < absolutes.length){
        if(signs[i] == true){
          b += absolutes[i];          
        }else{
          b -= absolutes[i];
        }
        i++;
    }
    return b;
}