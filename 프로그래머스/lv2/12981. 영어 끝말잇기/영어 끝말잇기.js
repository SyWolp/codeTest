      function solution(n, words) {
        const arrs = Array.from({ length: n }, (_, x) => []);
        const resultArr = [];
        let result = [0, 0];
        let i = 1;
        let j = 1;
        const length = words.length;
        while (words.length >= 1) {
          resultArr.unshift(words.shift());
          if (!words.length) break;
          if (i > n) i = 1;
          if (
            resultArr[0][resultArr[0].length - 1] !== words[0][0] ||
            resultArr.some((v) => v === words[0])
          ) {
            result = [(j % n) + 1, Math.ceil((j + 1) / n)];
            break;
          }
          i++;
          j++;
        }
        return result;
      }