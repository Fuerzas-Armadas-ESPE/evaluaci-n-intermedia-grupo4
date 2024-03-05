import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const TodoTem = ({ task, deleteTodo, editTodo, toggleComplete }) => {
  const [objetivos, setobjetivos] = useState("");


  const handleClick = () => {
    const userInput = window.prompt("Escribe tus objetivos:");
    if (userInput !== null) {
      setobjetivos(userInput);
    }
  };

  return (
    <div className="Todo">
      <div className="div1">
        <p className={`${task.completed ? "completed" : "incompleted"}`} onClick={() => toggleComplete(task.id)}>{task.task}</p>
      </div>
      <div className="div2">
        <FontAwesomeIcon className="edit-icon" icon={faPenToSquare} onClick={() => editTodo(task.id)} />
        <FontAwesomeIcon className="delete-icon" icon={faTrash} onClick={() => deleteTodo(task.id)} />
      </div>
      <div className="div3">

      </div>
      <div className="div4">
        <div onClick={handleClick} style={{ cursor: "pointer", textDecoration: "underline", color: "yellow" }}>
          objetivos?
        </div>
      </div>
      <div className="div5">
        {objetivos && (
          <p>{objetivos}</p>
        )}
      </div>
    </div>
  );
}
