function solution(topping) {
  const map = new Map();
  const resultMap = new Map();
  let result = 0;
  const toppings = [...new Set([...topping])];
  for (let x of toppings) {
    map.set(topping.lastIndexOf(x), 1);
  }
    
  for (let i = 0; i < topping.length; i++) {
    resultMap.set(topping[i], 1);
    if (map.has(i)) map.delete(i);
    if (map.size < resultMap.size) break;
    else if (map.size === resultMap.size) {
      result++;
    }
  }
  return result;
}