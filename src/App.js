import logo from './logo.svg';
import './App.css';
import Button from './components/UI/Button/Button';
import Div from './components/UI/Div/Div';
import Input from './components/UI/Input/Input';
import Label from './components/UI/Label/Label';
import Card from './components/UI/Card/Card';
import TaskList from './components/UI/TaskList/TaskList';
import { useEffect, useReducer, useState } from 'react';

const reducer = (state,action) =>{
  
  switch(action.type)
  {
    case 'task':
      {
        return{
          task:action.value,
          category:state.category,
          date:state.date
        }
      }

      case 'category':
        {
          return{
            task:state.task,
            category:action.value,
            date:state.date
          }
        }


        case 'date':
          {
            return{
              task:state.task,
              category:state.category,
              date:action.value
            }
          }

          default:{
            return state
          }
  }

}

function App() {


  const [users,setUsers] = useState([])

  const handleAction = () =>{

  }
  const [state,dispatchState] =  useReducer(reducer,{
    task:'',
    category:'',
    date:''
  })

  useEffect(()=>{
    console.log('changed');

  },[state])

  const taskhandler = (event)=>{
    dispatchState({
      type:'task',
      value:event.target.value,
      isValid: (event.target.value.trim().lenght > 0 ? true:false)
    })
  }



  const datehandler = (event)=>{
    dispatchState({
      type:'date',
      value:event.target.value,
      isValid: (event.target.value.trim().lenght > 0 ? true:false)

      
    })
  }

  const categoryhandler = (event)=>{
    dispatchState({
      type:'category',
      value:event.target.value,
      isValid: (event.target.value.trim().lenght > 0 ? true:false)

    })
  }

  const submitHandler = (event) =>{
    event.preventDefault();

    setUsers((prevUsers)=>{

      state.id = Math.random().toString();
      return [...prevUsers,state]
    })
  }

  return (
    <>

        <Card>
            <form onSubmit={submitHandler}>

              <Div>
                <Label>Task Name</Label>
                <Input type = 'text' value={state.task} onChange={taskhandler}/>
              </Div>

        
              <Div>
                <Label>Date</Label>
                <Input type = 'text' value={state.date} onChange={datehandler}/>
              </Div>
              <Div>
                <Label>Category</Label>
                <Input type = 'text' value={state.category} onChange={categoryhandler}/>
              </Div>

              <Div>
                <Button handleAction={handleAction}>Add Task</Button>
              </Div>
            </form>
      </Card>

         <TaskList users = {users} />
      </>

  );
}

export default App;
