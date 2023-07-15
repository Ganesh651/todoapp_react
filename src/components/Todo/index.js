import {MdDelete} from 'react-icons/md'
import './index.css'

const Todo = props=>{
      const {eachTodo, deleteTodoItem,onCheckBoxChecked} = props
      const {id, todo,isChecked} = eachTodo
      console.log(isChecked)
      const onDeleteTodo = ()=>{
            deleteTodoItem(id)
      }

      const onButtonChecked = ()=>{
            onCheckBoxChecked(id)
      }

      const className = isChecked ? "checkbox-checked" : null
      return(
      <li>
            <div className='todo-container'>
                <input value={isChecked} onClick={onButtonChecked} id="todo" type="checkbox" className='checkbox-input' />  
               <div className='label-container'>
                  <label htmlFor='todo' className={`${className} checkbox-label`}>{todo}</label>
                <button onClick={onDeleteTodo} type='button' className='delete-button'>
                  <MdDelete className='delete-icon'/>
                </button>
                </div> 
                </div>
            </li>
      )
}


export default Todo