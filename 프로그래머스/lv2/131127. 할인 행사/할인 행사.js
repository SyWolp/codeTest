      function solution(want, number, discount) {
        const map = new Map();
        const wantMap = new Map();
        let count = 0;
        let result = 0;
        let next = discount.length >= 10 ? 10 : discount.length;
        want.map((v, i) => wantMap.set(v, number[i]));
        for (let i = 0; i < 10; i++) {
          if (map.has(discount[i]))
            map.set(discount[i], map.get(discount[i]) + 1);
          else map.set(discount[i], 1);
        }
        for (let i = 0; i < discount.length; i++) {
          for (let [key, value] of wantMap) {
            if (map.get(key) !== value) {
              break;
            }
            count++;
          }
          if (count === want.length) result++;
          count = 0;
          map.set(discount[i], map.get(discount[i]) - 1);
          map.set(
            discount[next],
            map.has(discount[next]) ? map.get(discount[next]) + 1 : 1,
          );
          next++;
        }
        return result;
      }