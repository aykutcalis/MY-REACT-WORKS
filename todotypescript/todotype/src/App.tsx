import React,{ChangeEvent, FC} from 'react'
import { useState } from 'react'
import './App.css'
import { todoType } from './apptypes'
import TodoItem from './TodoItem'


const  App:FC=()=> {
const [task, setTask] = useState<string>('')
const [workDay, setWorkday] = useState<number>(0)
const [todoList, setTodoList] = useState<todoType[]>([])

console.log(todoList)
const handleChange =(event:ChangeEvent<HTMLInputElement>)=>{
  if(event.target.name==="task"){
   setTask(event.target.value)
  }
  else{
    setWorkday(Number(event.target.value))
  }
  

}
const addNewTask=():void =>{
const newTask={taskName:task,workDay:workDay};
setTodoList([...todoList,newTask]);
setTask('');
setWorkday(0);

}
const deleteTask=(nameToDelete:string):void=>{
setTodoList(todoList.filter((task)=>{
  return task.taskName!== nameToDelete
}))
}

  return (
   <div className="App">

    <div className='mainCard'>
    <input className='mainCardInput' type="text" value={task} name="task" placeholder='taskınız giriniz...' onChange={handleChange} />
     <input className='mainCardInput' type="number" value={workDay} name="workday" placeholder='Kaç günde tamamlamalısınız.'  onChange={handleChange}/>
     <button className='mainCardButton' onClick={addNewTask}>Yeni Task Ekle</button>
    </div>

<div className='todoCart'>
  {todoList.map((task:todoType,index:number)=>{
    return <TodoItem key={index} task={task} deleteTask={deleteTask}/>
  })}
</div>
   </div>
  )
}

export default App
