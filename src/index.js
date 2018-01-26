import React from "react"; //import React module
import ReactDOM from "react-dom"; //import ReactDOM module
import "./index.css"; //import css
import TodoList from "./TodoList"; //import TodoList component
  
var destination = document.querySelector("#container");
  
ReactDOM.render(
    <div>
        <TodoList/>
    </div>,
    destination
);