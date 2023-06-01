 function solution(sequence, k) {
        let a = sequence[0];
        let result = 0;
        const arr = [0, 0];
        let resultArr = [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER];
        for (let i = 0; i < sequence.length; i++) {
          result += sequence[i];
          arr[1] = i;
          if (result >= k) {
            if (result > k) {
              while (result > k) {
                result -= sequence[arr[0]];
                arr[0]++;
              }
            }
            if (result === k) {
              if (resultArr[1] - resultArr[0] > arr[1] - arr[0]) {
                resultArr = [...arr];
              }
              result -= sequence[arr[0]];
              arr[0]++;
            }
          }
        }
        return resultArr;
      }