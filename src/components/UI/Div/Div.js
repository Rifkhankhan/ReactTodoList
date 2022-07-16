import React from 'react'
import style from './Div.module.css'
function Div(props) {
  return (
    <div>
        {props.option === 'radion'? <div className={`${style.radio}   `}>{props.children}</div>: <div className={`${style.div}   `}>{props.children}</div>}
    </div>
    
  )
}

export default Div