      function solution(dirs) {
        const arr = [0, 0];
        const answer = [];
        const answer2 = [];
        let a = "";
        for (let i = 0; i < dirs.length; i++) {
          switch (dirs[i]) {
            case "U":
              if (arr[0] === 5) break;
              arr[0]++;
              break;
            case "R":
              if (arr[1] === 5) break;
              arr[1]++;
              break;
            case "D":
              if (arr[0] === -5) break;
              arr[0]--;
              break;
            case "L":
              if (arr[1] === -5) break;
              arr[1]--;
              break;
          }
          if (a === `${arr[0]}${arr[1]}`) continue;
          if (answer.length === 0) {
            answer.push(`00${arr[0]}${arr[1]}`);
          } else {
            if (
              answer.some(
                (v) =>
                  v === `${a}${arr[0]}${arr[1]}` ||
                  // (arr[0] === 0 && arr[1] === 0),
                  v === `${arr[0]}${arr[1]}${a}`,
              )
            ) {
              answer2.push(`${a}${arr[0]}${arr[1]}`);
              answer.push(`${a}${arr[0]}${arr[1]}`);
            } else {
              answer.push(`${a}${arr[0]}${arr[1]}`);
            }
          }
          a = `${arr[0]}${arr[1]}`;
        }
        return answer.length - answer2.length;
        // return kk.length;
      }