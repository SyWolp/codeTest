function solution(files) {
        const arr = [];
        for (let i = 0; i < files.length; i++) {
          let subArr = [];
          let string = "";
          let number = "";
          for (let j = 0; j < files[i].length; j++) {
            if (/[0-9]/.test(files[i][j])) {
              if (string !== "") {
                subArr.push(string);
                string = "";
              }
              number += files[i][j];
            } else if (
              /[0-9]/.test(files[i][j]) === false &&
              /[0-9]/.test(files[i][j - 1])
            ) {
              string = files[i].substring(j, files[i].length);
              break;
            } else {
              string += files[i][j];
            }
          }
          subArr.push(...[number, string]);
          arr.push(subArr);
          subArr = [];
        }
        const sort = arr.sort((a, b) => {
          if (a[0].toLowerCase() === b[0].toLowerCase()) {
            return parseInt(a[1]) - parseInt(b[1]);
          } else {
            return a[0].localeCompare(b[0]);
          }
        });

        return sort.map((value) => value.join(""));
      }