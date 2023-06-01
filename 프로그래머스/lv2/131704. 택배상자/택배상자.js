function solution(order) {
        const sub = [];
        const olength = order.length;
        let k = 1;
        let i = 0;
        while (true) {
          if (
            (k > olength && sub[sub.length - 1] !== order[i]) ||
            (k > olength && !sub.length)
          )
            break;
          if (order[0] !== k && sub[sub.length - 1] !== order[i]) {
            sub.push(k);
            k++;
          } else if (sub[sub.length - 1] === order[i]) {
            i++;
            sub.pop();
          } else if (order[i] === k) {
            i++;
            k++;
          }
        }
        return i;
      }