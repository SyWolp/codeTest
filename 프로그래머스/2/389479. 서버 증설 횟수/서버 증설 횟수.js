      function solution(players, m, k) {
        let serverCount = 0;
        let endTimeArr = [];
        let result = 0;
        for (let i = 0; i < players.length; i++) {
          if (players[i] >= m) {
          const enableSever =
              serverCount > 0
                ? m === 1
                  ? serverCount * m
                  : (serverCount + 1) * m
                : m - 1;

            if (players[i] > enableSever) {
              const plusSever = Math.ceil((players[i] - enableSever) / m);
              serverCount += plusSever;
              endTimeArr.push({
                server: plusSever,
                time: k - 1 + i,
              });

              result += plusSever;
            }
          }
          if (endTimeArr[0]?.time === i) {
            serverCount -= endTimeArr[0].server;
            endTimeArr.shift();
          }
        }
        return result
      }