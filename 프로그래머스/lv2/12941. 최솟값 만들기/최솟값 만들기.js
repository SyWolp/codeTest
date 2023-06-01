function solution(A,B){
    let i = 0;
    let answer = 0;
    A.sort((a,b)=>{
      return a-b;
    });
    B.sort((a,b)=>{
      return b-a;
    });
    while( i < A.length ) {
      answer += A[i] * B[i];
      i++;
    } 
    return answer;
}