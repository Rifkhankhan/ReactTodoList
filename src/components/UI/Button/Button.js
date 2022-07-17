import React from 'react'
import button from './Button.module.css'
function Button(props) {
  return (
    <button className={button.button} type={props.type} onClick={props.handleAction} >{props.children}</button>
  )
}

export default Button