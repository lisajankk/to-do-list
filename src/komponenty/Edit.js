import React, {useState} from 'react'

export const Edit = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task);

    const handleSubmit = (e) => {
        e.preventDefault();
        editTodo(value, task.id);
      };
      
  return (
    <form onSubmit={handleSubmit} className="TaskInput">
        <input type="text" maxLength="30" value={value} onChange={(e) => setValue(e.target.value)} className="addtask-input addtask-input-edit" placeholder='Update task' />
        <button type="submit" className='addtask-btn'>Done</button>
    </form>
  )
}