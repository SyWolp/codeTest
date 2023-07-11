      function solution(progresses, speeds) {
        let aaa = Math.ceil((100 - progresses[0]) / speeds[0]);
        let count = 1;
        const result = [];
        for (let i = 1; i < progresses.length; i++) {
          const time = Math.ceil((100 - progresses[i]) / speeds[i]);
          if (aaa >= time) count++;
          else {
            result.push(count);
            aaa = time;
            count = 1;
          }
          if (i === progresses.length - 1) result.push(count);
        }
        return result;
      }