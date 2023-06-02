      function solution(numbers) {
        const arr = Array.from({ length: numbers.length }, () => -1);
        const subArr = [];
        for (let i = 0; i < numbers.length; i++) {
          if (numbers[i] < numbers[i + 1]) {
            arr[i] = numbers[i + 1];
          } else {
            subArr.push([numbers[i], i]);
          }
          if (subArr.length) {
            while (subArr[subArr.length - 1][0] < numbers[i + 1]) {
              arr[subArr[subArr.length - 1][1]] = numbers[i + 1];
              subArr.pop();
              if (subArr.length === 0) break;
            }
          }
        }
        return arr;
      }