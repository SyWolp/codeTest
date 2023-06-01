      function solution(cacheSize, cities) {
        const arr = [];
        let result = 0;
        cities = cities.map((v) => v.toLowerCase());
        for (let i = 0; i < cities.length; i++) {
          const find = arr.findIndex((v) => v === cities[i]);
          if (find >= 0) {
            result++;
            arr.push(...arr.splice(find, 1));
          } else {
            if (arr.length < cacheSize) {
              arr.push(cities[i]);
              result += 5;
            } else {
              result += 5;
              arr.shift();
              arr.push(cities[i]);
            }
          }
        }
        return cacheSize ? result : cities.length * 5;
      }