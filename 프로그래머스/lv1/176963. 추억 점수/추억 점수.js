      function solution(name, yearning, photo) {
        const resultArr = Array.from({ length: name.length }, (_, x) => 0);
        const result = [];
        for (let i = 0; i < photo.length; i++) {
          const copyArr = [...resultArr];
          for (let j = 0; j < photo[i].length; j++) {
            const index = name.findIndex((v) => v === photo[i][j]);
            if (index !== -1) {
              copyArr[index] += yearning[index];
            }
          }
          result.push(copyArr.reduce((a, b) => a + b));
        }
        return result;
      }