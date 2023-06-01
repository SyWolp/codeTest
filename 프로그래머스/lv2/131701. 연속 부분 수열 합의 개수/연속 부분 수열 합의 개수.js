      function solution(elements) {
        let arr = [];
        const resultArr = [];
        for (let i = 0; i < elements.length; i++) {
          for (let j = 0; j < elements.length; j++) {
            if (arr.length) arr.push(arr[arr.length - 1] + elements[j]);
            else arr.push(elements[0]);
          }
          resultArr.push(arr);
          arr = [];
          elements.push(elements.shift());
        }
        return [...new Set(resultArr.flat())].length;
      }