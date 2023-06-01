      function solution(n) {
        const result = [2];
        for (let i = 2; i <= n; i++) {
          let boolean = true;
          for (let j = 2; j <= Math.ceil(Math.sqrt(i)); j++) {
            if (i % j === 0) {
              boolean = false;
              break;
            }
          }
          if (boolean) result.push(i);
        }
        return result.length;
      }