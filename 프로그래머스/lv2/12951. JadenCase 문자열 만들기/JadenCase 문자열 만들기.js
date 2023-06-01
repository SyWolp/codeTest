    function solution(s) {
      let answer = s.toLowerCase().split('');

      for(let i = 0; i < answer.length; i++) {
        if(answer[i-1] === ' ' || i === 0) {
          answer[i] = answer[i].toUpperCase();
        }
      }
      return answer.join('');
    }