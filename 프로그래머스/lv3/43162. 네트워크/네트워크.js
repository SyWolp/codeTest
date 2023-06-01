     function solution(n, computers) {
        const arr = Array.from({ length: n }, (_, x) => []);
        for (let i = 0; i < computers.length; i++) {
          for (let j = 0; j < computers[i].length; j++) {
            if (computers[i][j] === 1) {
              arr[j].push(i);
            }
          }
        }
         
        for (let i = 0; i < arr.length; i++) {
          for (let j = 0; j < arr[i].length; j++) {
            arr[arr[i][j]] = [...new Set([...arr[arr[i][j]], ...arr[i]])];
          }
        }
        const result = arr.map((v) => `${v.sort((a, b) => a - b)}`);
        return [...new Set(result)].length;
      }