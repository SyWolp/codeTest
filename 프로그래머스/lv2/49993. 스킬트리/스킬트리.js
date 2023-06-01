      function solution(skill, skill_trees) {
        const arr = skill.split("");
        const arr2 = skill_trees.map((v) => v.split("").filter((v) => arr.includes(v)),);
        let result = 0;
        let k = 0;
        for (let i = 0; i < arr2.length; i++) {
          for (let j = 0; j < arr2[i].length; j++) {
            if (arr2[i][j] !== arr[j]) break;
            else k++;
          }
          if (arr2[i].length === k) result++;
          k = 0;
        }
        return result;
      }