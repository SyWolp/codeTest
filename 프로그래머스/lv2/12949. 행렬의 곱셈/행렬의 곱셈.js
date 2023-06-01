      function solution(arr1, arr2) {
        let answer = [];
        const resultBox = [];
        const arr2Length = arr2[0].length;
        for (let i = 0; i < arr1.length; i++) {
          for (let j = 0; j < arr2Length; j++) {
            let result = 0;
            for (let k = 0; k < arr2.length; k++) {
              result += arr1[i][k] * arr2[k][j];
            }
            answer.push(result);
          }
          resultBox.push(answer);
          answer = [];
        }
        return resultBox;
      }