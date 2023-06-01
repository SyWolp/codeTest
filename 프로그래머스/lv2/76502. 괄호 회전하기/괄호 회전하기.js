      function solution(s) {
        if (s.length % 2 !== 0) return 0;
        let arr = [0, 0, 0];
        const text = s.split("");
        let k = s.length;
        for (let i = 0; i < s.length; i++) {
          for (let j = 0; j < s.length; j++) {
            switch (text[j]) {
              case "[":
                arr[0]++;
                break;
              case "]":
                arr[0]--;
                break;
              case "(":
                arr[1]++;
                break;
              case ")":
                arr[1]--;
                break;
              case "{":
                arr[2]++;
                break;
              case "}":
                arr[2]--;
                break;
            }
            if (arr.some((v) => v === -1)) {
              break;
            }
          }

          arr.some((v) => v !== 0) ? k-- : null;
          text.push(text.shift());
          arr = [0, 0, 0];
        }
        return k === s.length - s.length + 1 ? 0 : k;
      }