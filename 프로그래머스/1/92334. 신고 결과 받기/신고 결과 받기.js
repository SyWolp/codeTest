    function solution(id_list, report, k) {
        const list = new Map();
        const resultList = {};
        for (let x of id_list) {
          list.set(x, 0);
          resultList[x] = 0;
        }
        const a = [];
        const b = [];
        const c = [];
        const reportArr = [...new Set(report)];
        reportArr
          .join(" ")
          .split(" ")
          .map((v, i) => (i % 2 !== 0 ? a.push(v) : b.push(v)));

        const abc = (zz) => {
          for (let i = 0; i < b.length; i++) {
            if (`${b[i]} ${zz}` === reportArr[i]) {
              resultList[b[i]]++;
            }
          }
        };
        for (let i = 0; i < a.length; i++) {
          if (list.get(a[i]) >= 0) list.set(a[i], list.get(a[i]) + 1);
          if (list.get(a[i]) >= k) {
            abc(a[i]);
            list.delete(a[i]);
          }
        }

        return Object.values(resultList);
      }