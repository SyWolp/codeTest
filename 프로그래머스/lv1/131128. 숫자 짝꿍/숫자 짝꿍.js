     function solution(X, Y) {
        const xHash = {};
        const yHash = {};
        const arr = [];
        for (let i = 0; i < X.length; i++) {
          if (xHash[X[i]]) xHash[X[i]] = parseInt(xHash[X[i]]) + 1;
          else xHash[X[i]] = 1;
        }
        for (let i = 0; i < Y.length; i++) {
          if (yHash[Y[i]]) yHash[Y[i]] = parseInt(yHash[Y[i]]) + 1;
          else yHash[Y[i]] = 1;
        }

        for (let i = 0; i <= 9; i++) {
          if (xHash[`${i}`] && yHash[`${i}`]) {
            for (let j = 0; j < Math.min(xHash[`${i}`], yHash[`${i}`]); j++) {
              arr.push(i);
            }
          }
        }
        return arr.length
          ? arr.sort((a, b) => b - a).join("")[0] === "0"
            ? "0"
            : arr.sort((a, b) => b - a).join("")
          : "-1";
      }
