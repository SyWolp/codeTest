function solution(today, terms, privacies) {
        const ob = {};
        const termsSplit = terms.map((v) => v.split(" "));
        const nowDate = new Date(today).getTime();

        for (let i = 0; i < terms.length; i++) {
          ob[termsSplit[i][0]] = parseInt(termsSplit[i][1]);
        }
        const times = (date) => {
          const M = 60000 * 60 * 24 * 28;
          const dateA = date.split(" ")[0].split(".");
          const dateB = date.split(" ")[1];
          if (parseInt(dateA[1]) + ob[dateB] > 12) {
            dateA[0] = `${
              parseInt(dateA[0]) +
              parseInt((parseInt(dateA[1]) + ob[dateB] - 1) / 12)
            }`;
            dateA[1] =
              parseInt((parseInt(dateA[1]) + ob[dateB]) % 12) === 0
                ? "12"
                : `${parseInt((parseInt(dateA[1]) + ob[dateB]) % 12)}`;
          } else {
            dateA[1] = `${parseInt(dateA[1]) + ob[dateB]}`;
          }
          return nowDate / 1000 >= new Date(dateA.join(".")).getTime() / 1000;
        };

        const arr = [];
        for (let i = 0; i < privacies.length; i++) {
          if (times(privacies[i])) {
            arr.push(i + 1);
          }
        }
        return arr;
      }