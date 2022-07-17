import React from 'react'
import Card from '../Card/Card'
import Label from '../Label/Label'
import style from './TaskList.module.css';
import Div from '../Div/Div'

function TaskList(props) {

  return (
      <Card>
        {
            props.users.map((user)=>(
                <Div key={user.id}>
                  <div className={style.container}>
                    <div className={style.first}>
                      <p >{user.task}</p>
                      <p >{user.category}</p>
                      <p >{user.date}</p>

                    </div>

                    <div className='second'>
                      <button className={`${style.delete} ${style.button}`}>Delete</button>
                      <button className={`${style.edit} ${style.button}`}>Edit</button>
                      <button className={`${style.show} ${style.button}`}>Show</button>
                    </div>
                  </div>
                
                   
                </Div>
            ))
        }
      </Card>

  )
           
}

export default TaskList