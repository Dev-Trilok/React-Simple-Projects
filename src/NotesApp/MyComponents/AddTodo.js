import React from 'react'
import {useState}   from 'react'

export const AddTodo = (props) => {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit=(e)=>{
        e.preventDefault();
        if(!setTitle || !setDesc)
        {

            alert("title or description can not be blank",setTitle,setDesc)
        }
        else
        {
            props.addTodo(title,desc);

        }

    };


    return (
        <div className="container my-3">
        <h3>Add New Todo</h3>
        <form onSubmit={submit}>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Title</label>
    <input type="text" className="form-control" id="title" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="desc" className="form-label">Todo Description</label>
    <input type="text" className="form-control" id="desc"/>
  </div>

  <button type="submit" className="btn btn-success">Add Todo</button>
</form>
            
        </div>
    )
}
