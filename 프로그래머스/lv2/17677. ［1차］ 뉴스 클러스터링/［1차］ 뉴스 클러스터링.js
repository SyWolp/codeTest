function solution(str1, str2) {
        const sumArr = [];
        let [min, max] = [0, 0];

        const strings = (str) => {
          const arr = [];
          for (let i = 0; i < str.length; i++) {
            if (/[a-zA-Z]/.test(str[i]) && /[a-zA-Z]/.test(str[i + 1]) && str[i + 1]) {
              const s = str[i].toUpperCase() + str[i + 1].toUpperCase();
              arr.push(s);
              if (!sumArr.includes(s)) sumArr.push(s);
            }
          }
          return arr;
        };
        const mapFn = (v) => {
          const map = new Map();
          const strArr = strings(v);
          for (let i = 0; i < strArr.length; i++) {
            if (map.has(strArr[i])) map.set(strArr[i], map.get(strArr[i]) + 1);
            else map.set(strArr[i], 1);
          }
          return map;
        };
        const a1 = mapFn(str1);
        const a2 = mapFn(str2);
        for (let j = 0; j < sumArr.length; j++) {
          const one = a1.has(sumArr[j]) ? a1.get(sumArr[j]) : 0;
          const two = a2.has(sumArr[j]) ? a2.get(sumArr[j]) : 0;
          min += Math.min(one, two);
          max += Math.max(one, two);
        }
        return min ? parseInt((min / max) * 65536) : max ? 0 : 65536;
      }