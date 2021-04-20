import axios from "../../../axios";
import React, { Component } from "react";
import Post from "../../../components/Post/Post";
import "./Posts.css";
import { Link } from "react-router-dom";

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
            author: "Trilok",
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
    // this.props.history.push({pathname:'/' +id});
    // this.props.history.push('/' +id);

  };
  render() {
    let posts = <p style={{ textAlign: "center" }}> Something went wrong </p>;
    if (!this.state.error) {
      posts = this.state.posts.map((post) => {
        return (
          // <Link to={"/" + post.id} key={post.id}>
            <Post
              key={Post.id}
              title={post.title}
              author={post.author}
              {...this.props}
              clicked={() => this.postSelectedHandler(post.id)}
            />
          // </Link>
        );
      });
    }
    return <section className="posts">{posts}</section>;
  }
}
