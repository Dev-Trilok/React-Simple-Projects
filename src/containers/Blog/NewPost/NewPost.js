import axios from "axios";
import React, { Component } from "react";
import { Redirect } from "react-router";

import "./NewPost.css";

class NewPost extends Component {
  state = {
    title: "",
    content: "",
    author: "Trilok",
    submitted: false
  };

  componentDidMount() {
    console.log('================New Post.js====================');
    // this.props.history.replace('/posts');
    console.log(this.props);
    console.log('================/New Post.js====================');
    
  }

  postDataHandler=()=> {
    const data ={
        title:this.state.title,
        content:this.state.content,
        author:this.state.author
    }
      axios.post('/posts', data)
      .then(Response=>{
        console.log(Response);  
        this.setState({submitted: true})
      })
  }

  render() {
    let redirect = null;
    if(this.state.submitted){
      redirect = <Redirect to="/posts" />
    }

    return (
      <div className="NewPost">
        {/* <Redirect to="/posts" />  */}
        {/* {redirect} */}
        <h1>Add a Post</h1>
        <label>Title</label>
        <input
          type="text"
          value={this.state.title}
          onChange={(event) => this.setState({ title: event.target.value })}
        />
        <label>Content</label>
        <textarea
          rows="4"
          value={this.state.content}
          onChange={(event) => this.setState({ content: event.target.value })}
        />
        <label>Author</label>
        <select
          value={this.state.author}
          onChange={(event) => this.setState({ author: event.target.value })}
        >
          <option value={this.state.author}>{this.state.author}</option>
          <option value="Manu">Manu</option>
        </select>
        <button onClick={this.postDataHandler}>Add Post</button>
      </div>
    );
  }
}

export default NewPost;
