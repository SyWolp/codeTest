      function solution(keymap, targets) {
        const result = Array.from({ length: targets.length }, (_, x) => 0);
        for (let i = 0; i < targets.length; i++) {
          for (let j = 0; j < targets[i].length; j++) {
            let answer = Number.MAX_SAFE_INTEGER;
            for (let k = 0; k < keymap.length; k++) {
              if (keymap[k].indexOf(targets[i][j]) !== -1)
                answer = Math.min(answer, keymap[k].indexOf(targets[i][j]));
            }
            result[i] += answer + 1;
          }
        }
        return result.map((v) => (v > Number.MAX_SAFE_INTEGER - 1 ? -1 : v));
      }