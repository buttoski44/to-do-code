import React from "react";
import { Todo } from "../Todo/Todo.component";
import "./todolist.style.css"


export const Todolist = ({check}) => {
    return <div >
            <ul className="todo-list">
                {check.map(todo => (<Todo task={todo.task} key={todo.id}/>))}
            </ul>
          </div>;
  };        