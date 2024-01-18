 function solution(friends, gifts) {
        const listMap = new Map();
        const friendScore = Array.from({ length: friends.length }, (_, x) => 0);
        for (friend of friends) {
          listMap.set(friend, { giftSend: {}, giftFrom: {}, score: 0 });
        }

        for (let i = 0; i < gifts.length; i++) {
          const splitG = gifts[i].split(" ");
          listMap.set(splitG[0], {
            giftSend: {
              ...listMap.get(splitG[0]).giftSend,
              [splitG[1]]: listMap.get(splitG[0]).giftSend[splitG[1]]
                ? listMap.get(splitG[0]).giftSend[splitG[1]] + 1
                : 1,
            },
            giftFrom: {
              ...listMap.get(splitG[0]).giftFrom,
            },
            score: listMap.get(splitG[0]).score + 1,
          });

          listMap.set(splitG[1], {
            giftSend: {
              ...listMap.get(splitG[1]).giftSend,
            },
            giftFrom: {
              ...listMap.get(splitG[1]).giftFrom,
              [splitG[0]]: listMap.get(splitG[1]).giftFrom[splitG[0]]
                ? listMap.get(splitG[1]).giftFrom[splitG[0]] + 1
                : 1,
            },

            score: listMap.get(splitG[1]).score - 1,
          });
        }
        for (let i = 0; i < friends.length; i++) {
          for (let j = 0; j < friends.length; j++) {
            const send = listMap.get(friends[i]).giftSend[friends[j]] || 0;
            const from = listMap.get(friends[i]).giftFrom[friends[j]] || 0;
            if (friends[i] === friends[j]) continue;
            if (send === from) {
              if (
                listMap.get(friends[i]).score > listMap.get(friends[j]).score
              ) {
                friendScore[i]++;
              }
            } else if (send > from) {
              friendScore[i]++;
            }
          }
        }
        return Math.max(...friendScore);
      }