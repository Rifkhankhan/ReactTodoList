import React from 'react'
import Button from './Button/Button'
import Card from './Card/Card'
import Error from './ErrorModel.module.css'

function ErrorModel(props) {
  return (
    <div>
        <div className={Error.backdrop} onClick={props.confirm}/>
        <Card className={Error.model}>
            <header className={Error.header}>
                <h2>{props.title}</h2>
            </header>

            <div className={Error.message}>{props.message}</div>

            <footer>
                <Button onClick={props.confirm}>Okay</Button>
            </footer>
        </Card>
    </div>
  
  )
}

export default ErrorModel