import React, {useState} from 'react'
import { TaskInput } from './TaskInput'
import { v4 as uuidv4 } from 'uuid';
import { Task } from './Task';
import { Edit } from './Edit';

uuidv4();

export const TaskList = () => {
    const [todos, setTodos] = useState([]);
    const [currentView, setCurrentView] = useState('All');

    const addTodo = (todo) => {
        setTodos([
            ...todos, 
            {id: uuidv4(), 
            task: todo, 
            completed: false, 
            isEditing: false},
        ]);
    }
    
    const clearAllTasks = () => { 
        setTodos([]); 
      };

    const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));
    const activeTasks = todos.filter((todo) => !todo.completed);
    const completedTasks = todos.filter((todo) => todo.completed);

    const toggleComplete = (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      );
    }
  
    const editTodo = (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
        )
      );
    }
  
    const editTask = (task, id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
        )
      );
    };

    const displayTodos = currentView === 'All' ? todos :
                        currentView === 'Active' ? activeTasks :
                        completedTasks;


  return (       
    <div className="TaskListGen">
        <div className='todo-header'>
            <div className="itx-img">
                <img alt="itx" loading="lazy"  decoding="async" data-nimg="1" src="https://itx.group/_next/static/media/logo.0328ac97.svg"></img>
            </div>
            <div className="title-container">
                <h1>TO-DO LIST</h1>
            </div>
        </div>
        <hr className="hrLine"/>
        
        <div className="TaskListSm">
            <div className="sort-list-line">
                <button className={currentView === 'All' ? 'sort-list-active' : 'sort-list'} onClick={() => setCurrentView('All')}>
                    All
                </button>
                <button className={currentView === 'Active' ? 'sort-list-active' : 'sort-list'} onClick={() => setCurrentView('Active')}>
                    Active
                </button>
                <button className={currentView === 'Completed' ? 'sort-list-active' : 'sort-list'} onClick={() => setCurrentView('Completed')}>
                    Completed
                </button>
                <button className="delete-list" onClick={clearAllTasks}>
                    Empty
                </button>
            </div>

            <div className="scrollbar" id="scrollbar5">
                <hr className='hrScrollbar'/>
                {displayTodos.map((todo) =>
                    todo.isEditing ? (
                    <Edit editTodo={editTask} task={todo} />
                    ) : (
                    <Task
                        key={todo.id}
                        task={todo}
                        deleteTodo={deleteTodo}
                        editTodo={editTodo}
                        toggleComplete={toggleComplete}
                        className="task"
                        />
                    )
                )}
                <hr className='hrScrollbar'/>
            </div>
            
            <TaskInput addTodo={addTodo} />
        </div>
    </div>
  )
}
