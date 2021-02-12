import React, { Component } from "react";

import "./Blog.css";
import Posts from "./Posts/Posts";
import { Route } from "react-router";
import NewPost from './NewPost/NewPost'
import FullPost from './FullPost/FullPost'

import {  NavLink } from "react-router-dom";
class Blog extends Component {
  
 
 
  // https://jsonplaceholder.typicode.com/pots
  render() {
   

    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li> {/* also u use <Link/>   */}
                <NavLink to="/" exact activeClassName="my-active" activeStyle={{
                  color:"violet", 
                  textDecoration:"underline"
                }}>Home</NavLink> 
              </li>
              <li>
                
              <NavLink to={{
                pathname:'/new-post',
                hash:'#submit',
                search:'?quick-submit=true'
              }}>New Post</NavLink> 
              </li>
            </ul>
          </nav>
        </header>
      {/* <Route path="/" exact render={()=><h1>Home</h1>} />
      <Route path="/"  render={()=><h1>Home</h1>} /> */}
  <Route path="/" exact component={Posts} />
  <Route path="/new-post" exact component={NewPost} />
  <Route path="/full-post" exact component={FullPost} />


      
      </div>
    );
  }
}

export default Blog;
