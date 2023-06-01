      function solution(n, s) {
        const arr = Array.from({ length: n }, () => Math.ceil(s / n));
        const minus = arr.reduce((a, b) => a + b) - s;
        for (let i = 0; i < minus; i++) {
          arr[i]--;
        }
        return arr.includes(0) ? [-1] : arr;
      }