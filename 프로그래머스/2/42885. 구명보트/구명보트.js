      function solution(people, limit) {
        const sortPeople = people.sort((a, b) => b - a);
        let result = 0;
        let i = 0;
        let j = sortPeople.length - 1;
        while (i <= j) {
          if (sortPeople.length === 1) {
            result++;
          }
          if (sortPeople[i] + sortPeople[j] > limit) {
            result++;
            i++;
          } else if (sortPeople[i] + sortPeople[j] <= limit) {
            result++;
            i++;
            j--;
          }
        }
        return result;
      }