function solution(s) {
    return /[a-z]/gi.test(s) ? false : s.length === 4 || s.length === 6 ? true : false
}