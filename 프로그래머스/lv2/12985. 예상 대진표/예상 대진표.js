      function solution(n, a, b) {
        let big = a > b ? a : b;
        let small = a > b ? b : a;
        let round = n;
        let i = 2;
        let k = 0;
        while (i <= n) {
          i = i * 2;
          k++;
        }
        // console.log(k);
        while (round >= 1) {
          if (round === 1) {
            k = 1;
            break;
          }
          if (round / 2 < big && round / 2 >= small) {
            break;
          } else {
            round = round / 2;
            if (big > round) {
              big -= round;
              small -= round;
            }
            // console.log(round, big, small);
            k--;
          }
        }
        return k;
      }
