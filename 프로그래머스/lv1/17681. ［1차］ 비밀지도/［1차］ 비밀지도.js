      function solution(n, arr1, arr2) {
        const a = arr1.map((v) => v.toString(2).split("")).map((v) => v.length < n ? [...Array.from({ length: n - v.length }, (_, x) => 0), ...v] : v);
        const b = arr2.map((v) => v.toString(2).split("")).map((v) => v.length < n ? [...Array.from({ length: n - v.length }, (_, x) => 0), ...v] : v);
        let arr = [];
        const result = [];

        for (let i = 0; i < a.length; i++) {
          for (let j = 0; j < n; j++) {
            if (a[i][j] == 1 || b[i][j] == 1) arr.push("#");
            else arr.push(" ");
          }
          result.push(arr.join(""));
          arr = [];
        }
        return result
      }