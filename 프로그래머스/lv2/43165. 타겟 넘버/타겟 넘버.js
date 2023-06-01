      function solution(numbers, target) {
        let answer = 0;
        const DFS = (v, p) => {
          const reduce = p.reduce((a, b) => a + b);
          if (reduce === target && v === numbers.length) answer++;
          if (v === numbers.length) return;
          else {
            p[v] = -p[v];
            DFS(v + 1, p);
            p[v] = -p[v];
            DFS(v + 1, p);
          }
        };
        DFS(0, numbers);
        return answer;
      }