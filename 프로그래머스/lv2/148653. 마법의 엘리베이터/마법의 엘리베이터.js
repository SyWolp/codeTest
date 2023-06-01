      function solution(storey) {
        const storeyArr = `${storey}`.split("").map((v) => parseInt(v));
        const result = [];
        storeyArr.unshift(0);
        for (let i = storeyArr.length - 1; i >= 0; i--) {
          if (
            storeyArr[i] > 5 ||
            (storeyArr[i] === 5 && storeyArr[i - 1] > 4)
          ) {
            result.push(10 - storeyArr[i]);
            storeyArr[i - 1] += 1;
          } else {
            result.push(storeyArr[i]);
          }
        }
        return result.reduce((a, b) => a + b);
      }