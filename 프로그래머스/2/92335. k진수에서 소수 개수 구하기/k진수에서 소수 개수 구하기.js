 function solution(n, k) {
        const number = n.toString(k);
        let s = "";
        let result = 0;
        for (let i = 0; i < number.length; i++) {
          if (number[i] === "0" || i === number.length - 1) {
            if (i === number.length - 1 && number !== "0") s += number[i];
            if (s === "1" || s === "") {
              s = "";
              continue;
            }
            if (s === "2") {
              result++;
              s = "";
              continue;
            }
            for (let j = 2; j <= parseInt(Math.sqrt(parseInt(s))) + 1; j++) {
              if (j === parseInt(Math.sqrt(parseInt(s))) + 1) result++;
              else if (parseInt(s) % j === 0) {
                break;
              }
            }
            s = "";
          } else {
            s += number[i];
          }
        }
        return result;
      }