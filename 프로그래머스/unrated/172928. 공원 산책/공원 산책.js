      function solution(park, routes) {
        const [Y, X] = [park.length - 1, park[0].length - 1];
        const startIndex = [parseInt(park.join("").indexOf("S") / park[0].length), park.join("").indexOf("S") % park[0].length];
        for (let i = 0; i < routes.length; i++) {
          const routesSplit = routes[i].split(" ");
          for (let j = 1; j <= routesSplit[1]; j++) {
            if (routesSplit[0] === "E") {
              if ( startIndex[1] + parseInt(routesSplit[1]) > X || park[startIndex[0]][startIndex[1] + j] === "X") break;
              if (j == routesSplit[1]) startIndex[1] += parseInt(routesSplit[1]);
            } else if (routesSplit[0] === "W") {
              if ( startIndex[1] - parseInt(routesSplit[1]) < 0 || park[startIndex[0]][startIndex[1] - j] === "X") break;
              if (j == routesSplit[1]) startIndex[1] -= parseInt(routesSplit[1]);
            } else if (routesSplit[0] === "N") {
              if ( startIndex[0] - parseInt(routesSplit[1]) < 0 || park[startIndex[0] - j][startIndex[1]] === "X") break;
              if (j == routesSplit[1]) startIndex[0] -= parseInt(routesSplit[1]);
            } else if (routesSplit[0] === "S") {
              if ( startIndex[0] + parseInt(routesSplit[1]) > Y || park[startIndex[0] + j][startIndex[1]] === "X") break;
              if (j == routesSplit[1]) startIndex[0] += parseInt(routesSplit[1]);
            }
          }
        }
        return startIndex;
      }