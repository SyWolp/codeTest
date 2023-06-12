      function solution(routes) {
        const arr = routes.sort((a, b) => a[0] - b[0]);
        let ab = [arr[0][0], arr[0][1]];
        let result = 1;
        for (let i = 1; i < arr.length; i++) {
          if (ab[1] >= arr[i][0]) {
            ab[1] = Math.min(ab[1], arr[i][1]);
          } else {
            result++;
            ab = [arr[i][0], arr[i][1]];
          }
        }
        return result;
      }