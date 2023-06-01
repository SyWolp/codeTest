function solution(fees, records) {
        const map = new Map();
        const recordsMap = records.map((v) => v.split(" "));
        const fullTime = 24 * 60 - 1;
        const result = [];
        const timeNumber = (time) => {
          const timeSum = time.split(":");
          return parseInt(timeSum[0]) * 60 + parseInt(timeSum[1]);
        };

        for (let i = 0; i < recordsMap.length; i++) {
          const timeN = timeNumber(recordsMap[i][0]);
          if (!map.has(recordsMap[i][1])) {
            map.set(recordsMap[i][1], [timeN, recordsMap[i][2], 0]);
          } else {
            if (recordsMap[i][2] === "OUT") {
              map.set(recordsMap[i][1], [
                timeN,
                recordsMap[i][2],
                timeN -
                  map.get(recordsMap[i][1])[0] +
                  map.get(recordsMap[i][1])[2],
              ]);
            } else {
              map.set(recordsMap[i][1], [
                timeN,
                recordsMap[i][2],
                map.get(recordsMap[i][1])[2],
              ]);
            }
          }
        }
        const arrMap = [...new Set(map)].sort(
          (a, b) => parseInt(a[0]) - parseInt(b[0]),
        );
        for (let [key, value] of arrMap) {
          let over = value[2] - fees[0];
          if (value[1] !== "IN") {
            if (over < 0) {
              result.push(fees[1]);
            } else {
              result.push(fees[1] + Math.ceil(over / fees[2]) * fees[3]);
            }
          } else {
            over = fullTime - value[0] + value[2] - fees[0];
            if (over < 0) {
              result.push(fees[1]);
            } else {
              result.push(fees[1] + Math.ceil(over / fees[2]) * fees[3]);
            }
          }
        }
        return result;
      }