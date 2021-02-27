import React, { Component } from "react";
import axios from "axios";
import "./FullPost.css";

class FullPost extends Component {
  state = {
    loadedPost: null,
    error: false,
  };

  componentDidUpdate() {
    console.log("================Full Post.js===================");
    console.log(this.props);
    console.log("==================/Full Post.js==================");
    this.loadData();
  }
  componentDidMount(){
    console.log("=================Full Post.js===================");
    console.log(this.props);
    console.log("==================/Full Post.js==================");
    this.loadData();
  }

  loadData() {
    if (this.props.match.params.id) {
      if (
        !this.state.loadedPost ||
        (this.state.loadedPost && this.state.loadedPost.id != this.props.id)
      ) {
        axios.get("/posts/" + this.props.match.params.id).then((Response) => {
          console.log(Response);
          this.setState({ loadedPost: Response.data });
        });
      }
    }
  }

  deletePostHandler = () => {
    axios
      .delete("/posts/" + this.props.match.params.id)
      .then((Response) => {
        console.log(Response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    let post = <p style={{ textAlign: "center" }}> Please select a Post!</p>;
    if (this.props.match.params.id) {
      post = <p style={{ textAlign: "center" }}> Loading...!</p>;
    }
    if (this.state.loadedPost) {
      post = (
        <div className="FullPost">
          <h1>{this.state.loadedPost.title}</h1>
          <p>{this.state.loadedPost.body}</p>
          <div className="Edit">
            <button className="Delete" onClick={this.deletePostHandler}>
              Delete
            </button>
          </div>
        </div>
      );
    }

    return post;
  }
}

export default FullPost;
