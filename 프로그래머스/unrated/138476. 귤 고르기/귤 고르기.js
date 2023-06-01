      function solution(k, tangerine) {
        const tangerineSort = tangerine.sort((a, b) => b - a);
        let arr = [tangerineSort.shift()];
        const arr2 = [];
        while (tangerineSort.length) {
          if (arr[arr.length - 1] === tangerineSort[0])
            arr.push(tangerineSort.shift());
          else {
            arr2.push(arr);
            arr = [tangerineSort.shift()];
          }
        }
        if (arr.length) arr2.push(arr);
        const arr2Sort = arr2.sort((a, b) => b.length - a.length);
        let result = 0;
        for (let i = 0; i < arr2Sort.length; i++) {
          result += arr2Sort[i].length;
          if (result >= k) {
            result = i + 1;
            break;
          }
        }
        return result;
      }