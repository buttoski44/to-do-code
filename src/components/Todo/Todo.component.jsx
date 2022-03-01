import React from "react";
import "./todo.style.css";

export const Todo = ({task}) =>{
    return (
    <div className="todo-container">
        <li>
        <h2> {task} </h2> 
        </li> 
    </div>)
}