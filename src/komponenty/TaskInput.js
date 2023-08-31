import React, {useState} from 'react'

export const TaskInput = ({addTodo}) => {
    const [value, setValue] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        if (value) {
            addTodo(value);
            setValue('');
        }
    }

  return (
    <form classname='TaskInput' onSubmit = {handleSubmit}>
        <input type="text" value = {value} className='addtask-input' maxLength="30"
        placeholder='Add task' onChange={(e) => setValue(e.target.value)}/>
    
        <button type='submit' className="btn center">
            <div className="btn-content">
                <svg className="svg-add-btn" width="90px" height="35px" viewBox="1 0 90 35">
                    <polyline points="89,1 89,33 1,33 1,1 89,1" className="bg-line" />
                    <polyline points="89,1 89,33 1,33 1,1 89,1" className="hl-line" />
                </svg>
                <span>ADD</span>
            </div>
        </button> 
    </form>
  )
}
