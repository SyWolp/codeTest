function solution(s) {
        const sArr = s.split("");
        let firstString = "";
        let stringArr = [];
        const resultArr = [];
        while (sArr.length) {
          if (firstString === "") firstString = sArr[0];
          stringArr.push(sArr.shift());
          const string = stringArr.filter((v) => v === firstString);
          const notString = stringArr.filter((v) => v !== firstString);
          if (string.length === notString.length) {
            resultArr.push(stringArr);
            stringArr = [];
            firstString = "";
          }
        }
        if (stringArr.length) resultArr.push(stringArr);
        return resultArr.length;
      }