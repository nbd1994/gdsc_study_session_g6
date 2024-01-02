import React, { useState } from "react";
import {
  BiCheckDouble,
  BiEdit,
  BiTrash,
  BiCheckCircle,
  BiReset,
  BiRefresh,
} from "react-icons/bi";
import "./TodoList.css";


function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputvalue, setInputValue] = useState("");
  const [editIndex, setEditIndex] = useState(-1);

  const addTodo = () => {
    if (inputvalue.trim() !== "") {
      if (editIndex !== -1) {
        const updatedTodos = [...todos];
        updatedTodos[editIndex] = {
          task: inputvalue,
          completed: updatedTodos[editIndex].completed,
        };
        setTodos(updatedTodos);
        setInputValue("");
        setEditIndex(-1);
      } else {
        setTodos([...todos, { task: inputvalue, completed: false }]);
        setInputValue("");
      }
    }
  };
  const startEdit = (index) => {
    setInputValue(todos[index].task);
    setEditIndex(index);
  };
  const cancelEdit = () => {
    setInputValue("");
    setEditIndex(-1);
  };
const removeTodos=(index)=>{
    const updatedTodos=todos.filter((_,i)=>i!==index);
    setTodos(updatedTodos);
}

const toggleCompleted=(index)=>{
    const updatedTodos=[...todos]
    updatedTodos[index].completed=!updatedTodos[index].completed
} 

  return (
    <div className="todo-container">
      <h1>To-Do List </h1>
      <div className="input-section">
        <input
          placeholder="Enter a new task"
          type="text"
          className="input-field"
          value={inputvalue}
          onChange={(e) => setInputValue(e.target.value)}
        />

        {editIndex !== -1 ? (
          <>
            <button onClick={addTodo} className="update-btn">
              <BiCheckDouble />
            </button>
            <button onClick={cancelEdit} className="cancel-btn">
              <BiRefresh />
            </button>
          </>
        ) : (
          <button onClick={addTodo} className="add-btn">Add</button>
        )}
      </div>

      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className={todo.completed ? "completed" : ""}>
            {todo.task}
            <div className="btn-group">
              <button onClick={startEdit} className="btn-edit">
                <BiEdit />
              </button>
              <button onCanPlay={removeTodos} className="btn-remove">
                <BiTrash />
              </button>
              <button className="btn-done" onClick={()=>toggleCompleted(index)}>
                {todo.completed ? <BiReset /> : <BiCheckCircle />}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
