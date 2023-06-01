      function solution(a, b, n) {
        let result = 0;
        while (true) {
          if (n < a) break;
          result += parseInt(n / a) * b;
          n = parseInt(n / a) * b + parseInt(n % a);
        }
        return result;
      }