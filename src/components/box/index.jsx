import * as s from './Box.module.css'

function Box({ value, onClick }) {
  const style = value === 'X' ? s.x : s.o
  return (
    <button className={`${s.box}  ${style}`} onClick={onClick}>
      {value}
    </button>
  )
}

export default Box
