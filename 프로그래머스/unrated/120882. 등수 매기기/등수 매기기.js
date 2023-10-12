  function solution(score) {
    return score.map(v=>(v[0]+v[1])/2).map(v=> [...score.map(v=>(v[0]+v[1])/2)].sort((a,b) => b-a).indexOf(v)+1);
}