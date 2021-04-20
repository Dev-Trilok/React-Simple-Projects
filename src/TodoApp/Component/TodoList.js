import React from "react";

export default function TodoList(props) {
  return (
    <div className="Todo_Style">
      <i
        className="fa fa-times"
        onClick={() => {
          props.onSelect(props.id);
        }}
        area-hidden="true"
      >
        +
      </i>
      <li> {props.text}</li>
    </div>
  );
}
