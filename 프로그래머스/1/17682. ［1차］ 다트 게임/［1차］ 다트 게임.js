const sqrt = (number, value) => {
        switch (value) {
          case "S":
            return number;
          case "D":
            return number ** 2;
          case "T":
            return number ** 3;
          default:
            number;
        }
      };
      function solution(dartResult) {
        const numberSqrt = [];
        let st = "";
        let bs = "";
        const dartSplit = dartResult.split("");
        const bonusArr = [];
        for (let k = 0; k < dartSplit.length; k++) {
          if (
            (k !== 0 && st.length >= 2 && dartSplit[k] === "0") ||
            (k !== 0 && /[1-9]/.test(dartSplit[k]))
          ) {
            numberSqrt.push(st);
            bonusArr.push(bs);
            st = "";
            bs = "";
          }
          if (!/[#*]/.test(dartSplit[k])) {
            st += dartSplit[k];
          } else {
            bs = dartSplit[k];
          }
          if (k === dartSplit.length - 1) {
            numberSqrt.push(st);
            bonusArr.push(bs);
          }
        }
        for (let i = 0; i < numberSqrt.length; i++) {
          const values = numberSqrt[i].split("");
          const value = values.pop();
          bonusArr[i] = sqrt(parseInt(values.join("")), value) + bonusArr[i];
        }
        for (let j = 0; j < bonusArr.length; j++) {
          const num = bonusArr[j].split("");
          const val = num.pop();
          if (bonusArr[j].includes("#")) {
            bonusArr[j] = parseInt(num.join("")) * -1;
          } else if (bonusArr[j].includes("*")) {
            if (j !== 0) {
              bonusArr[j - 1] = bonusArr[j - 1] * 2;
            }
            bonusArr[j] = num.join("") * 2;
          }
        }
        return bonusArr.reduce((a, b) => parseInt(a) + parseInt(b));
      }