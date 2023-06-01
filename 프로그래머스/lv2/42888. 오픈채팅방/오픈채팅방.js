  function solution(record) {
    const data = record.map(v => v.split(' '));
    const result = [];
    const ob = {};
    data.map((v) => {
      if(v[2]) ob[v[1]] = v[2]
    })
    for (let i = 0; i < data.length; i++) {
      switch (data[i][0]) {
        case 'Enter':
          result.push(`${ob[data[i][1]]}님이 들어왔습니다.` )
          break;
        case 'Leave':
          result.push(`${ob[data[i][1]]}님이 나갔습니다.` )
          break;
        default: break;
      }
    }
  return result
}