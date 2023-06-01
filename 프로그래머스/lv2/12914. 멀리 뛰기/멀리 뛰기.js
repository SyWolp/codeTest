                        function solution(n) {
                          let answer = [1, 1];
                          let result = 0;
                          let i = 1;
                          if (n == 1) {
                            return 1 % 1234567;
                          } else {
                            while (i < n) {
                              // console.log(answer[0], answer[1])
                              result = answer[0] % 1234567 + answer[1] % 1234567;
                              answer.unshift(result);
                              i++;
                            }
                            return result % 1234567;
                          }
                        }
