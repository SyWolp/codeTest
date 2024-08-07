      function solution(queue1, queue2) {
        let queueOneSum = 0;
        let queueTwoSum = 0;
        for(let i = 0; i < queue1.length; i++) {
         queueOneSum += queue1[i];   
        }
          
        for(let i = 0; i < queue2.length; i++) {
         queueTwoSum += queue2[i];   
        } 
          
        const target = (queueOneSum + queueTwoSum) / 2;
          
        for(let i = 0; i < Math.max(queue1.length, queue2.length); i++) {
          if(queue1[i] > target || queue2[i] > target) {
            return -1
          }
        } 
          
        let indexOne = 0;
        let indexTwo = 0;

        if (queueOneSum === queueTwoSum) {
          return 0;
        } else if ((queueOneSum + queueTwoSum) % 2 !== 0) {
          return -1;
        }

        let i = 0;
        while (i < 12000000) {
          if (queueOneSum === target) {
            return i;
          }
          if (queueOneSum > target) {
            queueOneSum -= queue1[indexOne];
            queue2.push(queue1[indexOne]);
            indexOne++;
          } else {
            queueOneSum += queue2[indexTwo];
            queue1.push(queue2[indexTwo]);
            indexTwo++;
          }
          i++;
        }
          
        return -1
      }