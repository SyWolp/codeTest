      function solution(citations) {
        const a = [...citations].sort((a, b) => b - a);
        const arr = [];
        let result = 0;
        for (let i = 0; i < citations.length; i++) {
          arr.push(a.shift());
          if (arr[arr.length - 1] < arr.length) {
            result = arr.length - 1;
            break;
          } else if (arr[arr.length - 1] === arr.length) {
            result = arr.length;
            break;
          }
        }
        return result === 0? citations.every((v) => v === 0) ? 0 : citations.length: result;
      }