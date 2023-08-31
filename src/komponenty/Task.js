import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareCheck } from '@fortawesome/free-regular-svg-icons'
import { faSquare } from '@fortawesome/free-regular-svg-icons'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

export const Task = ({task, deleteTodo, editTodo, toggleComplete}) => {
  return (
    <div className={`Task ${task.completed ? 'completed-task' : ''}`}>
        <div className='task-info' onClick={() => toggleComplete(task.id)}>
            <div className='checkbox'>
                { task.completed ?
                    <FontAwesomeIcon icon={faSquareCheck} className="beater" style={{ fontSize: '1.15rem'}} /> : 
                    <FontAwesomeIcon icon={faSquare} className="beater" style={{ fontSize: '1.15rem'}} />                     
                }
            </div>
            <p className={`task-text ${task.completed ? 'completed' : ""}`}>{task.task}</p>
        </div>
        
        <div className='task-actions'>
            <FontAwesomeIcon icon={faPen} className="spinner" onClick={() => editTodo(task.id)} />
            <FontAwesomeIcon icon={faXmark} className="shaker" onClick={() => deleteTodo(task.id)} style={{ fontSize: '1.25rem', paddingLeft: '0.75rem'}} />
        </div>
    </div>
  )
}
