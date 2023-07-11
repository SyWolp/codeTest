function solution(plans) {
        const savePlans = [];
        let clearPlans = [];
        const plansTime = plans
          .map((v) => [
            v[0],
            parseInt(v[1].split(":")[0]) * 60 + parseInt(v[1].split(":")[1]),
            parseInt(v[2]),
          ])
          .sort((a, b) => a[1] - b[1]);
        let time = plansTime[0][1];
        while (true) {
          if (time === plansTime[0][1] && plansTime.length === 1) {
            clearPlans.push(plansTime.pop());
            clearPlans = [...clearPlans, ...savePlans.reverse()];
            break;
          }
          if (time === plansTime[0][1]) {
            if (plansTime[1][1] - plansTime[0][1] < plansTime[0][2]) {
              plansTime[0][2] =
                plansTime[0][2] - (plansTime[1][1] - plansTime[0][1]);
              time += plansTime[1][1] - plansTime[0][1];
              savePlans.push(plansTime.shift());
            } else {
              time = time + plansTime[0][2];
              clearPlans.push(plansTime.shift());
            }
          } else {
            if (savePlans.length) {
              const saveTime =
                savePlans[savePlans.length - 1][2] - (plansTime[0][1] - time);
              if (saveTime <= 0) {
                time = time + savePlans[savePlans.length - 1][2];
                clearPlans.push(savePlans.pop());
              } else {
                time += plansTime[0][1] - time;
                savePlans[savePlans.length - 1][2] = saveTime;
              }
            } else {
              time = plansTime[0][1];
            }
          }
        }
        return clearPlans.map((v) => v[0]);
      }