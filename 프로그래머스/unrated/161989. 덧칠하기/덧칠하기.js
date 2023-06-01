      function solution(n, m, section) {
        const arr = Array.from({ length: n }, (_, x) =>
          section.includes(x + 1) ? 0 : 1,
        );
        let result = 0;
        while (true) {
          if (arr.every((v) => v === 1)) break;
          const index = arr.findIndex((v) => v === 0);
          for (let i = index; i < m + index; i++) {
            arr[i] = 1;
          }
          result++;
        }
        return result;
      }