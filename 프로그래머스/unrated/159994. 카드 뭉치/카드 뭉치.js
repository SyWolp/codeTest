      function solution(cards1, cards2, goal) {
        const arr = [];
        let i = 0;
        while (arr.length < goal.length) {
          if (cards1[0] === goal[i]) {
            arr.push(cards1.shift());
            i++;
          } else if (cards2[0] === goal[i]) {
            arr.push(cards2.shift());
            i++;
          } else {
            break;
          }
        }
        return arr.length === goal.length ? "Yes" : "No";
      }