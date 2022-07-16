import React from 'react'
import style from './Input.module.css'
function Input(props) {
  return (
   <input className={style.input} type={props.type} value ={props.value} onChange={props.onChange}/>
  )
}

export default Input