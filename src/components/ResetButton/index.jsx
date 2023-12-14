import * as s from './ResetButton.module.css'
import React from 'react'

function ResetButton({ resetBoard }) {
  return (
    <button className={s.resetButton} onClick={resetBoard}>
      Reinicio
    </button>
  )
}

export default ResetButton
