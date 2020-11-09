import React from 'react'
import './Todo.scss'

const Todo = () => {
    return (
        <div className="list-wrapper">
            <div className="todo-item">
            <div className="top">
                Title
            </div>
            <div className="todos">
<div className="todo">
    <span>item</span>
    <button className="delete">X</button>
</div>
            </div>
        </div>
        </div>
    )
}

export default Todo
