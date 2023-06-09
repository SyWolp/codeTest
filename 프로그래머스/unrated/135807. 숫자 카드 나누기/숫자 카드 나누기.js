function solution(arrayA, arrayB) {
        const arrrrr = [];
        const fn = (fArr, sArr) => {
          const aArr = [];
          for (let i = 2; i <= fArr[0]; i++) {
            if (fArr[0] % i === 0) aArr.push(i);
          }
          let result = -1;
          const bArr = aArr.sort((a, b) => b - a);
          for (let j = 0; j < bArr.length; j++) {
            if (result !== -1) break;
            for (let k = 0; k < fArr.length; k++) {
              if (sArr[k] % bArr[j] === 0) break;
              if (fArr[k] % bArr[j] !== 0) break;
              if (k === fArr.length - 1) {
                result = bArr[j];
                arrrrr.push(result);
                break;
              }
            }
          }
        };
        fn(arrayA, arrayB);
        fn(arrayB, arrayA);
        return arrrrr.length ? Math.max(...arrrrr) : 0;
      }