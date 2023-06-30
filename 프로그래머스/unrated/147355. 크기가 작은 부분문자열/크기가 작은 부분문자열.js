function solution(t, p) {
        const pLength = p.length;
        const tSplit = t.split("");
        let string = [];
        let result = 0;
        for (let i = 0; i < tSplit.length; i++) {
          string.push(tSplit[i]);
          if (string.length === pLength) {
            if (parseInt(string.join("")) <= parseInt(p)) {
              result++;
            }
            string.shift();
          }
        }
        return result;
      }