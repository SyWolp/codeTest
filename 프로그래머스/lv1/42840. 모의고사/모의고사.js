      function solution(answers) {
        const ob = [
          [[1, 2, 3, 4, 5], 0, 1],
          [[2, 1, 2, 3, 2, 4, 2, 5], 0, 2],
          [[3, 3, 1, 1, 2, 2, 4, 4, 5, 5], 0, 3],
        ];
        for (let j = 0; j < 3; j++) {
          let k = 0;
          for (let i = 0; i < answers.length; i++) {
            if (ob[j][0][k] === answers[i]) ob[j][1]++;
            k++;
            if (ob[j][0].length === k) k = 0;
          }
        }
        return ob
          .sort((a, b) => b[1] - a[1])
          .filter((v, i, a) => a[0][1] === v[1])
          .sort((a, b) => a[2] - b[2])
          .map((vv) => vv[2]);
      }