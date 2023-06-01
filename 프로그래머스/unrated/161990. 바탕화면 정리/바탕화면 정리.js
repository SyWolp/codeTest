function solution(wallpaper) {
        const result = [Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, 0, 0];
        const arr = wallpaper.map((v) => v.split(""));
        for (let i = 0; i < arr.length; i++) {
          if (arr[i].includes("#") && result[0] > i) result[0] = i;
          if (arr[i].includes("#") && result[2] < i + 1) result[2] = i + 1;
        }
        for (let j = 0; j < arr[0].length; j++) {
          for (let k = 0; k < arr.length; k++) {
            if (arr[k][j] === "#" && result[1] > j) result[1] = j;
            if (arr[k][j] === "#" && result[3] < j + 1) result[3] = j + 1;
          }
        }
    return result;
}