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
                    <label >{user.category}</label>
                    <label >{user.date}</label>
                    <label >{user.task}</label>
                </Div>
            ))
        }
      </Card>
  )
           
}

export default TaskList