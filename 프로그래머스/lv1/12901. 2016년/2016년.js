function solution(a, b) {
  return new Date(2016, a-1, b).toDateString().split(' ')[0].toUpperCase()
}