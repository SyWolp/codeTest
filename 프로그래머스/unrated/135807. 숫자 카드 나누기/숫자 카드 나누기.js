function solution(arrayA, arrayB) {
        const aArr = [];
        const cArr = [];
        for (let i = 2; i <= arrayA[0]; i++) {
          if (arrayA[0] % i === 0) aArr.push(i);
        }
        for (let i = 2; i <= arrayB[0]; i++) {
          if (arrayB[0] % i === 0) cArr.push(i);
        }
        let result = -1;
        let result2 = -1;
        const bArr = aArr.sort((a, b) => b - a);
        const dArr = cArr.sort((a, b) => b - a);
        for (let j = 0; j < bArr.length; j++) {
          if (result !== -1) break;
          for (let k = 0; k < arrayA.length; k++) {
            if (arrayA[k] % bArr[j] !== 0) break;
            if (arrayB[k] % bArr[j] === 0) break;
            if (k === arrayA.length - 1) {
              result = bArr[j];
              break;
            }
          }
        }
        for (let j = 0; j < dArr.length; j++) {
          if (result2 !== -1) break;
          for (let k = 0; k < arrayA.length; k++) {
            if (arrayA[k] % dArr[j] === 0) break;
            if (arrayB[k] % dArr[j] !== 0) break;
            if (k === arrayA.length - 1) {
              result2 = dArr[j];
              break;
            }
          }
        }
        const max = Math.max(result, result2);
        return max === -1 ? 0 : max;
      }