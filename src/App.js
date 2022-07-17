import logo from './logo.svg';
import './App.css';
import Button from './components/UI/Button/Button';
import Div from './components/UI/Div/Div';
import Input from './components/UI/Input/Input';
import Label from './components/UI/Label/Label';
import Card from './components/UI/Card/Card';
import TaskList from './components/UI/TaskList/TaskList';
import { useEffect, useReducer, useState } from 'react';
import ErrorModel from './components/UI/ErrorModel';

// const reducer = (state,action) =>{
  
//   switch(action.type)
//   {
//     case 'task':
//       {
//         return{
//           task:action.value,
//           category:state.category,
//           date:state.date
//         }
//       }

//       case 'category':
//         {
//           return{
//             task:state.task,
//             category:action.value,
//             date:state.date
//           }
//         }


//         case 'date':
//           {
//             return{
//               task:state.task,
//               category:state.category,
//               date:action.value
//             }
//           }

//           default:{
//             return state
//           }
//   }

// }

const initialState = () =>{
  return {
    task:'',
    category:'',
    date:''
  }
}

function App() {


  const [users,setUsers] = useState([])
  const [enteredtask,setTask] = useState('')
  const [entereddate,setDate] = useState('')
  const [enteredcategory,setCategory] = useState('')
  const [validForm,setValidForm] = useState(false)
  const [error ,setError] = useState()

  const handleAction = () =>{

  }
  // const [state,dispatchState] =  useReducer(reducer,initialState)

  // useEffect(()=>{
  //   console.log('changed');
    
  // },[state])

  const taskhandler = (event)=>{
    // dispatchState({
    //   type:'task',
    //   value:event.target.value,
    //   isValid: (event.target.value.trim().length > 0 ? true:false)
    // })

    setTask(event.target.value)
  }

  const datehandler = (event)=>{
    // dispatchState({
    //   type:'date',
    //   value:event.target.value,
    //   isValid: (event.target.value.trim().length > 0 ? true:false)

      
    // })

    setDate(event.target.value)

  }

  const categoryhandler = (event)=>{
    // dispatchState({
    //   type:'category',
    //   value:event.target.value,
    //   isValid: (event.target.value.trim().length > 0 ? true:false)

    // })

    setCategory(event.target.value)

  }

  const submitHandler = (event) =>{
    event.preventDefault();

    if(enteredtask.trim().length < 1 || enteredcategory.trim().length < 1 || entereddate.trim().length < 1)
    {
      setError({
        title:'Invalid Input',
        message:'Plese enter Valid input Please'
      })

      return
    }


    // setValidForm(
    //   ((state.task.trim().length > 0 && state.cetegory.trim().length > 0 && state.date.trim().length > 0) === true ? true: false)
    // )



    setTask('')
    setCategory('')
    setDate('')
   
    addTask(enteredtask,entereddate,enteredcategory)

    
  }

  const addTask = (task,date,category) =>{
    setUsers((prevusers)=>{
      return [...prevusers,{task:task,date:date,category:category,id:Math.random().toString()}]
    })
  }

  const handleFormvalidity = () =>{
  }

  const errorhandler = () =>{
    setError(null)
  }
  

  return (
    <>
    {error && <ErrorModel  title={error.title} message={error.message} confirm={errorhandler}/>}
        <Card>
            <form onSubmit={submitHandler}>

              <Div>
                <Label>Task Name</Label>
                <Input type = 'text' value={enteredtask} onChange={taskhandler} onBlur={handleFormvalidity}/>
              </Div>

        
              <Div>
                <Label>Date</Label>
                <Input type = 'text' value={entereddate} onChange={datehandler}  onBlur={handleFormvalidity}/>
              </Div>
              <Div>
                <Label>Category</Label>
                <Input type = 'text' value={enteredcategory} onChange={categoryhandler} onBlur={handleFormvalidity}/>
              </Div>

              <Div>
                <Button type='submit' handleAction={handleAction} >Add Task</Button>
              </Div>
            </form>
      </Card>
      
      <TaskList users = {users} />
      </>

  );
}

export default App;
