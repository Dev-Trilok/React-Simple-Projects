import React from 'react'

export const TodoItem = ({todo,onDelete}) => {
    return (
        <div>
      {  <div className="card my-3">
  <div className="card-header">
    {"Sr. no. "+todo.sno}
  </div>
  <div className="card-body">
    <h5 className="card-title">{todo.title}</h5>
    <p className="card-text">{todo.desc}</p>
    <button onClick={()=>{onDelete(todo)}} className="btn btn-danger">Delete</button>
  </div>
</div>}
            
        </div>
    )
}
