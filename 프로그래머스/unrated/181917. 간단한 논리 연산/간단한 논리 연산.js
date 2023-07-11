      function solution(x1, x2, x3, x4) {
        return (x1 + x2 >= 1 ? 1 : 0) + (x3 + x4 >= 1 ? 1 : 0) <= 1 ? false : true;
      }