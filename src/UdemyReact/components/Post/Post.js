import React from "react";
import "./Post.css";

const post = (props) => {
  console.log('====================================');
  console.log("In Post.js");
  
  console.log(props);

  console.log('====================================');
  return (
    <article className="Post" onClick={props.clicked}>
      <h1>{props.title}</h1>
      <div className="Info">
        <div className="Author">{props.author}</div>
      </div>
    </article>
  );
};

export default post; //withRouter
