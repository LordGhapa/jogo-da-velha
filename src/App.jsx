import './App.css'
import Board from './components/Board'
import Box from './components/box'

function App() {
  const board = ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X']

  return (
    <>
      <Board board={board} onClick={null} />
    </>
  )
}

export default App
