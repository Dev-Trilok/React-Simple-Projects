import axios from '../../../axios';
import React, { Component } from "react";
import Post from '../../../components/Post/Post'
import "./Posts.css";
import { Link } from 'react-router-dom';

export default class Posts extends Component {
  state = {
    posts: [],
  };
  componentDidMount() {
      
    axios
      .get("/posts")
      .then((Response) => {
        const posts = Response.data.slice(0, 4);
        const updatedPosts = posts.map((post) => {
          return {
            ...post,
            author: "max",
          };
        });
        this.setState({ posts: updatedPosts });
      })
      .catch((error) => {
        this.setState({ error: error });
      });
  }
  postSelectedHandler = (id) => {
    this.setState({ selectedPostId: id });
  };
  render() {
    let posts = <p style={{ textAlign: "center" }}> Something went wrong </p>;
    if (!this.state.error) {
      posts = this.state.posts.map((post) => {
        return (
            <Link to={'/' +post.id}   key={post.id}>
          <Post
          
            title={post.title}
            author={post.author}
            clicked={() => this.postSelectedHandler(post.id)}
          />
          </Link>
        );
      });
    }
    return <section className="posts">{posts}</section>;
  }
}
