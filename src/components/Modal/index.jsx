import React from 'react'
import * as s from './Modal.module.css'
export default function Modal({ result, setResult }) {
  const handleResult = () => {
    if (result == 1) return <p className={s.x}>Vitoria do X</p>
    if (result == 2) return <p className={s.o}>Vitoria do O</p>
    if (result == 3) return <p className={s.Empate}>Empate</p>
  }

  return (
    <div className={s.bgModal} onClick={()=> setResult(null)}>
      <div className={s.card}>{handleResult()}</div>
    </div>
  )
}
