     function solution(number, k) {
        const arr = [];
        for (let i = 0; i < number.length; i++) {
          const value = number[i];
          while (k > 0 && arr[arr.length - 1] < value) {
            arr.pop();
            k--;
          }
          arr.push(number[i]);
        }

        return arr.length > number.length - k
          ? arr.splice(0, arr.length - 1).join("")
          : arr.join("");
      }