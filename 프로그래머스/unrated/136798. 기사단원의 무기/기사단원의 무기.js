                      function solution(number, limit, power) {
                        let a = Array.from({ length: number }, (_, x) => x + 1);
                        let b = [];
                        let c = [];
                        for (let i = 0; i < a.length; i++) {
                          for (let j = 1; j <= Math.sqrt(a[i]); j++) {
                            if (a[i] % j === 0) {
                              b.push(j);
                              if (a[i] / j != j) b.push(a[i] / j);
                            }
                          }
                          c.push(b.length);
                          b = [];
                        }
                      return c.map(v => v > limit ? power : v).reduce((a,b) => a+b)
                    }