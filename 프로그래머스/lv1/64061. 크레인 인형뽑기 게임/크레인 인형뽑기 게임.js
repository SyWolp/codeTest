function solution(board, moves) {
  let answer = [];
  let mL = moves.length;
  let j = 0;
  let count = 0;
  while(j <= mL) {
    for(let i = 0; i < board.length; i++) {
      if(board[i][moves[j]-1] != 0) {
      answer.push(parseInt(board[i].splice(moves[j]-1,1,0)));
      break;
      }
    }
    j++;
  }
  for(let i = 0; i < answer.length; i++) {
    if(answer[i] === answer[i+1]) {
        answer.splice(i,2);
        count += 2;
        i = -1;
      }
  }
  return count;
}