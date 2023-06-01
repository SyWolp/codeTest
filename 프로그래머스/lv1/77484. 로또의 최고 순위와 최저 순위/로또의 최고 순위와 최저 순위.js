function solution(lottos, win_nums) {
  const zero = lottos.filter(v => v === 0);
  const yes = lottos.filter(v => win_nums.includes(v));
  return [(6 - (yes.length+zero.length))+1 === 7 ? 6 : (6 - (yes.length+zero.length))+1, (6 - yes.length)+1 === 7 ? 6 : (6 - yes.length)+1]
}