      function solution(n, left, right) {
        let j = (left % n) + 1;
        const arr = [];
        for (let i = left + 1; i <= right + 1; i++) {
          const x = Math.ceil(i / n);
          arr.push(Math.max(x, j));
          j++;
          if (j === n + 1) j = 1;
        }
        return arr;
      }