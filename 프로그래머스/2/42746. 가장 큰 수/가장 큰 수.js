  function solution(numbers) {
    if(numbers.reduce((a,b) => a+b) === 0) return '0'
    const a = numbers.map(v => `${v}`);
    a.sort();
    const c = a.map(v => v.split('')).sort((a,b) => {
      if(a[0] === b[0]) {
        return (b.join('')+a.join('')) - (a.join('')+b.join('')) 
      }else {
        return b[0] - a[0]
      }
    })
    return c.flat(1).join('')
}