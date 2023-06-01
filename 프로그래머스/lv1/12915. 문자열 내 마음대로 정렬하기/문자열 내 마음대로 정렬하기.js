function solution(strings, n) {
  return strings.sort().map(v => v.split('').map(vv => vv.charCodeAt())).sort((a,b) => a[n] - b[n]).map(v => String.fromCharCode(...v))
}