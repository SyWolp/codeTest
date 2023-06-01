      function solution(bridge_length, weight, truck_weights) {
        const bridgeArr = Array.from(
          { length: bridge_length - 1 },
          (_, x) => 0,
        );
        const clearTruck = [];
        const truck_weightsLength = truck_weights.length;
        let i = 1;
        while (true) {
          if (clearTruck.length === truck_weightsLength) break;
          if (bridgeArr.reduce((a, b) => a + b) + truck_weights[0] <= weight) {
            bridgeArr.push(truck_weights.shift());
          }
          if (bridgeArr[0] !== 0) {
            clearTruck.push(bridgeArr.shift());
          }
          bridgeArr.push(bridgeArr.shift());
          i++;
        }
        return i;
      }