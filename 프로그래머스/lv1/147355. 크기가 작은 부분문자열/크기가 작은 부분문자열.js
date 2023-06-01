      function solution(t, p) {
        if (p.length > t.length) return 0;
        let i = 0;
        let arr = [];
        const arr2 = [];
        while (i < t.length) {
          for (let j = i; j < p.length + i; j++) {
            if (typeof t[j] !== "string") break;
            arr.push(t[j]);
          }
          if (arr.length === p.length) arr2.push(parseInt(arr.join("")));
          arr = [];
          i++;
        }
        return arr2.filter((v) => v <= parseInt(p)).length;
      }