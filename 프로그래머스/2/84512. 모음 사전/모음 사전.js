function solution(word) {
        let result = 0;
        const wordArr = {
          1: "A",
          2: "E",
          3: "I",
          4: "O",
          5: "U",
        };
        const arr = [];
        const DFS = (v, p) => {
          if (result !== 0) return;
          const a = p
            .filter((value) => value !== 0)
            .map((v) => wordArr[v])
            .join("");
          if (a === word) {
            result = arr.length;
            return;
          } else {
            if (arr.some((value) => value === a) === false) {
              arr.push(a);
            }
            if (v === 5) {
              return;
            } else {
              if (p[v - 1] === 0) return;
              p[v] = p[v] + 1;
              DFS(v + 1, p);
              if (p[v] < 5) {
                if (p[v + 1] !== 0) {
                  p[v] = p[v] + 1;
                }
                DFS(v, p);
              } else if (p[v] === 5) {
                p[v] = 0;
                DFS(v + 1, p);
              }
            }
          }
        };

        DFS(0, [0, 0, 0, 0, 0]);
        return result;
      }