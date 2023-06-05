import './App.css'
import Header from './Header'
import CreateTask from './createTask'
import { useState } from 'react'
import Task from './TASK.JSX'
import Footer from './Footer'

function App() {
  const [tasks, setTasks] = useState([])
 const addTask=(newTask)=>{
  setTasks((prevTask)=>{
    return [
        ...prevTask,newTask
    ]
   })

  }
  const deleteTask=(id)=>{
    debugger;
setTasks((prevTask)=>{
  return prevTask.filter((taskItem,index)=>{
    return index!==id
  })
})
  }
  return (
  <div className="App"><Header/>
  <CreateTask onAdd={addTask}/>
  <div className="container">

  <div className="row my-5" >
  {tasks.map((taskItem,index)=>{
    return(
      <Task key={index} id={index} title={taskItem.title}content={taskItem.content}delete={deleteTask}/>
    )
  })}
  </div>
  
<Footer/>
  </div>
 
 
  </div>
  )
}

export default App
