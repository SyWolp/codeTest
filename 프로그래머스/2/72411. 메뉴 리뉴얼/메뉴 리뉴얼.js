     function solution(orders, course) {
        const result = [];
        const map = new Map();
        const indexMap = new Map();
        const DFS = (item, index, text, i) => {
          const textString = text.sort().join("");
          if (index > item.length) {
            return;
          } else {
            if (map.has(textString) && !indexMap.has(`${i}${textString}`)) {
              indexMap.set(`${i}${textString}`, true);
              map.set(textString, map.get(textString) + 1);
            } else if (
              !map.has(textString) &&
              course.some((v) => v === textString.length)
            ) {
              map.set(textString, 1);
              indexMap.set(`${i}${textString}`, true);
            }
            text.push(item[index]);
            DFS(item, index + 1, text.sort(), i);
            text.pop();
            DFS(item, index + 1, text.sort(), i);
          }
        };
        for (let i = 0; i < orders.length; i++) {
          DFS(orders[i].split("").sort(), 0, [], i);
        }
        const arrayMap = [...map];
        for (let j = 0; j < course.length; j++) {
          const filter = arrayMap.filter((v) => v[0].length === course[j]);
          const sort = filter.sort((a, b) => b[1] - a[1])[0];
          if (!sort || sort[1] < 2) continue;
          else if (sort[1] > 1) result.push(sort[0]);
          for (let k = 1; k < filter.length; k++) {
            if (sort[1] <= filter[k][1]) {
              result.push(filter[k][0]);
            } else {
              break;
            }
          }
        }
        return result.sort();
      }