      function solution(survey, choices) {
        const ob = {};
        const arr = [
          ["R", "T"],
          ["C", "F"],
          ["J", "M"],
          ["A", "N"],
        ];
        const splitSurvey = survey.map((v) => v.split(""));

        for (let i = 0; i < splitSurvey.length; i++) {
          if (choices[i] < 4) {
            if (ob[splitSurvey[i][0]]) {
              ob[splitSurvey[i][0]] = ob[splitSurvey[i][0]] + (4 - choices[i]);
            } else {
              ob[splitSurvey[i][0]] = 4 - choices[i];
            }
          } else if (choices[i] > 4) {
            if (ob[splitSurvey[i][1]]) {
              ob[splitSurvey[i][1]] = ob[splitSurvey[i][1]] + (choices[i] - 4);
            } else {
              ob[splitSurvey[i][1]] = choices[i] - 4;
            }
          }
        }
        return arr
          .map((v) =>
            v.map((vv) =>
              typeof ob[vv] !== "number" ? [0, vv] : [ob[vv], vv],
            ),
          )
          .map((v) => v.sort((a, b) => b[0] - a[0]))
          .map((v) => v[0][v[0].length - 1])
          .join("");
      }