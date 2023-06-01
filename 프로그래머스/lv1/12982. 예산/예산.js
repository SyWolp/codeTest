function solution(d, budget) {
    return d.sort((a,b) => a-b).map(v => budget -= v).filter(vv => vv >= 0).length
}