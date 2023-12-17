import { useEffect, useState } from 'react'
import './App.css'
import Board from './components/Board'
import ScoreBoard from './components/ScoreBoard'
import ResetButton from './components/ResetButton'
import Modal from './components/Modal'

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
  const [scores, setScores] = useState({ xScore: 0, oScore: 0 })
  const [gameOver, setGameOver] = useState(false)

  const [result, setResult] = useState(null)

  const handleBoxClick = boxIndex => {
    const updatedBoard = board.map((value, idx) => {
      if (idx === boxIndex) {
        return xPlayer === true ? 'X' : 'O'
      } else {
        return value
      }
    })

    const winner = checkWinner(updatedBoard)

    if (winner) {
      if (winner === 'O') {
        let { oScore } = scores
        oScore += 1
        setScores({ ...scores, oScore })
        setResult(2)
      } else {
        let { xScore } = scores
        xScore += 1
        setResult(1)
        setScores({ ...scores, xScore })
      }
    }

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
        setGameOver(true)
        return board[x]
      }
    }
  }
  // console.log(board)
  // console.log(board.every(value => value !== null))

  useEffect(() => {
    if (board.every(value => value !== null)) {
      resetBoard()
       setResult(3)
    }
  }, [board])

  const resetBoard = () => {
  
    SetXPlayer(true)
    setGameOver(false)
    setBoard(Array(9).fill(null))
  }

  const resetBoardAll = () => {
   
    SetXPlayer(true)
    setGameOver(false)
    setBoard(Array(9).fill(null))
    setScores({ xScore: 0, oScore: 0 })
  }

  return (
    <>
      {result && <Modal result={result} setResult={setResult} />}
      <ScoreBoard scores={scores} xPlaying={xPlayer} />
      <Board board={board} onClick={gameOver ? resetBoard : handleBoxClick} />
      <ResetButton resetBoard={resetBoardAll} />
    </>
  )
}

export default App
