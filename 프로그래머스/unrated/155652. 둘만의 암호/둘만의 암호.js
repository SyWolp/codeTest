 function solution(s, skip, index) {
        const abc = `abcdefghijklmnopqrstuvwxyz`
          .split("")
          .filter((v) => !skip.includes(v));
        let result = "";
        for (let x of s) {
          const ii = abc.findIndex((v) => v === x);
          result += abc[(index + ii) % abc.length];
        }
        return result;
      }