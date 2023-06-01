      function solution(numbers, hand) {
        const arr = [];
        const hands = { left: [3, 0], right: [3, 2] };
        for (let i = 0; i < numbers.length; i++) {
          if (numbers[i - 1] === numbers[i]) arr.push(arr[arr.length - 1]);
          else {
            if ([1, 4, 7].includes(numbers[i])) {
              arr.push("L");
              hands.left = [Math.ceil(numbers[i] / 3) - 1, 0];
            } else if ([3, 6, 9].includes(numbers[i])) {
              arr.push("R");
              hands.right = [Math.ceil(numbers[i] / 3) - 1, 2];
            } else {
              const x = numbers[i] === 0 ? 3 : Math.ceil(numbers[i] / 3) - 1;
              let eee =
                Math.abs(hands.left[0] - x) + Math.abs(hands.left[1] - 1) ===
                Math.abs(hands.right[0] - x) + Math.abs(hands.right[1] - 1)
                  ? "same"
                  : Math.abs(hands.left[0] - x) + Math.abs(hands.left[1] - 1) >
                    Math.abs(hands.right[0] - x) + Math.abs(hands.right[1] - 1)
                  ? "right"
                  : "left";
              if (eee === "same") {
                arr.push(hand[0].toUpperCase());
                hands[hand] = [x, 1];
              } else if (eee === "left") {
                arr.push("L");
                hands.left = [x, 1];
              } else {
                arr.push("R");
                hands.right = [x, 1];
              }
            }
          }
        }
        return arr.join("");
      }