function solution(sizes) {
 return sizes.map(v => v.sort((a,b) => a-b)).sort((a,b) => b[0] - a[0])[0][0] * sizes.map(v => v.sort((a,b) => a-b)).sort((a,b) => b[1] - a[1])[0][1];
}