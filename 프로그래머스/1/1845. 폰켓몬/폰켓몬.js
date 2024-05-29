                      function solution(nums) {
                        const arr = Array.from({length: Math.max(...nums)}, (_,x) => x + 1);
                        const arr2 = [];
                        const result = [];
                        for(let x of arr) {
                         arr2.push(nums.filter(v => v === x)) 
                        }
                        arr2.sort((a,b) => b.length - a.length)
                        for(let i = 0; i < nums.length / 2; i++) {
                          if(arr2[i][0] !== undefined) {
                          result.push(arr2[i][0]);
                        }
                        }
                        return result.length;
                      }