import Box from '../box'
import * as s from './Board.module.css'
import React from 'react'

function Board({ board, onClick }) {
  return (
    <>
      <div className={s.board}>
        {board.map((value, index) => (
          <React.Fragment key={index}>
            <Box value={value} onClick={() =>value===null && onClick(index)} />
          </React.Fragment>
        ))}
      </div>
    </>
  )
}

export default Board
