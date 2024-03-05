import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const Todo = ({ task, deleteTodo, editTodo, toggleComplete }) => {
  const [observaciones, setObservaciones] = useState("");


  const handleClick = () => {
    const userInput = window.prompt("Escribe tus observaciones:");
    if (userInput !== null) {
      setObservaciones(userInput);
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
        <label>
          <input type="checkbox" />
          Completada
        </label>

        <label>
          <input type="checkbox" />
          Pendiente
        </label>
      </div>
      <div className="div4">
        <div onClick={handleClick} style={{ cursor: "pointer", textDecoration: "underline", color: "yellow" }}>
          Observaciones?
        </div>
      </div>
      <div className="div5">
        {observaciones && (
          <p>{observaciones}</p>
        )}
      </div>
    </div>
  );
}
