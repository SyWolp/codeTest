function solution(nums) {
        let result = [];
        let answer = 0;
        const search = (number) => {
          const nums = parseInt(Math.sqrt(number));
          for (let i = 2; i <= nums; i++) {
            if (number % i === 0) {
              return false;
            }
          }
          return true;
        };
        const DFS = (index) => {
          if (result.length > 2 || index === nums.length) {
            // console.log(result);
            if (result.length === 3 && search(result.reduce((a, b) => a + b))) {
              answer++;
            }
            return;
          } else {
            result.push(nums[index]);
            DFS(index + 1);
            result.pop(nums[index]);
            DFS(index + 1);
          }
        };
        DFS(0);
        return answer;
      }