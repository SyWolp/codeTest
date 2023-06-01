function solution(s) {
    let num = /[0-9]/;
    let arr = [];
    const arr2 = [];
    let aaaa = '';
    for(let i = 0; i < s.length; i++) {
                              if(num.test(s[i])) {
                                aaaa += s[i];
                              }else if(s[i + 1] !== '{' && s[i] === ',') {
                                aaaa += ',';
                              }
                              if(s[i] === '}' && s[i + 1] !== undefined) {
                                arr.push(aaaa);
                                arr2.push(arr);
                                arr = []
                                aaaa = '';
                              }
                            }
                            
                            let arr3 = arr2.map(v => v.join().split(','))
                            let kk = new Set(arr3.sort((a,b) => a.length-b.length).flat(1));
                            let cc = new Set([...kk].join(',').split(','));
                            let result = [...cc].map(v => parseInt(v));
                            return result
                          }