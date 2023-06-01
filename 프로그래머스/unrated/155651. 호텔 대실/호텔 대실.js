      function solution(book_time) {
        const a = [...book_time].map((v, i) => parseInt(book_time[i][1].split(":")[1]) >= 50 ? [parseInt(v[0].split(":").join("")),parseInt(v[1].split(":").join("")) + 50,]: [ parseInt(v[0].split(":").join("")),parseInt(v[1].split(":").join("")) + 10]).sort((a, b) => a[0] - b[0]);
        let arr = [];
        const arr2 = [];
        let i = 0;
        while (arr2.length < book_time.length) {
          let temp = a[i][1];
          const flat = arr2.flat();
          if (flat.some((v) => v === i) === false) {
            arr.push(i);
            for (let j = 1; j < a.length; j++) {
              if (temp <= a[j][0] && flat.some((v) => v === j) === false) {
                temp = a[j][1];
                arr.push(j);
              }
            }
          }
          arr2.push(arr);
          arr = [];
          i++;
        }
        return arr2.filter((v) => v.length).length;
      }