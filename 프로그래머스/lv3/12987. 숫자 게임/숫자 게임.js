      function solution(A, B) {
        const a = A.sort((a, b) => a - b);
        const b = B.sort((a, b) => a - b);
        let [i, j, result] = [0, 0, 0];
        while (j < B.length) {
          if (a[i] < b[j]) {
            i++;
            j++;
            result++;
          } else {
            j++;
          }
        }
        return result;
      }