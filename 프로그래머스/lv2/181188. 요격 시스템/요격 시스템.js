function solution(targets) {
        const targetSort = targets.sort((a, b) => a[1] - b[1]);
        let cur = [targetSort[0][0], targetSort[0][1]];
        let result = 1;
        for (let i = 1; i < targetSort.length; i++) {
          if (targetSort[i][0] >= cur[1] || targetSort[i][1] <= cur[0]) {
            result++;
            cur = [targetSort[i][0], targetSort[i][1]];
          } else {
            cur = [
              Math.max(cur[0], targetSort[i][0]),
              Math.min(cur[1], targetSort[i][1]),
            ];
          }
        }
        return result;
      }