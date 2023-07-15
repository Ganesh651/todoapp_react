import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import Todo from './components/Todo'
import './App.css';

const App = ()=>{
  const [todo, setTodo] = useState("")
  // const [isChecked,setIsChecked] = useState(false)
  const stored = localStorage.getItem("todolist")
  const parsedTodo = JSON.parse(stored)
  const [todoList, setTodoList] = useState(parsedTodo === null ? [] : parsedTodo)
  


  const onChangeUserInput = e =>{
    setTodo(e.target.value)
  }

  const onAddTodo = ()=>{
    if (todo === ""){
      alert("Enter Valid Text")
    }
    else {
      const newTodo = {
      id: uuidv4(),
      todo,
      isChecked: false
    }
    setTodoList((prevTodoList)=>[...prevTodoList, newTodo])
    setTodo("")

  }
}
const deleteTodoItem = (id) =>{
  const filteredTodoList = todoList.filter(eachTodoItem=>eachTodoItem.id !== id)
  setTodoList(filteredTodoList)
}

const onCheckBoxChecked = (id) =>{

    const filterData = todoList.map(each=>{
      if(each.id===id){
        return {...each,isChecked:!each.isChecked}
      }
     return each
})
setTodoList(filterData)


    
    
}

const onSave = () => {

  localStorage.setItem("todolist",JSON.stringify(todoList))
  
}

  return (
    <div className="app-container">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="text-center p-3">Todos</h1>
              <h1><span className="fw-bold">Create</span> Task</h1>
              <input onChange={onChangeUserInput} value={todo} type="text" className="user-input" placeholder="What needs to be done?" />
              <button onClick={onAddTodo} type="button" className="add-btn">Add</button>
              <h1><span className="fw-bold">My</span> Tasks</h1>
             <ul className='todo-items-container'>
              {todoList.map(eachTodo=>(
                  <Todo eachTodo={eachTodo} key={eachTodo.id} deleteTodoItem={deleteTodoItem}  onCheckBoxChecked={onCheckBoxChecked} />
              ))}
             </ul>
              <button onClick={onSave} type="button" className="save-btn">Save</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default App;
