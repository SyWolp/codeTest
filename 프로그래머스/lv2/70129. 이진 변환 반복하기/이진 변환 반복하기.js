      function solution(s) {
        const splitS = s.split("");
        let zero = splitS.filter((v) => v === "0").length;
        let one = splitS.filter((v) => v === "1").length;
        let i = 0;
        while (true) {
          if (one == 1) break;
          zero += parseInt(one).toString(2).split("").filter((v) => v === "0").length;
          one = parseInt(one).toString(2).split("").filter((v) => v === "1").length;
          i++;
        }
        return [i + 1, zero];
      }