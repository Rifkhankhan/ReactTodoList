import React from 'react'
import style from './Label.module.css'
function Label(props) {
  return (
    <label className={style.label}>{props.children}</label>
  )
}

export default Label