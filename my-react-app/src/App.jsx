import React, { useState } from 'react'
const App =() => {
const [task, setTask] =useState("");
const[todoList, setTodoList]= useState([]);
const[editIndex, setEditIndex] = useState(null);
const addHandler = () => {
  if(task === "")
  {
    alert("Please type something before add")
  }
  else{
  if(editIndex !== null){
  const updatedList = [...todoList];
  updatedList[index] =task;
  setTodoList([...updatedList]);
  setEditIndex(null);
  }else{
setTodoList([...todoList, task]);
  } 
  setTask("");
}
}
const deleteHandler = (index) =>{
  console.log(todoList[index]);
  const updatedList =todoList.filter((d,i)=>i !== index);
  setTodoList([...updatedList]);
}
const editHandler ={index}=>{
  console.log(todoList[index]);
  setEditIndex(index);
}
return (
  <div>
    <h1>
      ToDo List
    </h1>
    <input
    value={task}
    onChange={(e) => setTask(e.target.value)}></input>
    <button onClick={addHandler}>{editIndex !== null ? "UPDATE": "ADD"}</button>
    <br></br>
    {
      todoList.map((d,index)=>
      <div key={index}>
        <span>{d}</span>
        <button onClick={()=>editHandler(index)}>EDIT</button>

        <button onClick={()=>deleteHandler(index)}>DELETE</button>
        </div>)}
  </div>
)
}