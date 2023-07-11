    function solution(players, callings) {
        const map = new Map();
        const map2 = new Map();
        for (let i = 0; i < players.length; i++) {
          map.set(players[i], i);
          map2.set(i, players[i]);
        }
        for (let j = 0; j < callings.length; j++) {
          map.set(callings[j], map.get(callings[j]) - 1);
          map.set(
            map2.get(map.get(callings[j])),
            map.get(map2.get(map.get(callings[j]))) + 1,
          );
          map2.set(map.get(callings[j]) + 1, map2.get(map.get(callings[j])));
          map2.set(map.get(callings[j]), callings[j]);
        }
        return [...map].sort((a, b) => a[1] - b[1]).map((v) => v[0]);
      }