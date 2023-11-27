     function solution(bandage, health, attacks) {
        let copyHealth = health;
        let result = -1;
        for (let i = 0; i < attacks.length; i++) {
          copyHealth -= attacks[i][1];
          if (i === attacks.length - 1) break;
          else if (copyHealth <= 0) {
            copyHealth = -1;
            break;
          } else {
            const index = attacks[i + 1][0] - 1 - attacks[i][0];
            if (index >= bandage[0]) {
              const plusH = index / bandage[0];
              const na = (index % bandage[0]) - 1;
              copyHealth +=
                (bandage[1] * bandage[0] + bandage[2]) * plusH +
                (na >= 0 ? na : 0);
            } else {
              copyHealth += bandage[1] * index;
            }
            copyHealth = copyHealth > health ? health : copyHealth;
          }
        }
        return copyHealth <= 0 ? -1 : copyHealth;
      }