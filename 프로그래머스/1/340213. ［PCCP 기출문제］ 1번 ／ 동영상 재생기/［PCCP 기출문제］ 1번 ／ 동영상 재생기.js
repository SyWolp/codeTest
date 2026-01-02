function timeConverter (pos) {
  let splitPos = pos.split(':').map((v) => parseInt(v));
  let posTime = splitPos[0] * 60 + splitPos[1]

  return posTime
}

function minutesConverter (pos) {
  const m = parseInt(pos / 60) 
  const s = pos % 60

  const strM = m < 10 ? `0${m}` : m
  const strS = s < 10 ? `0${s}` : s

  return `${strM}:${strS}`
}

function solution(video_len, pos, op_start, op_end, commands) {
  const videoTime = timeConverter(video_len);
  let posTime = timeConverter(pos)
  const opStart = timeConverter(op_start)
  const opEnd = timeConverter(op_end)

  for(let i = 0; i < commands.length; i++) {
        if(posTime >= opStart && posTime <= opEnd) {
      posTime = opEnd
    }

      if(commands[i] === 'prev') {
        if(posTime - 10 < 0) {
          posTime = 0
        } else {
          posTime -= 10
        }
    } else {
      if(posTime + 10 > videoTime ) {
        posTime = videoTime
      } else {
        posTime += 10
      }
    }

          if(posTime >= opStart && posTime <= opEnd) {
      posTime = opEnd
    }
  }

  return minutesConverter(posTime)
}