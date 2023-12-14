import { useState } from 'react'
import './App.css'
import Board from './components/Board'
import Box from './components/box'

function App() {
  const WIN_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  const [board, setBoard] = useState(Array(9).fill(null))
  const [xPlayer, SetXPlayer] = useState(true)

  const handleBoxClick = boxIndex => {
    const updatedBoard = board.map((value, idx) => {
      if (idx === boxIndex) {
        return xPlayer === true ? 'X' : 'O'
      } else {
        return value
      }
    })

    checkWinner(updatedBoard)
    setBoard(updatedBoard)
    SetXPlayer(s => !s)
  }

  const checkWinner = board => {
    for (let i = 0; i < WIN_CONDITIONS.length; i++) {
      const [x, y, z] = WIN_CONDITIONS[i]

      if (
        board[x] &&
        board[x] === board[y] &&
        board[y] === board[z] &&
        board[z]
      ) {
        console.log(board[x])
        return board[x]
      }
    }
  }

  return (
    <>
      <Board board={board} onClick={handleBoxClick} />
    </>
  )
}

export default App
