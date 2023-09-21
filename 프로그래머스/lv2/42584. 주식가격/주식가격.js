function solution(prices) {
        const resultArr = Array.from({ length: prices.length }, () => 0);
        for (let i = prices.length - 1; i >= 0; i--) {
          for (let j = i + 1; j < prices.length; j++) {
            if (prices[j] === undefined || prices[j] < prices[i]) {
              resultArr[i] = j - i;
              break;
            }
            if (j === prices.length - 1) {
              resultArr[i] = j - i;
            }
          }
        }
        return resultArr;
      }