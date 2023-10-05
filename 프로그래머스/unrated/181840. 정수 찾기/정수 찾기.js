function solution(num_list, n) {
    return num_list.findIndex((number) => number === n) > 0 ? 1 : 0;
}