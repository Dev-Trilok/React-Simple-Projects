import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Blog.css";
import Posts from "./Posts/Posts";
import { Redirect, Route, Switch } from "react-router";
// import NewPost from "./NewPost/NewPost";
import FullPost from "./FullPost/FullPost";
import  asynComponent from "./../../Hoc/asynComp"

const asynComp = asynComponent(()=>{
  return import('./NewPost/NewPost');
});

class Blog extends Component {
  state ={
    auth : false
  }
  // https://jsonplaceholder.typicode.com/pots
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                {" "}
                {/* also u use <Link/>   */}
                <NavLink
                  to="/"
                  exact
                  activeClassName="my-active"
                  activeStyle={{
                    color: "red",
                    textDecoration: "underline",
                  }}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: "/new-post",
                    hash: "#submit",
                    search: "?quick-submit=true",
                  }}
                  activeStyle={{
                    color: "red",
                    textDecoration: "underline",
                  }}

                >
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        {/* <Route path="/" exact render={()=><h1>Home</h1>} />
      <Route path="/"  render={()=><h1>Home</h1>} /> */}
        <Switch>
          <Route path="/posts"  component={Posts} />
          {this.state.auth ? <Route path="/new-post" exact component={asynComp} /> :null}
          {/* <Redirect from="/" to="/posts" /> */}
          <Route render ={()=><h1>Page Not found</h1>} />
          {/* <Route path="/:id" exact component={FullPost} /> */}
        </Switch>
      </div>
    );
  }
}

export default Blog;
