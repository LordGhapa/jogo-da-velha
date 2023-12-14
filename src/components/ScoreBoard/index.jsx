import * as s from './ScoreBoard.module.css'
import React from 'react'

function ScoreBoard({ scores, xPlaying }) {
  const { xScore, oScore } = scores

  return (
    <div className={s.ScoreBoard}>
      <span className={`${s.score} ${s.x_score} ${!xPlaying && s.inactive} `}>
        X - {xScore}
      </span>
      <span className={`${s.score} ${s.o_score} ${xPlaying && s.inactive} `}>
        O - {oScore}
      </span>
    </div>
  )
}

export default ScoreBoard
